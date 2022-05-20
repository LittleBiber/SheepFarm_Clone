import React, { useState, useEffect, useRef, forwardRef } from "react";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import styled from "styled-components";
import { makeShader } from "./map_shader";

import DetailModal from "../DetailModal";
import WelcomeModal from "../WelcomeModal";

import Pastures from "../Pastures";
import Search from "../Search";

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
  //! 고정으로 사용하는 값 선언
  const CANVAS_SETTING = {
    width: window.innerWidth, // vw
    height: window.innerHeight, // vh
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
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // Blinking Effect
  var blinkingGizmo = new PIXI.Graphics();
  blinkingGizmo.zOrder = 10000;
  blinkingGizmo.interactive = false;
  blinkingGizmo.buttonMode = false;
  // Attach spots
  let buttons = new PIXI.Container();
  let spotDict = {};
  let sectorSpotDict = {};
  let sectorDict = {};
  let lastPopup = null;

  //! 상태값 선언
  const canvasParent = useRef(document.getElementById("test"));
  console.log("선언 바로 뒤에", canvasParent);
  const [welcomeModal, setWelcomeModal] = useState(true);
  const [spotModal, setSpotModal] = useState(false);
  const [detailData, setDetailData] = useState({});

  //! 테스트로 사용하는 값 선언
  let lastSector = null;

  //! 코드 작성 시작
  const app = new PIXI.Application(CANVAS_SETTING);

  useEffect(() => {
    // console.log("spot/spotDict", spotDict);
    // console.log("spot/sectorSpotDict", sectorSpotDict);
    // console.log("spot/sectorDict", sectorDict);
    console.log("값이 바뀌나?", canvasParent.current);

    if (canvasParent.current) canvasParent.current.appendChild(app.view);
    mountCanvas(app, canvasParent);
  }, []);

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
    console.log("--------------------------------------------");

    console.log("클릭이벤트 발생");
    console.log("App 어떻게 나오나 체크", app);

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

    console.log("sector 찾은 값", sector);
    console.log("sectorId", sectorId);

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

    console.log("spot", spot);
    console.log("farmInfo", farmInfo);

    if (
      !!spot &&
      (spot.parent === app.blinkingItem ||
        (app.blinkingItem !== null && app.blinkingItem.parent === spot.parent))
    ) {
      console.log("spot 클릭으로 진행");

      onClickSpot(spot);

      console.log("onClickSpot함수 완료");

      setNowSpot(spot.farmInfo.id);
    } else if (!!sector) {
      console.log("sector 클릭으로 진행");

      onClickSector(sector);
      lastSector = sector.sectorId;
    }
  });

  // add the viewport to the stage
  app.stage.addChild(viewport);

  // Attach background
  const background = viewport.addChild(PIXI.Sprite.from("/Map/sector_0.png"));
  if (isMobile === false) {
    app.cloudsVfx = makeShader();
    app.cloudsVfx.scale.set(
      (BACKGROUND_SIZE.width * 3) / app.cloudsVfx.originalWidth,
      (BACKGROUND_SIZE.height * 3) / app.cloudsVfx.originalHeight
    );

    app.cloudsVfx.x = -BACKGROUND_SIZE.width;
    app.cloudsVfx.y = -BACKGROUND_SIZE.height;
  }
  if (app.cloudsVfx) background.addChild(app.cloudsVfx);

  const uiLayer = new PIXI.Container();
  app.stage.addChild(uiLayer);

  items.forEach((e, i, a) => {
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

  background.addChild(buttons);

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

  function mountCanvas(app, targetRef) {
    if (targetRef.current) {
      return targetRef.current.appendChild(app.view);
    }
  }

  function logApp() {
    console.log(app);
  }

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

  function onClickSector(sector) {
    removePopup();
    setBlinkingTarget(sector);

    viewport.snap(sector.x, sector.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });

    setNowSpotList(sectorSpotDict[sector.sectorId]);
  }

  function onClickSpot(spot) {
    console.log("onClickSpot함수 진행 -------------------");
    console.log("클릭 대상", spot);

    setBlinkingTarget(spot);

    console.log("빤짝이함수 완료");

    viewport.snap(spot.parent.x + spot.x, spot.parent.y + spot.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });
  }

  function removePopup() {
    console.log("이전 이벤트 대상", lastPopup);

    if (lastPopup !== null) {
      lastPopup.parent.removeChild(lastPopup);
      lastPopup = null;
    }
  }

  function showInfoPopup(spot) {
    console.log("showInfoPopup 함수 진행----------------");
    console.log("팝업 정보", spot.farmInfo);
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

    console.log("팝업 생성 완료", popup);

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
    else if (farmInfo.id <= 9111) maxSheepNum = 4;
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

    console.log("팝업 내용물 생성 완료", popupTitleText);

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

    console.log("uiLayer에 팝업 추가 완료", uiLayer);

    lastPopup = popup;

    // show selected row
    // updateSelectedRow(farmInfo.id);
  }

  function setBlinkingTarget(target) {
    console.log("setBlinkingTarget 함수 진행 ------------------------------");
    console.log("빤짝이 타겟", target);

    blinkingGizmo.clear(); //! 이거 효과 있었음 지우지 말것

    if ("farmInfo" in target) {
      console.log("Spot감지: 정보 팝업 생성");
      showInfoPopup(target);
    }

    //! 개선(?): 데이터 처리를 줄인 것 같은데 왜 더 느려지는...?
    if (lastSector) {
      const sector = sectorDict[lastSector];
      sector.parent.setChildIndex(sector, 0);

      const spots = sectorSpotDict[lastSector];

      spots.forEach((e) => {
        e.visible = false;
      });
    }

    if (target !== null) {
      app.blinkingItem = target;
      let bound = app.blinkingItem.getLocalBounds();

      console.log("bound", bound); // 여기까지도 제대로 나옴

      blinkingGizmo.lineStyle({
        width: 3,
        color: 0xffdd00,
        alpha: 1.0,
        join: PIXI.LINE_JOIN.ROUND,
      });
      blinkingGizmo.drawRect(bound.x, bound.y, bound.width, bound.height);
      blinkingGizmo.endFill();

      console.log("blinkingGizmo", blinkingGizmo);
      console.log("다른 곳에 데이터가 들어가나?", app);

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
        sector.parent.setChildIndex(sector, sector.parent.children.length - 1);
      }
    }
  }

  function onClickGoButton(id) {
    console.log("--------------------------------------------------------");
    console.log("사이드바 클릭 이벤트");
    console.log("App 체크", app);
    console.log("클릭한 대상 id", id);

    if (id in spotDict) {
      removePopup();

      setNowSpot(id);

      onClickSpot(spotDict[id]);
    }
  }

  function onClickLandSearch() {
    // let searchLandId = $("#land-id-input").val();
    // if (searchLandId in spotDict) {
    //   removePopup();
    //   onClickSpot(spotDict[searchLandId]);
    // }
  }

  function onClickWelcomeModalOk() {
    // $("#welcom-modal-background").hide();
    lastSector = FIRST_FOCUS_SECTOR;
    onClickSector(sectorDict[FIRST_FOCUS_SECTOR]);
  }

  function handleWelcomeModal() {
    setWelcomeModal(false);
    onClickWelcomeModalOk();
  }

  return (
    <Main>
      <div ref={canvasParent} id="test" />
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
        onClickGoButton={onClickGoButton}
      />
      <Search onClickLandSearch={onClickLandSearch} />
      <TEST onClick={logApp}>테스트버튼</TEST>
    </Main>
  );
}

/*

! 아니 왜 똑같은 함수인데 작동을 안하냐고 콘솔로그도 다 찍히는데 진짜 뭘 어떻게 해달라는거야...

- 성공한 것: 상태값으로 안 쓰니까 찾는 값들이 변수에 잘 잡힘
- 안되는 것: 근데 왜 함수실행은 다 되는데 결과를 안보여주는 것이지?

가설
  1. 중간에 조건 타서 실행되지 않고 빠지는 함수가 있나?
    - 원래 클릭에 따라 실행되는 함수들에 로그 찍어서 제대로 된 데이터가 나오는지 체크해보기
    !> 똑같은함수 타고 로그 다 찍히는데???

  2. 그럼 먼저 onClickSector를 적용해보기
    - WelcomeModal 꺼질때의 onClickSector 적용을 다른 곳으로 바꿔보기
    !> 적용 잘됨
    
    - onClickSpot대신 다른 섹터 포커싱 줘보기
    !> ?? 왜 사이드바만 바뀌냐고
    !> 적용안되는게 그래픽 쪽만 안되는듯...
    !> 그러면 지금 함수실행은 되는데 그래픽 적용이 안되네?

  //2. useEffect로 app을 적용해서 적용이 제대로 안되나?

  //3. Sidebar에서 클릭하면 데이터 적용이 다른 곳으로 되나?

  !상태: 함수 실행은 되는데 Graphics 적용이 제대로 안됨.
    !> 증명: onClickGoButton함수에 onClickSector 할당하면 사이드바만 바뀜.
    !> 값 로그찍어보면 분명 로그는 다 바뀌지만 따로 button으로 app로그찍어보면 blinkingItem이 없음
      이것도 useEffect때문인가?
      근데 useEffect안쓰면 초기값이 null이라 100% 오류나는데?

  !원인: 이제 찾아야지
    - 추정1: useRef가 문제인가?
      useRef는 DOM에 연결하여 해당 Element를 읽어오거나, 
      .current 프로퍼티에 값을 저장해놓고 해당 값이 변동되어도 렌더링하고 싶지 않을 때 사용?
      일단... div는 빈 요소이고 모달 뜰때까지도 undefined인데 모달 종료되면 useEffect가 돌면서 추가되지 않나?


  !해결: 이제 찾아야지

*/
// console.log("spot/spotDict", spotDict);
// console.log("spot/sectorSpotDict", sectorSpotDict);
// console.log("spot/sectorDict", sectorDict);
