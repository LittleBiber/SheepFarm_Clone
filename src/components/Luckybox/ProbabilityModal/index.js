import React from "react";
import { Main } from "./styles";
import { DATA_LIST } from "./dummy";

export default function ProbabilityModal({ modal, killModal }) {
  const data = DATA_LIST;

  const OuterClick = (e) => {
    if (e.target.className === "page-container") {
      killModal();
    }
  };

  return (
    <Main modal={modal} onClick={OuterClick}>
      <div className="page-container">
        <div className="panel">
          <div className="panel-bg">
            <div className="close-btn" onClick={killModal} />
            <img src="/Luckybox/bg-probability.png" />
          </div>
          <div className="panel-contents">
            <div className="title">ITEM PROBABILITY</div>
            <div className="table-wrapper">
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
      <div class="dimmed-bg" onClick={() => alert("!")} />
    </Main>
  );
}

/*
레이아웃이 안 맞다 = Box-size를 고려하지 않았다
box-sizing: border-box 으로 해결

데이터 분류가 복잡?하거나 양이 많을때 어떻게 넘겨주는게 효율적일지
*/
