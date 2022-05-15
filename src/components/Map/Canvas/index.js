import React, { useState, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Viewport } from "pixi-viewport";
import { Stage, Container, Sprite } from "@inlet/react-pixi";
import styled from "styled-components";

const Main = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default function Canvas({
  setSelectedSectors,
  items,
  pinId,
  setPinId,
  showInfoPopup,
}) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // 간단하게 정규표현식으로 user-agent의 기기 분류로 mobile 여부 확인

  const [size, setSize] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });
  const handleSize = () => {
    setSize({ vw: window.innerWidth, vh: window.innerHeight });
  };

  useEffect(() => {
    handleSize();
  }, [window.innerWidth, window.innerHeight]);
  // 둘중 하니의 값이 변경되면 사이즈 수정하는 함수 생성
  //! 설마 사이즈 바뀐다고 계속 새로 렌더링하는거 아니겠지?(테스트 필요함 진짜 그럴수 있음)
  //! 부하 문제 실제로 심각함 CPU 70% / 로딩에 7초 >> 초기 렌더링 자체를 어떻게 고쳐야 할까?

  //! 페이지 크기 조정에 따라 Canvas가 동적으로 조절되게 너비 높이를 상태값 지정
  // 오류는 없고 생각한대로 작동하지만, 성능에 심각한 영향을 줬는지는 모르겠음

  const canvasParent = useRef(null);

  const CANVAS_SETTING = {
    width: size.vw, // vw
    height: size.vh, // vh
    // resizeTo: canvasParent,
    // 대신 너비/높이를 상태값으로 조절

    resolution: 1, //window.devicePixelRatio,
    backgroundColor: 0x4284d2,
  };

  const BACKGROUND_SIZE = { width: 1720, height: 1738 }; // 배경 이미지 크기
  const CLICK_ACTION_THRESHOLD = CANVAS_SETTING.width / 80; // 이 부분은 테스트하면서 확인
  const SECTOR_SIZE = 56 * 2; // 눈어림은 110이었는데 약간 오차 있었음

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
  }; // 4th phase (final)

  const FIRST_FOCUS_SECTOR = "6_9"; // 모달창 끄면 포커싱 잡히는 값

  //! window.sector_0_data > 각 작은 점들의 좌표값 > Sectors로 파일 분리 (VS Code느려짐)
  // const items = sectors.map((e) => {
  //   // sector_0_data 의 각 값에 대해 처리하는것
  //   // Lands.fi >> Lands 데이터는 파일처리가 너무오래걸려서 삭제했었는데 다시 확인해봐야 함
  //   //! Lands도 외부파일로 불러옴

  //   return {
  //     id: e[0],
  //     x: e[1],
  //     y: e[2],
  //     sold: false,
  //     size:
  //       e[0] <= 1111 + 5000 //! id값으로 사이즈 구분
  //         ? "5X5"
  //         : e[0] <= 1111 + 5000 + 3000
  //         ? "6X6"
  //         : "7X7",
  //     sheepLimit: e[0] <= 1111 + 5000 ? 3 : e[0] <= 1111 + 5000 + 3000 ? 4 : 5, //! 양 마릿수도 id로 구분
  //     tokenId: lands.find((v) => v.id == e[0]).tokenId,
  //   };
  // });

  const app = new PIXI.Application(CANVAS_SETTING); // PIXI 캔버스 생성 > React에서는 Stage 로 구현

  useEffect(() => {
    if (canvasParent.current) canvasParent.current.appendChild(app.view); // DOM접근 대신 useRef 사용
    // console.log(canvasParent.current);
  }, []);
  //! appendChild not found 에러 > .current

  const viewport = new Viewport({
    //! pixi-viewport 문서 참고해야 함
    screenWidth: size.vw,
    screenHeight: size.vh,
    worldWidth: size.vw,
    worldHeight: size.vh,
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
      maxWidth: size.vw,
      maxHeight: size.vh,
    });

  viewport.on("drag-start", (event) => {
    removePopup(); //! 드래그 시 핀 제거 필수
  });
  viewport.on("clicked", (event) => {
    // console.log(event);

    let sectorId = "";
    let farmInfo = null;

    let sector = null; // 섹터 값 먼저 선언
    let spot = null; // spot도 먼저 선언

    for (let k in sectorDict) {
      let s = sectorDict[k];
      if (s.getBounds().contains(event.screen.x, event.screen.y)) {
        sector = s; // 섹터 값 결정
        // console.log("S는 무엇인가?", s);
        sectorId = k; // 마찬가지로 섹터 id도 결정
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
          // console.log("spot", s);
          // console.log("farminfo", farmInfo);
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

  // add the viewport to the stage
  app.stage.addChild(viewport);

  const background = viewport.addChild(PIXI.Sprite.from("/Map/sector_0.png")); // Sprite로 배경 추가
  // if (isMobile === false) {
  //   // 모바일 여부에 따라 >> userAgent 로 구분 가능
  //   app.cloudsVfx = makeShader(); //! 구름 배경 효과 (움직임) > 찾아야 함(아마 Script에 있을듯)
  //   app.cloudsVfx.scale.set(
  //     (BACKGROUND_SIZE.width * 3) / app.cloudsVfx.originalWidth,
  //     (BACKGROUND_SIZE.height * 3) / app.cloudsVfx.originalHeight
  //   );

  //   app.cloudsVfx.x = -BACKGROUND_SIZE.width;
  //   app.cloudsVfx.y = -BACKGROUND_SIZE.height;
  // }

  const uiLayer = new PIXI.Container(); // 이 부분은 어떻게 작동할지 찾아봐야 함.
  app.stage.addChild(uiLayer);

  // Attach spots
  let buttons = new PIXI.Container();
  let spotDict = {};
  let sectorSpotDict = {};
  let sectorDict = {};
  let cnt = 0;

  items.forEach((e, i, a) => {
    // 각 데이터, index, array 일듯
    let farmInfo = e;
    let spot_x = farmInfo.x * 5.6 + 71;
    let spot_y = farmInfo.y * 5.6 + 92;
    let sector = makeSector(spot_x, spot_y, buttons); // 각각의 칸 생성해 반환
    if (sector.sectorId in sectorSpotDict === false)
      //! 아니 누가 == 를 쓰냐고;
      sectorSpotDict[sector.sectorId] = [];

    let spot = makeSpot(farmInfo, spot_x, spot_y, sector, sector.sectorId); // 칸 내부에 Spot 사각형 생성
    sector.addChild(spot);
    spotDict[farmInfo.id] = spot;
    sectorSpotDict[sector.sectorId].push(spot);
  });

  background.addChild(buttons); // 아까 생성했던 Sector 저장된 변수를 배경에 추가

  if (app.cloudsVfx) background.addChild(app.cloudsVfx);
  // 구름 효과가 존재하면(모바일이면 없음) > 배경에 구름효과도 추가

  //! 이 부분은 잘 모르겠음
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
      if (blinkingGizmo.width < 20)
        blinkingGizmo.scale.set(
          1.0 + 2.0 * ((Math.sin(elapsed * 0.1) + 1) / 2)
        );
      else {
        blinkingGizmo.scale.set(
          1.0 + 0.1 * ((Math.sin(elapsed * 0.1) + 1) / 2)
        );
        blinkingGizmo.alpha = 1 - Math.abs(Math.sin(elapsed * 0.05));
      }
    }
  });

  function makeSector(spot_x, spot_y, parent) {
    let sectorId =
      Math.floor(spot_x / SECTOR_SIZE) + "_" + Math.floor(spot_y / SECTOR_SIZE);
    let sector = null;
    if (sectorId in sectorDict === false) {
      // 아직 안 만들어진 Sector만 처리, 여기도 == 써놨네

      sector = new PIXI.Container(); // Spot들이 담기므로 Sprite 아님

      let lockedCover = new PIXI.Graphics();
      if (sectorId in UNLOCKED_SECTOR)
        // id가 잠금풀린 섹터에 해당되면? > 배경색 달라짐
        lockedCover.beginFill(0x555555, 0.1);
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
  }

  function makeSpot(farmInfo, spot_x, spot_y, parent, sectorId) {
    // Sector 안의 Spot 을 생성하는 함수
    let spot = new PIXI.Graphics();
    const rectSize = 5;
    if (farmInfo.size == "5X5") spot.beginFill(0x774466, 0.5);
    // 이 색깔이 Map에 나온적이 있던가??? > 있음
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
  }

  function onClickSector(sector) {
    removePopup(); // 원래 팝업이 있으면 제거
    setBlinkingTarget(sector); // 깜빡이는 이벤트 추가
    viewport.snap(sector.x, sector.y, {
      time: 300,
      removeOnComplete: true,
      removeOnInterrupt: true,
    });
    // snap이 실행되어야 효과가 실제로 보이는듯
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
    if (lastPopup !== null) {
      // lastPopup 이 빈 상태가 아니면
      lastPopup.parent.removeChild(lastPopup);
      lastPopup = null;
    }
  }

  function showInfoPopup(spot) {
    //! Modal로 따로 만드는게 나을까?

    console.log(spot.farmInfo);

    let farmInfo = spot.farmInfo; // Spot 생성할 때 인자로 넘긴 데이터

    removePopup(); // 이전의 팝업은 제거하고 다시 생성

    // Make Popup
    let popup = new PIXI.Container();
    let popupBg = PIXI.Sprite.from("/Map/selected_spot_info.png");

    // Detail Button
    let moreBtn = PIXI.Sprite.from("/Map/more_btn.png");
    moreBtn.anchor.set(0.5, 0.5);
    moreBtn.y = -70;
    moreBtn.buttonMode = true;
    moreBtn.interactive = true;
    moreBtn.on("pointerup", () => {
      OnClickDetail(farmInfo.id);
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
    // ID따라서 양의 최대 값에 제한이 있는 듯
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
    // 저 '555555' 는 어떤 목적인지 함수 인자 구성이 어떻게 되는지 봐야 함
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
    updateSelectedRow(farmInfo.id);
  }

  const blinkingGizmo = new PIXI.Graphics(); // Sector 클릭했을때 Sector 외부 반짝이는 효과
  blinkingGizmo.zOrder = 10000;
  blinkingGizmo.interactive = false; // 효과에 클릭 반응이 들어가면 다른 박스 선택이 안되니 당연히 False
  blinkingGizmo.buttonMode = false;

  function setBlinkingTarget(target) {
    //! Sector, Spot 클릭 둘 다 동일한 함수로 처리
    // console.log(target);
    // console.log(sectorDict); // {7_5: Container, 8_12: Container, 6_3: Container, 9_6: Container, 6_7: Container, …}
    // console.log(sectorSpotDict); // {7_5: Array(145), 8_12: Array(32), 6_3: Array(149), 9_6: Array(146), 6_7: Array(152), …}

    blinkingGizmo.clear();

    if ("farmInfo" in target) {
      // 클릭한 대상이 Spot이면
      showInfoPopup(target);
      updateSelectedRow(target.farmInfo.id);
    }

    for (let sectorId in sectorDict) {
      // last item was sector >> ?? 이게 뭔 소리지
      let sector = sectorDict[sectorId];
      sector.parent.setChildIndex(sector, 0); // 이전에 보고 있던 Sector의 index를 내려줌
      let spots = sectorSpotDict[sectorId]; // 해당 Sector안의 Spot들을 가져옴

      spots.forEach((e) => {
        e.visible = false;
      }); // Sector 안의 Spot도 다 숨겨주기
      // console.log("hide last spots");
    }

    if (target != null) {
      // null일때 밑의 함수가 실행되면 오류 발생
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

        // 상태값을 활용한 Pasture-Canvas 컴포넌트 간 데이터 공유
        //! 뭔가 비효율적인것만 같은 느낌인데 정확하게 어떻게? 고쳐야 할까
        setSelectedSectors(spots); // 내가 추가한 함수

        spots.forEach((e) => {
          e.visible = true;
        });
        let sector = sectorDict[target.sectorId];
        sector.parent.setChildIndex(sector, sector.parent.children.length - 1); // sectorDict[target.sectorId].zOrder = 100;
      }
    }

    if (target != null) {
      if ("farmInfo" in target) {
        let sector = sectorDict[target.parentSectorId];
        showFarmInfosInSector(sector);
      } else if ("sectorId" in target) {
        let sector = sectorDict[target.sectorId];
        showFarmInfosInSector(sector);
      }
    } else {
      showFarmInfosInSector(null);
    }
  }

  var lastInspectorShowSector = null;
  function showFarmInfosInSector(sector, cb) {
    // //! Pasture 컴포넌트를 호출하는 함수 > State로 같은 상태값을 공유하는 편이 나을까
    // if (sector != null) {
    //   $("#sector-inspector").show();
    //   if (lastInspectorShowSector != sector) {
    //     $("#pastures-list").scrollTop(0);
    //     $("#pastures-list").empty();
    //     fetch(window.location.origin + `/map/sector/${sector.sectorId}`) // Fetch sold states
    //       .then((resp) => resp.json())
    //       .then((data) => {
    //         window.soldStateDict = {};
    //         data.forEach((e) => {
    //           window.soldStateDict[e.id] = e.sold; //0=false 1=true
    //         });
    //         updateInfoInSector(sector.sectorId);
    //         if (app.blinkingItem != null && "farmInfo" in app.blinkingItem)
    //           updateSelectedRow(app.blinkingItem.farmInfo.id);
    //         cb && cb();
    //       });
    //   }
    //   lastInspectorShowSector = sector;
    // } else {
    //   $("#sector-inspector").hide();
    // }
  }

  // function updateInfoInSector(sectorId) {
  //   $("#pastures-list").empty();

  //   let spots = sectorSpotDict[sectorId];
  //   let soldCnt = 0;
  //   for (let i in spots) {
  //     let spot = spots[i];
  //     let farmInfo = spot.farmInfo;
  //     let farmId = farmInfo.id;
  //     let size = farmInfo.size;
  //     let sheepLimit = farmInfo.sheepLimit;
  //     let sold = window.soldStateDict[farmId];

  //     if (sold) {
  //       soldCnt++;
  //       $("#pastures-list").append(`
  //                   <div class="row" onclick="onClickGoButton(event)" data-farm-id="${farmId}">
  //                       <span style="pointer-events: none;">
  //                           <span class="sector-id">${farmId}</span>
  //                           <span class="property"><img src="img/maps/size.png">${size}</span>
  //                           <span class="property"><img src="img/maps/sheep.png">${sheepLimit}</span>
  //                       </span>
  //                       <span class="sold-btn-parent">
  //                           <a class="sold-btn" target="_blank" onclick="OnClickOccupied(${farmId})">OCCUPIED</a>
  //                       </span>
  //                   </div>`);
  //     } else {
  //       $("#pastures-list").append(`
  //                   <div class="row" onclick="onClickGoButton(event)" data-farm-id="${farmId}">
  //                       <span style="pointer-events: none;">
  //                           <span class="sector-id">${farmId}</span>
  //                           <span class="property"><img src="img/maps/size.png">${size}</span>
  //                           <span class="property"><img src="img/maps/sheep.png">${sheepLimit}</span>
  //                       </span>
  //                       <span>
  //                           ${
  //                             spot.parentSectorId in UNLOCKED_SECTOR
  //                               ? `<button class="buy-btn"  onclick="OnClickPurchase(${farmId})">PURCHASE</button>`
  //                               : '<button disabled class="sold-btn">LOCKED</button>'
  //                           }
  //                       </span>

  //                   </div>
  //               `);
  //     }
  //   }
  //   $("#remain-amount").html(
  //     `Remains ${spots.length - soldCnt} / ${spots.length} `
  //   );
  // }

  function onClickGoButton(event) {
    /*
    Pasture에서 클릭된 값에 대해 세부사항 보여주던 함수
      - 어떻게 처리해야 할까?
    */

    // let data = event.target.data;
    // if (data.farmId in spotDict) {
    //   removePopup();
    //   onClickSpot(spotDict[data.farmId]);
    // }

    alert("TEST");
  }

  function updateSelectedRow(farmId) {
    /* 선택한 id의 PastureBox의 배경색 변경 + 맨 위로 올려주기
    - forwardRef를 활용해 Pastures 컴포넌트로 데이터 전달
      - 컴포넌트가 수신한 Ref를 아래 DOM(요소)으로 전달
      - Ref 생성과 사용위치가 다른 지금 정확히 필요한 기능!
    */

    /*
    ! 필요한 것
      - 특정 Spot을 클릭하면 Pastures에서 해당 ID의 스팟으로 스크롤 이동
      - 반대로 Pastures에서도 특정 ID 스팟을 클릭하면 지도상에 Info 박스가 보여져야 함.
        - 스크롤 이동은 어렵지 않겠지만 Info박스 보여주는 부분이 난이도가 있을듯(PIXI를 활용하니까)
    ! 나한테 있는 것
      - 원본 페이지 구현 코드
    ! 생각해보기
      - Spot클릭 시에 박스를 보여주니까
        Pasture에서 onClick을 실행할 때 
        Spot클릭과 같은 함수를 실행해주면 될까?
    */

    setPinId(farmId);
    //   $(`div.row[data-farm-id!="${farmId}"]`).removeClass("selected");
    //   $(`div.row[data-farm-id="${farmId}"]`).addClass("selected");
    //   if ($(`div.row[data-farm-id=${farmId}]`).length > 0) {
    //     let row_position = $(`div.row[data-farm-id=${farmId}]`).offset().top;
    //     let listTop = $("#pastures-list").offset().top;
    //     let listBottom =
    //       $("#pastures-list").offset().top + $("#pastures-list").height();
    //     if (row_position < listTop || row_position > listBottom) {
    //       $("#pastures-list").animate(
    //         {
    //         },
    //         300
    //       );
    //     }
    //   }
  }

  // function onClickLandSearch() {
  //   let searchLandId = $("#land-id-input").val(); // Pasture ID 를 가져오는듯 > useRef 로 처리?
  //   if (searchLandId in spotDict) {
  //     // Spot 모아놓은 값에서 찾는 ID값이 존재하면?
  //     removePopup(); // 원래 팝업 없애고
  //     onClickSpot(spotDict[searchLandId]); // 찾는값 있으니까 바로 팝업 띄워주기
  //   }
  // }

  // function onClickWelcomeModalOk() {
  //   // useState로 모달 보여주기 / 끄기 하면 될듯
  //   $("#welcom-modal-background").hide();
  //   onClickSector(sectorDict[FIRST_FOCUS_SECTOR]);
  // }

  // function onClickClose(selector) {
  //   $(selector).hide();

  //   if (selector == "#bill-paper") {
  //     $("#klip-qr-code-frame").hide();

  //     if (!!window.klipPollingId) {
  //       clearInterval(window.klipPollingId); // 주기적으로 값이 바뀌는건가?
  //       delete window.klipPollingId;
  //       delete window.lastKlipRequestKey;
  //     }
  //   }
  // }

  function OnClickDetail(farmId) {
    // 팝업 detail 버튼 클릭했을때 모달 보여주는 함수 > 모달 컴포넌트로 따로 만들 수 있을 듯.
    let spot = spotDict[farmId];
    let farmInfo = spot.farmInfo;
    let unlocked = spot.parentSectorId in UNLOCKED_SECTOR;

    // $("#purchase-detail").show();
    // $("#purchase-detail #farm-detail-size").html(farmInfo.size);
    // $("#purchase-detail #farm-detail-sheeps").html(farmInfo.sheepLimit);
    // $("#purchase-detail .pasture-number").html("No. " + farmInfo.id);
    // $("#purchase-detail .im").css(
    //   "background",
    //   `center url("https://cdn.sheepfarm.io/nft/img/land_${farmInfo.id}.png")`
    // );
    // $("#purchase-detail").data("farm-id", farmId);

    // // 왜 이렇게 분리되어 있는거지
    // if (farmInfo.size == "5X5") {
    //   $("#purchase-detail #small-size-pasture-desc").show();
    //   $("#purchase-detail #middle-size-pasture-desc").hide();
    //   $("#purchase-detail #large-size-pasture-desc").hide();
    // } else if (farmInfo.size == "6X6") {
    //   $("#purchase-detail #small-size-pasture-desc").hide();
    //   $("#purchase-detail #middle-size-pasture-desc").show();
    //   $("#purchase-detail #large-size-pasture-desc").hide();
    // } else if (farmInfo.size == "7X7") {
    //   $("#purchase-detail #small-size-pasture-desc").hide();
    //   $("#purchase-detail #middle-size-pasture-desc").hide();
    //   $("#purchase-detail #large-size-pasture-desc").show();
    // }

    // $("#purchase-detail .im").css("background-position", ";");
    let sold = window.soldStateDict[farmId];

    // if (sold) {
    //   $("#purchase-detail #occupied-btn").show();
    //   $("#purchase-detail #purchase-btn").hide();
    //   $("#purchase-detail #locked-btn").hide();

    //   $("#purchase-detail .pasture-number").html(
    //     "No. " + farmInfo.id + "<br>Owner : Loading.."
    //   );

    //   fetch("/map/ownerOf/" + farmInfo.tokenId)
    //     .then((response) => response.json())
    //     .then((resp) => {
    //       let loginAddress = myWalletAddress();
    //       var _farmId = $("#purchase-detail").data("farm-id");
    //       if (_farmId == farmId) {
    //         if (!resp.owner) {
    //           $("#purchase-detail .pasture-number").html("No. " + farmInfo.id);
    //         } else {
    //           $("#purchase-detail .pasture-number").html(
    //             "No. " +
    //               farmInfo.id +
    //               "<div style='font-size:13px;font-weight:500'>Owner " +
    //               (loginAddress == resp.owner ? "(You)" : "") +
    //               "<br>" +
    //               resp.owner +
    //               "</div>"
    //           );
    //         }
    //       }
    //     });
    // } else if (unlocked == false) {
    //   $("#purchase-detail #occupied-btn").hide();
    //   $("#purchase-detail #purchase-btn").hide();
    //   $("#purchase-detail #locked-btn").show();
    // } else {
    //   $("#purchase-detail #occupied-btn").hide();
    //   $("#purchase-detail #purchase-btn").show();
    //   $("#purchase-detail #locked-btn").hide();
    // }
  }

  function farmPrice(farmInfo) {
    if (farmInfo.size == "5X5") return 165;
    else if (farmInfo.size == "6X6") return 280;
    else if (farmInfo.size == "7X7") return 394;
    return 999999999;
  }

  return (
    <Main>
      <div ref={canvasParent}></div>
    </Main>
  );
}

/*
1. 섹터 클릭 시 보여주는 스팟들은 뭘 기준으로 필터링되는걸까?
     - 전부 생성해서 숨겨놓고 클릭된 섹터 안에서만 보여주기? >> 메모리 소모 크고 속도는 빠름(이미 전체가 전처리됨)
     - 좌표 값만 갖고있다가 실시간으로 클릭된 섹터 렌더링? >> 메모리는 덜 먹는데 속도가 느림(필요한 부분만 렌더링)
     
2. 현재 클릭된 요소 상태값은 id만 있으면 되나?
    - 아마 그럴듯

3. 두 데이터 lands와 sectors는 왜 분리되어 있을까?
    - 왜지? 어차피 사용처 동일할텐데?
*/
