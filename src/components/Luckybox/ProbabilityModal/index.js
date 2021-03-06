import React, { useRef } from "react";
import { Main } from "./styles";
import { DATA_LIST } from "./dummy";

export default function ProbabilityModal({ modal, killModal, height }) {
  const data = DATA_LIST;
  const innerScroll = useRef(null);

  const OuterClick = (e) => {
    e.stopPropagation();
    if (e.target.className === "page-container") {
      killModal();
      resetScroll();
    }
  };

  const resetScroll = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style.top = "unset";
    body.style.position = "unset";
    body.style["overflow-y"] = "unset";
    window.scrollTo(0, height);
    innerScroll.current.scrollTo(0, 0);
  };

  const closeButton = () => {
    killModal();
    resetScroll();
  };

  return (
    <Main modal={modal} onClick={OuterClick}>
      <div className="page-container">
        <div className="panel">
          <div className="panel-bg">
            <div className="close-btn" onClick={closeButton} />
            <img src="/Luckybox/bg-probability.png" alt="" />
          </div>
          <div className="panel-contents">
            <div className="title">ITEM PROBABILITY</div>
            <div className="table-wrapper" ref={innerScroll}>
              <div className="sheep-table">
                <div className="table-title sheep-total-probability">Sheep</div>
                <div className="head">
                  <span>Rarity</span>
                  <span>Probability</span>
                </div>
                <div className="body">
                  <div className="rank-row">
                    {data.Total.Rarity.map((one, idx) => (
                      <div key={idx}>
                        <span>{Object.keys(one)[0]}</span>
                        <span className="sheep_epic_total">
                          {Object.values(one)[0]}%
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="Epic-row">
                    <div className="rank-title">Epic</div>
                    {data.Detail.Rarity.epic.map((one, idx) => (
                      <div className="t-row" key={idx}>
                        <span>{one.name}</span>
                        <span>{one.value}%</span>
                      </div>
                    ))}
                  </div>

                  <div className="Rare-row">
                    <div className="rank-title">Rare</div>
                    {data.Detail.Rarity.rare.map((one, idx) => (
                      <div className="t-row" key={idx}>
                        <span>{one.name}</span>
                        <span>{one.value}%</span>
                      </div>
                    ))}
                  </div>

                  <div className="Normal-row">
                    <div className="rank-title">Normal</div>
                    {data.Detail.Rarity.normal.map((one, idx) => (
                      <div className="t-row" key={idx}>
                        <span>{one.name}</span>
                        <span>{one.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="deco-table">
                <div className="table-title decor-total-probability">
                  Decoration
                </div>
                <div className="head">
                  <span>Type</span>
                  <span>Probability</span>
                </div>
                <div className="body">
                  <div className="rank-row">
                    {data.Total.Type.map((one, idx) => (
                      <div key={idx}>
                        <span>{Object.keys(one)[0]}</span>
                        <span className="sheep_epic_total">
                          {Object.values(one)[0]}%
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="Ornamental-row">
                    <div className="rank-title">Ornamental</div>
                    {data.Detail.Type.ornamental.map((one, idx) => (
                      <div className="t-row" key={idx}>
                        <span>{one.name}</span>
                        <span>{one.value}%</span>
                      </div>
                    ))}
                  </div>

                  <div className="Interactive-row">
                    <div className="rank-title">Interactive</div>
                    {data.Detail.Type.interactive.map((one, idx) => (
                      <div className="t-row" key={idx}>
                        <span>{one.name}</span>
                        <span>{one.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dimmed-bg" onClick={() => alert("!")} />
    </Main>
  );
}

/*
??????????????? ??? ?????? = Box-size??? ???????????? ?????????
box-sizing: border-box ?????? ??????

????????? ????????? ???????????????? ?????? ????????? ????????? ??????????????? ???????????????
*/
