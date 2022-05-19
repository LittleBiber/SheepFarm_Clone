import React, { useState, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import styled from "styled-components";
import { makeShader } from "./map_shader";

import DetailModal from "../DetailModal";
import WelcomeModal from "../WelcomeModal";

import Pastures from "../Pastures";

const Main = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const TEST = styled.button`
  position: absolute;
  top: 1%;
`;

export default function Canvas({
  items,
  nowSpotList,
  setNowSpotList,
  nowSpot,
  setNowSpot,
}) {
  const canvasParent = useRef(null);
  const CANVAS_SETTING = {
    width: window.innerWidth, // vw
    height: window.innerHeight, // vh
    resolution: 1, //window.devicePixelRatio,
    backgroundColor: 0x4284d2,
  };
  const BACKGROUND_SIZE = { width: 1720, height: 1738 };
  const SECTOR_SIZE = 56 * 2;
  const FIRST_FOCUS_SECTOR = "6_9";
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

  let buttons = new PIXI.Container();
  let spotDict = {};
  let sectorSpotDict = {};
  let sectorDict = {};

  let test = {};

  const [welcomeModal, setWelcomeModal] = useState(true);
  const [spotModal, setSpotModal] = useState(false);
  const [detailData, setDetailData] = useState({});

  const app = new PIXI.Application(CANVAS_SETTING);
  const uiLayer = new PIXI.Container();

  const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: window.innerWidth,
    worldHeight: window.innerHeight,
    interaction: app.renderer.plugins.interaction,
  });

  viewport
    .drag()
    .pinch()
    .wheel()
    .clamp({
      left: -BACKGROUND_SIZE.width,
      right: BACKGROUND_SIZE.width * 2,
      top: -BACKGROUND_SIZE.height,
      bottom: BACKGROUND_SIZE.height * 2,
    })
    .clampZoom({
      minWidth: 120,
      minHeight: 120,
      maxWidth: window.innerWidth,
      maxHeight: window.innerHeight,
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
  });

  app.stage.addChild(viewport);
  const background = viewport.addChild(PIXI.Sprite.from("/Map/sector_0.png"));

  useEffect(() => {
    if (canvasParent.current) canvasParent.current.appendChild(app.view); // DOM접근 대신 useRef 사용
    drawBox();
    drawCloud();

    app.stage.addChild(uiLayer);

    // console.log("init_spotDict", spotDict);
    // navigator.clipboard.writeText(JSON.parse(JSON.stringify(sectorSpotDict)));

    console.log("spotDict", spotDict);
    console.log("sectorSpotDict", sectorSpotDict);
    console.log("sectorDict", sectorDict);

    test = { ...spotDict };
  }, []);

  let blinkingGizmo = new PIXI.Graphics();
  blinkingGizmo.zOrder = 10000;
  blinkingGizmo.interactive = false;
  blinkingGizmo.buttonMode = false;

  const makeSector = (spot_x, spot_y, parent) => {
    let sectorId =
      Math.floor(spot_x / SECTOR_SIZE) + "_" + Math.floor(spot_y / SECTOR_SIZE);

    let sector = null;

    if (sectorId in sectorDict === false) {
      sector = new PIXI.Container();
      let lockedCover = new PIXI.Graphics();
      if (sectorId in UNLOCKED_SECTOR) {
        lockedCover.beginFill(0x555555, 0.1);
      } else {
        lockedCover.beginFill(0x555555, 0.5);
      }

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

      sector.interactive = true; // 이벤트 처리 활성
      sector.buttonMode = true; // 이건 모르겠다;;

      if (sectorId in UNLOCKED_SECTOR == false) {
        const locked = PIXI.Sprite.from("/Map/locked.png"); // 자물쇠 이미지 여기서 추가됨
        locked.anchor.set(0.5, 0.5);
        sector.addChild(locked);
      }

      parent.addChild(sector); // buttons에 섹터(칸 하나) 추가
    } else {
      sector = sectorDict[sectorId];
    }

    return sector;
  };

  const makeSpot = (farmInfo, spot_x, spot_y, parent, sectorId) => {
    let spot = new PIXI.Graphics();
    const rectSize = 5;
    if (farmInfo.size == "5X5") spot.beginFill(0x774466, 0.5);
    else if (farmInfo.size == "6X6") spot.beginFill(0x665588, 0.5);
    else if (farmInfo.size == "7X7") spot.beginFill(0x3355bb, 0.5);

    spot.drawRect(-rectSize / 2, -rectSize / 2, rectSize, rectSize);
    spot.endFill();

    spot.farmInfo = farmInfo;
    spot.parentSectorId = sectorId;
    spot.visible = false; // 유저 클릭으로 활성화되었을 때만 보이게 > 기본값 False
    spot.x = spot_x - parent.x - SECTOR_SIZE / 2;
    spot.y = spot_y - parent.y - SECTOR_SIZE / 2;
    spot.buttonMode = true;
    spot.interactive = true;

    return spot; // 생성된 spot 반환
  };

  const drawBox = () => {
    items.forEach((e, i, a) => {
      // 각 데이터, index, array 일듯
      let farmInfo = e;
      let spot_x = farmInfo.x * 5.6 + 71;
      let spot_y = farmInfo.y * 5.6 + 92;

      let sector = makeSector(spot_x, spot_y, buttons); // 각각의 칸 생성해 반환
      if (sector.sectorId in sectorSpotDict === false)
        sectorSpotDict[sector.sectorId] = [];

      let spot = makeSpot(farmInfo, spot_x, spot_y, sector, sector.sectorId); // 칸 내부에 Spot 사각형 생성
      sector.addChild(spot);
      spotDict[farmInfo.id] = spot;

      sectorSpotDict[sector.sectorId].push(spot);
    });

    background.addChild(buttons); // 아까 생성했던 Sector 저장된 변수를 배경에 추가
  };

  const drawCloud = () => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) === false) {
      app.cloudsVfx = makeShader();
      app.cloudsVfx.scale.set(
        (BACKGROUND_SIZE.width * 3) / app.cloudsVfx.originalWidth,
        (BACKGROUND_SIZE.height * 3) / app.cloudsVfx.originalHeight
      );

      app.cloudsVfx.x = -BACKGROUND_SIZE.width;
      app.cloudsVfx.y = -BACKGROUND_SIZE.height;

      background.addChild(app.cloudsVfx);

      let elapsed = 0.0;
      app.ticker.add((delta) => {
        elapsed += delta;
        if (!!app.cloudsVfx) app.cloudsVfx.updateTexture(app, elapsed);
      });
    }
  };

  const blinkingEffect = (target) => {
    blinkingGizmo.clear();

    let elapsed = 0.0;
    app.ticker.add((delta) => {
      elapsed += delta;

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

    app.blinkingItem = target;
    let bound = app.blinkingItem.getLocalBounds();

    // app.blinkingItem.removeChild(blinkingGizmo);

    blinkingGizmo.lineStyle({
      width: 3,
      color: 0xffdd00,
      alpha: 1.0,
      join: PIXI.LINE_JOIN.ROUND,
    });
    blinkingGizmo.drawRect(bound.x, bound.y, bound.width, bound.height);
    app.blinkingItem.addChild(blinkingGizmo);
  };

  const setBlinkingTarget = (target) => {
    // sector는 farmInfo가 없음
    // spot는 farmInfo가 있음

    // console.log("BlinkingTarget", target);

    blinkingGizmo.clear();

    if (!target) return;

    blinkingEffect(target);

    for (let sectorId in sectorDict) {
      // 섹터 전부 숨기기
      let sector = sectorDict[sectorId];
      sector.parent.setChildIndex(sector, 0);
      let spots = sectorSpotDict[sectorId];

      spots.forEach((e) => {
        e.visible = false;
      });
    }

    if ("farmInfo" in target) {
      // 클릭한 대상이 Spot이면
      showInfoPopup(target);

      //     setPinId(target.farmInfo.id); // 내가 추가한거
      //     updateSelectedRow(target.farmInfo.id);

      let sectorId = target.parentSectorId;
      let spots = sectorSpotDict[sectorId];
      /*
      ! 문제상황: Pasture클릭시 spotId 상태값 변경됨 > spots, sectorSpotDict가 null?
      viewport.on("click") 에서 상태값 변경 방식으로 테스트해도 같은 결과
        > 원본에선 onClickGoButton 으로 처리했으니 참고해보기
      */

      // console.log("sectorID", sectorId);
      // console.log("spots/sectorSpotDict", spots, sectorSpotDict);

      spots.forEach((e) => {
        e.visible = true;
      });

      // let sector = sectorDict[target.parentSectorId];
      // showFarmInfosInSector(sector);
    }

    if ("sectorId" in target) {
      // Sector 클릭시
      let spots = sectorSpotDict[target.sectorId];

      //! spots를 상태값으로 사용해 Pastures에 전달
      setNowSpotList(spots);

      spots.forEach((e) => {
        e.visible = true;
      });

      let sector = sectorDict[target.sectorId];
      sector.parent.setChildIndex(sector, sector.parent.children.length - 1); // sectorDict[target.sectorId].zOrder = 100;

      // showFarmInfosInSector(null);
    }
  };

  const onClickSector = (sector) => {
    removePopup();
    setBlinkingTarget(sector);

    viewport.snap(sector.x, sector.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });
  };

  const onClickSpot = (spot) => {
    // console.log("spot/spotDict", spotDict);
    // console.log("spot/sectorSpotDict", sectorSpotDict);
    // console.log("spot/sectorDict", sectorDict)

    setBlinkingTarget(spot);
    showInfoPopup(spot);

    setNowSpot(spot.farmInfo.id);

    viewport.snap(spot.parent.x + spot.x, spot.parent.y + spot.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });

    showInfoPopup(spot);
  };

  const onClickWelcomeModalOk = () => {
    onClickSector(sectorDict[FIRST_FOCUS_SECTOR]);
  };

  let lastPopup = null;
  const removePopup = () => {
    if (lastPopup != null) {
      lastPopup.parent.removeChild(lastPopup);
      lastPopup = null;
    }
  };

  const showInfoPopup = (spot) => {
    console.log(spot);

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
  };

  const handleWelcomeModal = () => {
    setWelcomeModal(false);
    onClickWelcomeModalOk();
  };

  let elapsed = 0.0; // 굳이 0.0 으로 준거보면 이유가 있을텐데.
  app.ticker.add((delta) => {
    elapsed += delta;
    if (!!app.cloudsVfx)
      // 구름효과가 true면
      app.cloudsVfx.updateTexture(app, elapsed); // 구름효과에 updateTexture 실행?

    if (!!lastPopup) {
      // 섹터 안의 spot 에 값이 할당됨
      let b = lastPopup.followTarget.getBounds(); // lastPopup 어디서 왔는지 찾기
      lastPopup.x = b.x + b.width / 2;
      lastPopup.y = b.y + b.height / 2;
    }

    if (app.blinkingItem) {
      if (blinkingGizmo.width < 20) {
        //! 왜 Spot부분은 계속 남아있는거지?
        blinkingGizmo.scale.set(
          1.0 + 2.0 * ((Math.sin(elapsed * 0.1) + 1) / 2)
        );
      } else {
        blinkingGizmo.scale.set(
          1.0 + 0.1 * ((Math.sin(elapsed * 0.1) + 1) / 2)
        );
        blinkingGizmo.alpha = 1 - Math.abs(Math.sin(elapsed * 0.05));
      }
    }
  });

  // const testFunction = (target) => {
  //   if (target.event) {
  //     let sectorId = "";
  //     let farmInfo = null;

  //     let sector = null;
  //     let spot = null;

  //     for (let k in sectorDict) {
  //       let s = sectorDict[k];
  //       if (s.getBounds().contains(target.screen.x, target.screen.y)) {
  //         sector = s;

  //         sectorId = k;
  //         break;
  //       }
  //     }

  //     if (sectorId != "") {
  //       let spots = sectorSpotDict[sectorId];
  //       for (let i in spots) {
  //         let s = spots[i];
  //         if (s.getBounds().contains(target.screen.x, target.screen.y)) {
  //           spot = s;

  //           farmInfo = spot.farmInfo;

  //           break;
  //         }
  //       }
  //     }

  //     if (
  //       !!spot &&
  //       (spot?.parent === app.blinkingItem ||
  //         (app.blinkingItem !== null &&
  //           app.blinkingItem?.parent == spot?.parent))
  //     ) {
  //       onClickSpot(spot);
  //     } else if (!!sector) {
  //       onClickSector(sector);
  //     }
  //   } else {
  //     alert("테스트!");

  //     console.log("이 부분 돌아가야 된다고ㅠㅠ", target);

  //     let sectorId = target.parentSectorId;
  //     let farmInfo = null;

  //     let sector = sectorDict[target.parentSectorId];
  //     let spot = null;

  //     console.log("제반사항 체크", sectorSpotDict, sectorId);

  //     if (sectorId !== "") {
  //       let spots = sectorSpotDict[sectorId];
  //       for (let i in spots) {
  //         let s = spots[i];
  //         if (s.farmInfo.id === target.farmInfo.id) {
  //           spot = s;

  //           farmInfo = spot.farmInfo;

  //           break;
  //         }
  //       }
  //     }

  //     console.log("이게 null이라고?", spot);

  //     // if (
  //     //   !!spot &&
  //     //   (spot?.parent === app.blinkingItem ||
  //     //     (app.blinkingItem !== null &&
  //     //       app.blinkingItem?.parent == spot?.parent))
  //     // ) {
  //     onClickSpot(spot);
  //     // } else if (!!sector) {
  //     //   onClickSector(sector);
  //     // }
  //   }
  // };

  // useEffect(() => {
  //   // console.log("커스텀", event);

  //   // const target = nowSpotList.find((one) => one.farmInfo.id === nowSpot);

  //   // console.log("찾는 대상", target);

  //   // // if (target) testFunction(target);
  //   // // else console.log("대상 없으므로 무시");
  //   // if (target) {
  //   //   removePopup();
  //   //   onClickSpot(spotDict[target.farmInfo.id]);
  //   // }

  //   if (nowSpot) {
  //     console.log("테스트", nowSpot);
  //     onClickGoButton(nowSpot);
  //   }
  // }, [nowSpot]);

  const onClickGoButton = (id) => {
    // let data = event.target.data;
    console.log("onClick_spotDict", spotDict);

    if (id in spotDict) {
      removePopup();

      console.log("OnClick실행됨");

      onClickSpot(spotDict[id]);
    }

    // onClickSpot(id);
  };

  return (
    <Main>
      <div ref={canvasParent} />
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
        nowSpotList={nowSpotList}
        nowSpot={nowSpot}
        setNowSpot={setNowSpot}
      />
      <TEST onClick={() => onClickGoButton(159)}>테스트</TEST>
    </Main>
  );
}

/*

원래 계획: Pasture과 같이 움직이게 하려고 클릭시 id를 상태값으로 저장해 이벤트를 보여주려고 했는데
  useEffect안에서 호출한 setBlinkingTarget 함수는 sectorSpotDict를 제대로 가져오지 못함(빈 객체)

수정 계획: sectorSpotDict를 상태값으로 저장해보기


! Pasture클릭을 함수로 줘서 

*/
