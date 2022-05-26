import React, { useState, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import { Lands } from "./Lands";
import { Sectors } from "./Sectors";
import { makeShader } from "./map_shader";
import DetailModal from "../DetailModal";
import WelcomeModal from "../WelcomeModal";
import Pastures from "../Pastures";
import Search from "../Search";

export default function Canvas() {
  //! canvas 생성 위한 상태값
  const [load, setLoad] = useState(false);

  //! Detail Modal 정보전달 Ref
  const welcomeModal = useRef(null);
  const pastureList = useRef(null);
  const pastureCount = useRef(null);
  const detailModal = useRef(null);
  const detailId = useRef(null);
  const detailSize = useRef(null);
  const detailSheepLimit = useRef(null);
  const detailPurchaseButton = useRef(null);
  const detailOwnerId = useRef(null);
  const detailDesc = useRef(null);
  const detailImg = useRef(null);
  const detailLocked = useRef(null);
  const itemListParent = pastureList.current;

  //! Canvas, Viewport 생성 위한 변수
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;
  const BACKGROUND_SIZE = { width: 1720, height: 1738 };

  //! Canvas 생성 위한 변수
  const canvasParent = document.getElementById("root");
  const CANVAS_SETTING = {
    width: vw,
    height: vh,
    resizeTo: window, // root에 걸어버려서 window에 맞춰 크기 조정
    resolution: 1, //window.devicePixelRatio,
    backgroundColor: 0x4284d2,
  };

  //! 모바일 여부 판단
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  //! Sector 생성 위한 변수
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

  //! Sector 및 Spot 저장하는 변수
  let buttons = new PIXI.Container();
  let spotDict = {};
  let sectorSpotDict = {};
  let sectorDict = {};
  let prevSpotId = null;

  //! Welcome Modal 종료 후 첫 포커스 대상 Sector
  const FIRST_FOCUS_SECTOR = "6_9";

  //! 이전 팝업 대상 저장하는 변수
  let lastPopup = null;

  //! Sector/Spot 클릭 시 가장자리 Effect 생성
  const blinkingGizmo = new PIXI.Graphics();
  blinkingGizmo.zOrder = 10000;
  blinkingGizmo.interactive = false;
  blinkingGizmo.buttonMode = false;

  //! State업데이트로 Canvas 생성
  useEffect(() => {
    setLoad(true);
  }, []);

  //! Canvas 생성
  const app = new PIXI.Application(CANVAS_SETTING);
  canvasParent.appendChild(app.view);

  //! 컨트롤을 위한 Viewport 생성
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

  //! Viewport 이벤트 등록
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

    if (sectorId !== "") {
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
      (spot.parent === app.blinkingItem ||
        (app.blinkingItem != null && app.blinkingItem.parent === spot.parent))
    ) {
      onClickSpot(spot);
    } else if (!!sector) {
      onClickSector(sector);
    }
    // console.log(sectorId, sector, spot, farmInfo);
  });

  //! app(Canvas)에 Viewport 추가
  app.stage.addChild(viewport);

  //! 배경 이미지 추가
  const background = viewport.addChild(PIXI.Sprite.from("/Map/sector_0.png"));

  //! 모바일 여부 판단해 PC에서 접속할 때만 Cloud Effect 추가
  if (!isMobile) {
    app.cloudsVfx = makeShader();
    app.cloudsVfx.scale.set(
      (BACKGROUND_SIZE.width * 3) / app.cloudsVfx.originalWidth,
      (BACKGROUND_SIZE.height * 3) / app.cloudsVfx.originalHeight
    );

    app.cloudsVfx.x = -BACKGROUND_SIZE.width;
    app.cloudsVfx.y = -BACKGROUND_SIZE.height;
  }

  //! Sector 팝업을 보여줄 Container 생성 및 추가
  const uiLayer = new PIXI.Container();
  app.stage.addChild(uiLayer);

  //! Sectors 데이터를 Sector/Spot 생성 가능하게 처리
  const chkSize = (value) => {
    return value <= 1111 + 5000
      ? "5X5"
      : value <= 1111 + 5000 + 3000
      ? "6X6"
      : "7X7";
  };
  const chkLimit = (value) => {
    return value <= 1111 + 5000 ? 3 : value <= 1111 + 5000 + 3000 ? 4 : 5;
  };

  const items = Sectors.map((e) => {
    return {
      id: e[0],
      x: e[1],
      y: e[2],
      sold: Lands[e[0] - 1].sold,
      size: chkSize(e[0]), //! id값으로 사이즈 구분
      sheepLimit: chkLimit(e[0]), //! 양 마릿수도 id로 구분
      tokenId: Lands.find((v) => v.id === e[0]).tokenId,
    };
  });

  //! items를 각각 처리해 Sector/Spot 추가
  items.forEach((e) => {
    let farmInfo = e;
    let spot_x = farmInfo.x * 5.6 + 71;
    let spot_y = farmInfo.y * 5.6 + 92;
    let sector = makeSector(spot_x, spot_y, buttons);
    if (sector.sectorId in sectorSpotDict === false)
      sectorSpotDict[sector.sectorId] = [];

    let spot = makeSpot(farmInfo, spot_x, spot_y, sector, sector.sectorId);
    sector.addChild(spot);
    spotDict[farmInfo.id] = spot;
    sectorSpotDict[sector.sectorId].push(spot);
  });

  //! 배경 이미지에 Sector/Spot 추가 후 Cloud Effect가 있으면 추가
  background.addChild(buttons);
  if (app.cloudsVfx) background.addChild(app.cloudsVfx);

  //! Sector/Spot 포커스 시 보여주는 이펙트
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

  //! Sector(큰 격자) 생성하는 함수
  function makeSector(spot_x, spot_y, parent) {
    let sectorId =
      Math.floor(spot_x / SECTOR_SIZE) + "_" + Math.floor(spot_y / SECTOR_SIZE);
    let sector = null;
    if (sectorId in sectorDict === false) {
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

      if (sectorId in UNLOCKED_SECTOR === false) {
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

  //! Sector 클릭 시 Pastures 목록 생성
  function makeHtmlPastureBox(sectorId) {
    const sector = sectorSpotDict[sectorId];
    const remainCount = pastureCount.current;
    let soldCount = 0;

    sector.forEach((one) => {
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

      BoxCover.classList.add("box_cover");
      BoxCover.id = `pasture${farmInfo.id}`;
      BoxCover.onclick = onClickGoButton;

      // 버튼은 따로 만들기
      let Button = document.createElement("button");
      if (farmInfo.sold) {
        Button.onclick = () => onClickOccupied(farmInfo.tokenId);
        Button.textContent = "OCCUPIED";
      } else {
        Button.textContent = "LOCKED";
      }

      Button.classList.add("sold-btn");
      BoxCover.appendChild(Button);

      itemListParent?.appendChild(BoxCover);
    });

    remainCount.textContent = `Remains ${sector.length - soldCount} / ${
      sector.length
    }`;
  }

  //! Spot(Sector 안의 작은 사각형) 생성하는 함수
  function makeSpot(farmInfo, spot_x, spot_y, parent, sectorId) {
    let spot = new PIXI.Graphics();
    const rectSize = 5;
    if (farmInfo.size === "5X5") spot.beginFill(0x774466, 0.5);
    else if (farmInfo.size === "6X6") spot.beginFill(0x665588, 0.5);
    else if (farmInfo.size === "7X7") spot.beginFill(0x3355bb, 0.5);

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

  //! Sector 클릭 시 실행
  function onClickSector(sector) {
    removePopup();
    removeAllchild(itemListParent);
    pastureList.current?.scrollTo(0, 0);

    setBlinkingTarget(sector);
    viewport.snap(sector.x, sector.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });

    makeHtmlPastureBox(sector.sectorId);
    prevSpotId = null;
  }

  //! Spot 클릭 시 실행
  function onClickSpot(spot) {
    setBlinkingTarget(spot);
    viewport.snap(spot.parent.x + spot.x, spot.parent.y + spot.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });

    pastureSelected(spot.farmInfo.id);
    handleDetailData(spot.farmInfo);
    scrollList(spot);
  }

  //! Pastures 컴포넌트에서 요소 클릭 시 해당 Spot으로 이동
  function onClickGoButton(event) {
    const targetID = Number(event.target.id.slice(7));

    if (targetID in spotDict) {
      removePopup();
      onClickSpot(spotDict[targetID]);
    }
  }

  //! Search 컴포넌트에서 요소 검색 시 해당 Spot으로 이동
  function onClickLandSearch(id) {
    if (id in spotDict) {
      removePopup();
      removeAllchild(itemListParent);
      makeHtmlPastureBox(spotDict[id].parentSectorId);
      prevSpotId = null;
      onClickSpot(spotDict[id]);
    }
  }

  //! Detail 모달 데이터 처리
  function handleDetailData(farmInfo) {
    detailId.current.textContent = farmInfo.id;
    detailSize.current.textContent = farmInfo.size;
    detailSheepLimit.current.textContent = farmInfo.sheepLimit;
    if (farmInfo.sold) {
      detailOwnerId.current.textContent = `0xf28191e65f145dd5cfff98cfe8792501a11074cb;`;
    } else {
      detailLocked.current.textContent = ``;
    }

    if (farmInfo.size === "5X5") {
      detailDesc.current.textContent = `This pasture can only hold 3 sheep at a time, therefore a combo effect that requires more than 4 sheep will not be able to be triggered.`;
    } else if (farmInfo.size === "6X6") {
      detailDesc.current.textContent = `This pasture can hold 4 sheep at a time. Which means it is able to trigger a combo effect that requires 4 sheep.`;
    } else {
      detailDesc.current.textContent = `This pasture can hold 5 sheep at a time. This means you can trigger all kind of combo effect with this pasture.`;
    }

    const Button = document.createElement("button");
    if (farmInfo.sold) {
      Button.setAttribute("id", "occupied-btn");
      Button.setAttribute("class", "btn");
      Button.onclick = () => onClickOccupied(farmInfo.tokenId);
      Button.textContent = "OCCUPIED";
    } else {
      Button.setAttribute("id", "locked-btn");
      Button.setAttribute("class", "btn");
      Button.textContent = "LOCKED";
    }

    detailPurchaseButton.current.replaceChild(
      Button,
      detailPurchaseButton.current.childNodes[1]
    );

    detailImg.current.style.background = `url(https://cdn.sheepfarm.io/nft/img/land_${farmInfo.id}.png) center center`;
  }

  //! Spot 클릭시 핀 출력
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

  //! Spot 클릭시 출력되는 핀 제거
  function removePopup() {
    if (lastPopup != null) {
      lastPopup.parent.removeChild(lastPopup);
      lastPopup = null;
    }
  }

  //! Sector/Spot 클릭 시 가장자리 Effect 생성
  function setBlinkingTarget(target) {
    blinkingGizmo.clear();

    if ("farmInfo" in target) {
      showInfoPopup(target);
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

  //! Sector 전환 시 이전 Sector의 Pasture 목록 제거
  function removeAllchild(div) {
    if (div) {
      while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
      }
    }
  }

  //! Pastures 컴포넌트의 선택한 요소 Class 변경
  function pastureSelected(id) {
    if (prevSpotId) {
      const removeTarget = document.getElementById(`pasture${prevSpotId}`);
      removeTarget.classList.remove("selected");
    }

    const target = document.getElementById(`pasture${id}`);
    target.classList.add("selected");
    prevSpotId = id;
  }

  //! Occupied 상태의 Pasture 클릭 시 OpenSea 페이지로 이동
  function onClickOccupied(id) {
    window.open(
      `https://opensea.io/assets/klaytn/0xa9f07b1260bb9eebcbaba66700b00fe08b61e1e6/${id}`
    );
  }

  //! Sector 핀의 Detail 클릭시 모달 보여주는 함수
  function handleDetailModal() {
    const modalClassList = detailModal.current.classList;
    if (modalClassList.contains("hidden")) {
      modalClassList.remove("hidden");
    } else {
      modalClassList.add("hidden");
    }
  }

  //! Canvas 상에서 Spot 클릭 시 Pastures 컴포넌트를 스크롤하는 함수
  function scrollList(target) {
    const base = pastureList.current;
    const targetId = `pasture${target.farmInfo.id}`;
    let targetIdx = 0;

    for (let i = 0; i < base.childNodes.length; i++) {
      if (base.childNodes[i].getAttribute("id") === targetId) {
        targetIdx = i;
        break;
      }
    }

    const offset = 51 * targetIdx;
    if (
      base.scrollTop > offset ||
      base.scrollTop + base.offsetHeight < offset
    ) {
      base.scroll({
        behavior: "smooth",
        left: 0,
        top: offset,
      });
    }
  }

  //! Welcome 모달 종료 시 숨겨주는 함수
  function handleWelcomeModal() {
    welcomeModal.current.style.display = "none";
    onClickSector(sectorDict[FIRST_FOCUS_SECTOR]);
  }

  //! Detail 모달 Ref목록
  const DetailModalProps = {
    handleDetailModal,
    detailId,
    detailSize,
    detailSheepLimit,
    detailPurchaseButton,
    detailOwnerId,
    detailDesc,
    detailImg,
    detailLocked,
  };

  return (
    <>
      <WelcomeModal handleModal={handleWelcomeModal} modal={welcomeModal} />

      <DetailModal {...DetailModalProps} modal={detailModal} />

      <Pastures pastureCount={pastureCount} pastureList={pastureList} />

      <Search onClickLandSearch={onClickLandSearch} />
    </>
  );
}
