import React, { useState, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import styled from "styled-components";
import { makeShader } from "./map_shader";
import DetailModal from "../DetailModal";
import WelcomeModal from "../WelcomeModal";
import Search from "../Search";

const Main = styled.div``;

const PasturesMain = styled.div`
  background-color: white;
  z-index: 10;
  position: absolute;
  right: 0;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  background-color: #e4bb88;
  border: 5px solid #504130;
  filter: drop-shadow(0px 5px 0px #000);
  bottom: 10px;

  span {
    pointer-events: none;
  }

  @media (min-width: 758px) {
    width: 350px;
    top: 100px;
  }

  @media (max-width: 757px) {
    width: calc(100% - 20px);
    top: calc(100% - 35%);
  }

  .spot-list-heading {
    background-color: #504130;
    color: white;
    padding: 6px 5px 5px 5px;
    box-sizing: border-box;
    width: calc(100% + 1px);
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    // span에는 따로 적용되는 속성 없었음

    span {
      font-family: Arial !important;
    }
  }

  #pastures-list {
    height: calc(100% - 30px);
    overflow-y: scroll;

    .selected {
      background: #643a3a !important;
    }

    .box_cover {
      padding: 4px;
      display: flex;
      justify-content: space-between;
      background: #ba8f5d;
      border-radius: 10px;
      margin: 10px;
      cursor: pointer;

      span {
        display: flex;
        align-items: center;
        pointer-events: none;
      }

      .sector-id {
        color: "white";
        justify-content: center;
        font-family: Arial !important;

        @media (min-width: 758px) {
          width: 50px;
        }

        @media (max-width: 757px) {
          width: unset;
        }
      }

      .property {
        display: flex;
        align-items: center;
        color: white;
        font-family: Arial !important;

        @media (min-width: 758px) {
          padding: 0 5px;
        }

        img {
          @media (max-width: 757px) {
            width: 25px;
          }
        }
      }

      .sold-btn {
        text-align: center;
        background-color: #bf3f3f;
        color: white;
        cursor: pointer;
        padding: 0 6px;
        text-decoration: none;
        border-radius: 10px;
        border: none;
        font-size: 13px;
        font-family: "Arial";

        // @media (min-width: 758px) {
        //   width: 86px;
        // }
      }
    }
  }
`;

export default function Canvas({ items }) {
  // 최초 canvas 생성 위한 상태값
  const [load, setLoad] = useState(false);

  //!
  const welcomeModal = useRef(null);

  const pastureList = useRef(null);
  const pastureCount = useRef(null);
  const detailWrapper = useRef(null);

  const detailId = useRef(null);
  const detailSize = useRef(null);
  const detailSheepLimit = useRef(null);
  const detailPurchaseButton = useRef(null);
  const detailOwnerId = useRef(null);
  const detailDesc = useRef(null);
  const detailImg = useRef(null);
  //!

  function handleWelcomeModal() {
    welcomeModal.current.style.display = "none";
    onClickSector(sectorDict[FIRST_FOCUS_SECTOR]);
  }

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;

  const canvasParent = document.getElementById("root");

  const CANVAS_SETTING = {
    width: vw,
    height: vh,
    resizeTo: canvasParent,
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

  useEffect(() => {
    // 왜 상태값 업데이트를 해줘야 canvas가 렌더되는걸까
    setLoad(true);
  }, []);

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

  // add the viewport to the stage
  app.stage.addChild(viewport);

  // Attach background
  const background = viewport.addChild(PIXI.Sprite.from("/Map/sector_0.png"));

  const itemListParent = document.getElementById("pastures-list");

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
  let prevSpotId = null;

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
    removeAllchild(itemListParent);

    setBlinkingTarget(sector);
    viewport.snap(sector.x, sector.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });

    makeHtmlPastureBox(sector.sectorId);
    prevSpotId = null;
  }

  function onClickSpot(spot) {
    setBlinkingTarget(spot);
    viewport.snap(spot.parent.x + spot.x, spot.parent.y + spot.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });

    pastureSelected(spot.farmInfo.id);
    handleDetailData(spot.farmInfo);
  }

  function handleDetailData(farmInfo) {
    detailId.current.innerText = farmInfo.id;
    detailSize.current.innerText = farmInfo.size;
    detailSheepLimit.current.innerText = farmInfo.sheepLimit;

    if (farmInfo.size === "5X5") {
      detailDesc.current.innerText = `This pasture can only hold 3 sheep at a time, therefore a
      combo effect that requires more than 4 sheep will not be able to be&nbsp;triggered.`;
    } else if (farmInfo.size === "6X6") {
      detailDesc.current.innerText = `This pasture can hold 4 sheep at a time. Which means it is
      able to trigger a combo effect that requires 4 sheep.`;
    } else {
      detailDesc.current.innerText = `This pasture can hold 5 sheep at a time. This means you can
      trigger all kind of combo effect with this pasture.`;
    }

    const Button = document.createElement("button");
    if (farmInfo.sold) {
      Button.setAttribute("id", "occupied-btn");
      Button.setAttribute("class", "btn");
      Button.onclick = () =>
        window.open(
          `https://opensea.io/assets/klaytn/0xa9f07b1260bb9eebcbaba66700b00fe08b61e1e6/${farmInfo.id}`,
          "_blank"
        );
      Button.innerText = "OCCUPIED";
    } else {
      Button.setAttribute("id", "locked-btn");
      Button.setAttribute("class", "btn");
      Button.innerText = "LOCKED";
    }

    detailPurchaseButton.current.replaceChild(
      Button,
      detailPurchaseButton.current.childNodes[1]
    );

    detailImg.current.style.background = `url(https://cdn.sheepfarm.io/nft/img/land_${farmInfo.id}.png) center center`;
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
      handleDetailModal();
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

  function onClickGoButton(event) {
    const targetID = Number(event.target.id.slice(7));

    if (targetID in spotDict) {
      removePopup();
      onClickSpot(spotDict[targetID]);
    }
  }

  function onClickLandSearch(id) {
    if (id in spotDict) {
      removePopup();
      removeAllchild(itemListParent);
      makeHtmlPastureBox(spotDict[id].parentSectorId);
      prevSpotId = null;
      onClickSpot(spotDict[id]);
    }
  }

  function removeAllchild(div) {
    if (div) {
      while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
      }
    }
  }

  function pastureSelected(id) {
    if (prevSpotId) {
      const removeTarget = document.getElementById(`pasture${prevSpotId}`);

      removeTarget.setAttribute("class", "box_cover");
    }

    const target = document.getElementById(`pasture${id}`);

    target.setAttribute("class", "box_cover selected");
    prevSpotId = id;
  }

  function onClickOccupied(id) {
    window.open(
      `https://opensea.io/assets/klaytn/0xa9f07b1260bb9eebcbaba66700b00fe08b61e1e6/${id}`
    );
  }

  function makeHtmlPastureBox(sectorId) {
    const sector = sectorSpotDict[sectorId];

    let soldCount = 0;
    const remainCount = document.getElementById("remain-amount");

    sector.map((one) => {
      const { farmInfo } = one;

      if (farmInfo.sold) soldCount++;

      const BoxCover = document.createElement("div");

      //! 이 부분 반드시 다른방법 찾아야 함
      //! innerHTML은 보안에 취약하다고 들었는데(아마 XSS) 다른 해결책 찾아서 고쳐야 함
      BoxCover.innerHTML = `
        <span>
          <span class="sector-id">${farmInfo.id}</span>
          <span class="property">
            <img src="/Map/size.png" />
            ${farmInfo.size}
          </span>
          <span class="property">
            <img src="/Map/sheep.png" />
            ${farmInfo.sheepLimit}
          </span>
        </span>
      `;

      BoxCover.setAttribute("class", "box_cover");
      BoxCover.setAttribute("id", "pasture" + farmInfo.id);
      BoxCover.onclick = onClickGoButton; //! 왜 박스는 되고 안의 버튼은 안되지???

      // 버튼은 따로 만들기
      let Button;
      if (farmInfo.sold) {
        Button = document.createElement("button");
        Button.onclick = () => onClickOccupied(farmInfo.id);
        Button.innerText = "OCCUPIED";
      } else {
        Button = document.createElement("button");
        Button.innerHTML = "LOCKED";
      }

      Button.setAttribute("class", "sold-btn");
      BoxCover.appendChild(Button);

      itemListParent?.appendChild(BoxCover);
    });

    remainCount.innerText = `Remains ${sector.length - soldCount} / ${
      sector.length
    }`;
  }

  function handleDetailModal() {
    console.log(detailWrapper.current.classList[0]);

    if (detailWrapper.current.classList[0] === "hidden") {
      detailWrapper.current.classList.remove("hidden");
    } else {
      detailWrapper.current.classList.add("hidden");
    }
  }

  return (
    <Main>
      <div className="welcome" ref={welcomeModal}>
        <WelcomeModal handleWelcomeModal={handleWelcomeModal} />
      </div>
      <div className="hidden" ref={detailWrapper}>
        <DetailModal
          handleDetailModal={handleDetailModal}
          detailId={detailId}
          detailSize={detailSize}
          detailSheepLimit={detailSheepLimit}
          detailPurchaseButton={detailPurchaseButton}
          detailOwnerId={detailOwnerId}
          detailDesc={detailDesc}
          detailImg={detailImg}
        />
      </div>
      <PasturesMain className="spot-list-area" id="sector-inspector">
        <div className="spot-list-heading" id="pastures-list-heading">
          <span>Pastures</span>
          <span id="remain-amount" ref={pastureCount}>
            Remains 0 / 0
          </span>
        </div>

        <div id="pastures-list" ref={pastureList}></div>
      </PasturesMain>
      <Search onClickLandSearch={onClickLandSearch} />
    </Main>
  );
}

/*

  상태: 함수 실행은 되는데 Graphics 적용이 제대로 안됨.

  !원인: 상태값 자체를 안 써야 해결됨

  !해결방법: 말 그대로 상태값 없이 모든것을 구현하기

*/
