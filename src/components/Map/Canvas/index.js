import React, { useState, useEffect, useRef, forwardRef } from "react";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import styled from "styled-components";
import { makeShader } from "./map_shader";

import DetailModal from "../DetailModal";
import WelcomeModal from "../WelcomeModal";

import Pastures from "../Pastures";
import Search from "../Search";

const Test = styled.button`
  position: absolute;
  top: 1%;
`;

export default function Canvas({ items, setNowSpotList }) {
  //!
  let nowSpotId = null;
  const nowSpotList = useRef([]);
  //!

  const [welcomeModal, setWelcomeModal] = useState(true);
  const [spotModal, setSpotModal] = useState(false);
  const [detailData, setDetailData] = useState({});
  function handleWelcomeModal() {
    console.log("spot/spotDict", spotDict);
    console.log("spot/sectorSpotDict", sectorSpotDict);
    console.log("spot/sectorDict", sectorDict);
    setWelcomeModal(false);
    onClickWelcomeModalOk();
  }

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;
  const canvasParent = document.getElementById("root");
  const CANVAS_SETTING = {
    width: vw,
    height: vh,
    // resizeTo: canvasParent,
    resolution: 1, //window.devicePixelRatio,
    backgroundColor: 0x4284d2,
  };
  const BACKGROUND_SIZE = { width: 1720, height: 1738 };

  const SECTOR_SIZE = 56 * 2;
  const UNLOCKED_SECTOR = {
    "3_9": 0,
    "4_9": 0,
    "4_10": 0,
    "5_7": 0,
    "5_8": 0,
    "5_9": 0,
    "5_10": 0,
    "6_7": 0,
    "6_8": 0,
    "6_9": 0,
    "6_10": 0,
    "7_7": 0,
    "7_8": 0,
    "7_9": 0,
    "7_10": 0,
    "8_8": 0,
    "8_9": 0,
    "8_10": 0,
  };
  const FIRST_FOCUS_SECTOR = "6_9";

  const app = new PIXI.Application(CANVAS_SETTING);
  canvasParent.appendChild(app.view);

  const viewport = new Viewport({
    screenWidth: vw,
    screenHeight: vh,
    worldWidth: vw,
    worldHeight: vh,
    interaction: app.renderer.plugins.interaction,
  });

  viewport
    .drag()
    .pinch()
    .wheel()
    // .decelerate()
    .clamp({
      left: -BACKGROUND_SIZE.width,
      right: BACKGROUND_SIZE.width * 2,
      top: -BACKGROUND_SIZE.height,
      bottom: BACKGROUND_SIZE.height * 2,
    })
    .clampZoom({
      minWidth: 120,
      minHeight: 120,
      maxWidth: vw,
      maxHeight: vh,
    });

  viewport.on("drag-start", (event) => {
    removePopup();
  });
  viewport.on("clicked", (event) => {
    let sectorId = "";
    let farmInfo = null;
    let sector = null;
    let spot = null;
    for (let k in sectorDict) {
      let s = sectorDict[k];
      if (s.getBounds().contains(event.screen.x, event.screen.y)) {
        sector = s;
        sectorId = k;
        break;
      }
    }

    if (sectorId != "") {
      let spots = sectorSpotDict[sectorId];
      for (let i in spots) {
        let s = spots[i];
        if (s.getBounds().contains(event.screen.x, event.screen.y)) {
          spot = s;
          farmInfo = spot.farmInfo;
          break;
        }
      }
    }

    if (
      !!spot &&
      (spot.parent == app.blinkingItem ||
        (app.blinkingItem != null && app.blinkingItem.parent == spot.parent))
    ) {
      onClickSpot(spot);
    } else if (!!sector) {
      onClickSector(sector);
    }
    // console.log(sectorId, sector, spot, farmInfo);
  });

  //.decelerate()
  // add the viewport to the stage
  app.stage.addChild(viewport);

  // Attach background
  const background = viewport.addChild(PIXI.Sprite.from("/Map/sector_0.png"));

  if (isMobile == false) {
    app.cloudsVfx = makeShader();
    app.cloudsVfx.scale.set(
      (BACKGROUND_SIZE.width * 3) / app.cloudsVfx.originalWidth,
      (BACKGROUND_SIZE.height * 3) / app.cloudsVfx.originalHeight
    );

    app.cloudsVfx.x = -BACKGROUND_SIZE.width;
    app.cloudsVfx.y = -BACKGROUND_SIZE.height;
  }

  const uiLayer = new PIXI.Container();
  app.stage.addChild(uiLayer);

  // Attach spots
  let buttons = new PIXI.Container();
  let spotDict = {};
  let sectorSpotDict = {};
  let sectorDict = {};

  //!

  items.forEach((e, i, a) => {
    let farmInfo = e;
    let spot_x = farmInfo.x * 5.6 + 71;
    let spot_y = farmInfo.y * 5.6 + 92;
    let sector = makeSector(spot_x, spot_y, buttons);
    if (sector.sectorId in sectorSpotDict == false)
      sectorSpotDict[sector.sectorId] = [];

    let spot = makeSpot(farmInfo, spot_x, spot_y, sector, sector.sectorId);
    sector.addChild(spot);
    spotDict[farmInfo.id] = spot;
    sectorSpotDict[sector.sectorId].push(spot);
  });

  background.addChild(buttons);
  if (app.cloudsVfx) background.addChild(app.cloudsVfx);

  let elapsed = 0.0;
  app.ticker.add((delta) => {
    elapsed += delta;
    if (!!app.cloudsVfx) app.cloudsVfx.updateTexture(app, elapsed);

    if (!!lastPopup) {
      let b = lastPopup.followTarget.getBounds();
      lastPopup.x = b.x + b.width / 2;
      lastPopup.y = b.y + b.height / 2;
    }

    if (app.blinkingItem) {
      if (blinkingGizmo.width < 20)
        blinkingGizmo.scale.set(
          1.0 + 2.0 * ((Math.sin(elapsed * 0.1) + 1) / 2)
        );
      else
        blinkingGizmo.scale.set(
          1.0 + 0.1 * ((Math.sin(elapsed * 0.1) + 1) / 2)
        );
      blinkingGizmo.alpha = 1 - Math.abs(Math.sin(elapsed * 0.05));
    }
  });

  function makeSector(spot_x, spot_y, parent) {
    let sectorId =
      Math.floor(spot_x / SECTOR_SIZE) + "_" + Math.floor(spot_y / SECTOR_SIZE);
    let sector = null;
    if (sectorId in sectorDict == false) {
      sector = new PIXI.Container();

      let lockedCover = new PIXI.Graphics();
      if (sectorId in UNLOCKED_SECTOR) lockedCover.beginFill(0x555555, 0.1);
      else lockedCover.beginFill(0x555555, 0.5);
      lockedCover.lineStyle(3, 0x000000, 0.25);
      lockedCover.drawRect(
        -SECTOR_SIZE / 2,
        -SECTOR_SIZE / 2,
        SECTOR_SIZE,
        SECTOR_SIZE
      );
      lockedCover.endFill();

      sector.addChild(lockedCover);

      sector.sectorId = sectorId;
      sectorDict[sectorId] = sector;
      sector.x = Math.floor(spot_x / SECTOR_SIZE) * SECTOR_SIZE;
      sector.y = Math.floor(spot_y / SECTOR_SIZE) * SECTOR_SIZE;

      sector.interactive = true;
      sector.buttonMode = true;

      if (sectorId in UNLOCKED_SECTOR == false) {
        const locked = PIXI.Sprite.from("/Map/locked.png");
        locked.anchor.set(0.5, 0.5);
        sector.addChild(locked);
      }

      parent.addChild(sector);
    } else {
      sector = sectorDict[sectorId];
    }

    return sector;
  }

  function makeSpot(farmInfo, spot_x, spot_y, parent, sectorId) {
    let spot = new PIXI.Graphics();
    const rectSize = 5;
    if (farmInfo.size == "5X5") spot.beginFill(0x774466, 0.5);
    else if (farmInfo.size == "6X6") spot.beginFill(0x665588, 0.5);
    else if (farmInfo.size == "7X7") spot.beginFill(0x3355bb, 0.5);

    spot.drawRect(-rectSize / 2, -rectSize / 2, rectSize, rectSize);
    spot.endFill();

    spot.farmInfo = farmInfo;
    spot.parentSectorId = sectorId;
    spot.visible = false;
    spot.x = spot_x - parent.x - SECTOR_SIZE / 2;
    spot.y = spot_y - parent.y - SECTOR_SIZE / 2;
    spot.buttonMode = true;
    spot.interactive = true;

    return spot;
  }

  function onClickSector(sector) {
    removePopup();
    setBlinkingTarget(sector);
    viewport.snap(sector.x, sector.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });

    console.log(app);
    mkSpotList(app.blinkingItem?.sectorId);
    // nowSpotList.current = sectorSpotDict[app.blinkingItem?.sectorId];
  }

  function onClickSpot(spot) {
    setBlinkingTarget(spot);
    viewport.snap(spot.parent.x + spot.x, spot.parent.y + spot.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });
  }

  let lastPopup = null;
  function removePopup() {
    if (lastPopup != null) {
      lastPopup.parent.removeChild(lastPopup);
      lastPopup = null;
    }
  }

  function showInfoPopup(spot) {
    let farmInfo = spot.farmInfo;

    removePopup();

    // Make Popup
    let popup = new PIXI.Container();
    let popupBg = PIXI.Sprite.from("/Map/selected_spot_info.png");
    let moreBtn = PIXI.Sprite.from("/Map/more_btn.png");
    moreBtn.anchor.set(0.5, 0.5);
    moreBtn.y = -70;
    moreBtn.buttonMode = true;
    moreBtn.interactive = true;
    moreBtn.on("pointerup", () => {
      setDetailData(farmInfo);
      setSpotModal(true);
    });

    // set title text
    let popupTitleText = new PIXI.Text("[2321] 333.333", {
      fontFamily: "Arial",
      fontSize: 15,
      fill: 0xffffff,
      align: "center",
    });
    popupTitleText.anchor.set(0.5, 0.5);
    popupTitleText.y = -225;
    popupTitleText.text = `NZ, Stewart Island, X:${farmInfo.x} Y:${farmInfo.y}`;

    // set max sheep count text
    let maxSheepNum = 3;
    if (farmInfo.id <= 6111) maxSheepNum = 3;
    else if (farmInfo.id <= 9111)
      // 9111
      maxSheepNum = 4;
    else if (farmInfo.id <= 11111) maxSheepNum = 5;
    else maxSheepNum = "-";

    let popupSheepText = new PIXI.Text("555555", {
      fontFamily: "Arial",
      fontSize: 18,
      fill: 0xffffff,
      align: "center",
    });
    popupSheepText.anchor.set(0.5, 0.5);
    popupSheepText.y = -118;
    popupSheepText.x = 20;
    popupSheepText.text = "" + maxSheepNum;

    // set farm size text
    let popupSizeText = new PIXI.Text("555555", {
      fontFamily: "Arial",
      fontSize: 18,
      fill: 0xffffff,
      align: "center",
    });
    popupSizeText.anchor.set(0.5, 0.5);
    popupSizeText.y = -165;
    popupSizeText.x = 20;
    popupSizeText.text = farmInfo.size;

    //attach
    popupBg.anchor.set(0.5, 1);
    popupBg.addChild(moreBtn);
    popupBg.addChild(popupTitleText);
    popupBg.addChild(popupSheepText);
    popupBg.addChild(popupSizeText);
    popup.addChild(popupBg);

    popup.x = spot.getBounds().x;
    popup.y = spot.getBounds().y;
    popup.followTarget = spot;
    uiLayer.addChild(popup);

    lastPopup = popup;

    // show selected row
    // updateSelectedRow(farmInfo.id);
  }

  var blinkingGizmo = new PIXI.Graphics();
  blinkingGizmo.zOrder = 10000;
  blinkingGizmo.interactive = false;
  blinkingGizmo.buttonMode = false;
  function setBlinkingTarget(target) {
    blinkingGizmo.clear();

    if ("farmInfo" in target) {
      showInfoPopup(target);
      // updateSelectedRow(target.farmInfo.id);
    }

    for (let sectorId in sectorDict) {
      //last item was sector
      let sector = sectorDict[sectorId];
      sector.parent.setChildIndex(sector, 0);
      let spots = sectorSpotDict[sectorId];
      spots.forEach((e) => {
        e.visible = false;
      });
      // console.log("hide last spots");
    }

    if (target != null) {
      app.blinkingItem = target;
      let bound = app.blinkingItem.getLocalBounds();
      blinkingGizmo.lineStyle({
        width: 3,
        color: 0xffdd00,
        alpha: 1.0,
        join: PIXI.LINE_JOIN.ROUND,
      });
      blinkingGizmo.drawRect(bound.x, bound.y, bound.width, bound.height);
      app.blinkingItem.addChild(blinkingGizmo);

      if ("farmInfo" in target) {
        // on select spot
        let sectorId = target.parentSectorId;
        let spots = sectorSpotDict[sectorId];
        spots.forEach((e) => {
          e.visible = true;
        });
      } else if ("sectorId" in target) {
        // on select sector
        let spots = sectorSpotDict[target.sectorId];
        spots.forEach((e) => {
          e.visible = true;
        });
        let sector = sectorDict[target.sectorId];
        sector.parent.setChildIndex(sector, sector.parent.children.length - 1); // sectorDict[target.sectorId].zOrder = 100;
      }
    }
  }

  function onClickGoButton(id) {
    console.log(id);

    if (id in spotDict) {
      removePopup();
      onClickSpot(spotDict[id]);
    }
  }

  function onClickLandSearch(id) {
    if (id in spotDict) {
      removePopup();
      onClickSpot(spotDict[id]);
    }
  }

  function onClickWelcomeModalOk() {
    onClickSector(sectorDict[FIRST_FOCUS_SECTOR]);
    // mkSpotList(FIRST_FOCUS_SECTOR);
  }

  function mkSpotList(SECTOR_ID) {
    console.log("함수결과", sectorSpotDict[SECTOR_ID]);
    return (nowSpotList.current = sectorSpotDict[SECTOR_ID]);
  }

  return (
    <>
      <div id="map-canv" />
      <WelcomeModal
        welcomeModal={welcomeModal}
        setWelcomeModal={handleWelcomeModal}
      />
      <DetailModal
        {...detailData}
        spotModal={spotModal}
        setSpotModal={setSpotModal}
      />
      <Pastures
        nowSpotList={nowSpotList.current}
        nowSpotId={nowSpotId}
        onClickGoButton={onClickGoButton}
      />
      <Search onClickLandSearch={onClickLandSearch} />
      <Test onClick={() => console.log(nowSpotList)}>출력테스트</Test>
    </>
  );
}

/*

  상태: 함수 실행은 되는데 Graphics 적용이 제대로 안됨.

  !원인: 상태값 자체를 안 써야 해결됨

  !해결방법: 말 그대로 상태값 없이 모든것을 구현하기

*/
// console.log("spot/spotDict", spotDict);
// console.log("spot/sectorSpotDict", sectorSpotDict);
// console.log("spot/sectorDict", sectorDict);
