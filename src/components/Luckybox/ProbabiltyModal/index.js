import React from "react";
import { Main } from "./styles";

export default function ProbabiltyModal({ modal, setModal }) {
  const DATA_LIST = {
    Total: {
      Rarity: [{ Epic: 1.05 }, { Rare: 11.91 }, { Normal: 87.03 }],
      Type: [{ Ornamental: 92.08 }, { Interactive: 7.91 }],
    },
    Detail: {
      Rarity: {
        epic: [
          { name: "Madame Mille-feuille", value: 0.0778816 },
          { name: "Miss Chambermaid", value: 0.116822 },
          { name: "Crimson Moon Draconic", value: 0.155763 },
          { name: "Cocoa Sugar-Cupid", value: 0.194704 },
          { name: "Vanilla Sugar-Cupid", value: 0.233645 },
          { name: "Strawberry Gateau", value: 0.272586 },
        ],
        rare: [
          {
            name: "Flamboyant Bonnebell",
            value: 0.778816,
          },

          {
            name: "Carmine Ragdoll",
            value: 0.817757,
          },

          {
            name: "Cerulean Ragdoll",
            value: 0.856698,
          },

          {
            name: "Rosette Bonnebell",
            value: 0.895639,
          },

          {
            name: "Ruby Streaked Wildfire",
            value: 0.934579,
          },

          {
            name: "  Red Prince",
            value: 0.97352,
          },

          {
            name: "  Bluebeard Yarn-Matey",
            value: 1.01246,
          },

          {
            name: "   Camellia Hurricane",
            value: 1.0514,
          },

          {
            name: "Autumn Rose Cherub",
            value: 1.09034,
          },

          {
            name: "Ember Hurricane",
            value: 1.12928,
          },

          {
            name: "Pink Baa-jama Lamb",
            value: 1.16822,
          },

          {
            name: "Peach Gummy Chantilly",
            value: 1.20717,
          },
        ],
        normal: [
          {
            name: "Plain White Tailored",
            value: 2.33645,
          },

          {
            name: "Plain Black Tailored",
            value: 2.37539,
          },

          {
            name: "Plain Orange Polka",
            value: 2.41433,
          },

          {
            name: "Alabaster Hurricane",
            value: 2.45327,
          },

          {
            name: "Hawthorn Bonnebell",
            value: 2.49221,
          },

          {
            name: "Marshmallow Chantilly",
            value: 2.53115,
          },

          {
            name: "Sunset Bonnebell",
            value: 2.57009,
          },

          {
            name: "Cotton Cloud Ragdoll",
            value: 2.60903,
          },

          {
            name: "Plain Mint",
            value: 2.64797,
          },

          {
            name: " Miss Sommelier",
            value: 2.68692,
          },

          {
            name: "Magma Wooligan",
            value: 2.72586,
          },

          {
            name: "Obsidian Wooligan",
            value: 2.7648,
          },

          {
            name: "Physical Sheep",
            value: 2.80374,
          },

          {
            name: "Lambosaurus ",
            value: 2.84268,
          },

          {
            name: " Plain Blush ",
            value: 2.88162,
          },

          {
            name: "Scarlet Wildfire",
            value: 2.92056,
          },

          {
            name: "Plain Melon",
            value: 2.9595,
          },

          {
            name: "Plain Cherry",
            value: 2.99844,
          },

          {
            name: " Plain Pink Sweetheart",
            value: 3.03738,
          },

          {
            name: "Plain Sage Stargazer",
            value: 3.07632,
          },

          {
            name: "Plain Red",
            value: 3.11526,
          },

          {
            name: " Plain Orange",
            value: 3.15421,
          },

          {
            name: "Plain Cobalt",
            value: 3.19315,
          },

          {
            name: "Plain Pink",
            value: 3.23209,
          },

          {
            name: "Plain White",
            value: 3.27103,
          },

          {
            name: "Plain Yellow ",
            value: 3.30997,
          },

          {
            name: "Plain Indigo",
            value: 3.34891,
          },

          {
            name: "Plain Violet",
            value: 3.38785,
          },

          {
            name: "Plain Blue",
            value: 3.42679,
          },

          {
            name: "Plain Green",
            value: 3.46573,
          },
        ],
      },
      Type: {
        ornamental: [
          {
            name: "Birch Plank Tile",
            value: 7.19424,
          },

          {
            name: "Wooden Table",
            value: 7.19424,
          },

          {
            name: "Vanilla Sorbet Tree - Large",
            value: 5.39568,
          },

          {
            name: "Vanilla Sorbet Tree - Small",
            value: 5.39568,
          },

          {
            name: "White Sign Post",
            value: 8.99281,
          },

          {
            name: "Chocolate Rock Small",
            value: 8.99281,
          },

          {
            name: "Tree Stump &amp; Axe",
            value: 7.19424,
          },

          {
            name: "White Daisy Fence",
            value: 8.99281,
          },

          {
            name: "Plain Pastry Tile",
            value: 7.19424,
          },

          {
            name: "Powdered Pastry Tile",
            value: 7.19424,
          },

          {
            name: "Cream Pastry Tile",
            value: 7.19424,
          },

          {
            name: "Strawberry Cream Tartlet",
            value: 5.39568,
          },

          {
            name: "Strawberry Custard Tartlet",
            value: 5.39568,
          },

          {
            name: "Hazelnut Cookie Cutter House",
            value: 0.359712,
          },
        ],
        interactive: [
          {
            name: "Strawberry Custard Slice House",
            value: 0.359712,
          },

          {
            name: "Plain Sheep Photozone",
            value: 1.79856,
          },

          {
            name: "Joyful Balloon Floaty",
            value: 2.8777,
          },

          {
            name: "Strawberry Custard Fountain",
            value: 2.8777,
          },
        ],
      },
    },
  };

  const data = DATA_LIST;

  return (
    <Main modal={modal}>
      <div className="page-container">
        <div className="panel">
          <div className="panel-bg">
            <div className="close-btn" onClick={() => setModal(false)} />
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
      <div className="dimmed-bg" />
    </Main>
  );
}

/*
레이아웃이 안 맞다 = Box-size를 고려하지 않았다
box-sizing: border-box 으로 해결

데이터 분류가 복잡?하거나 양이 많을때 어떻게 넘겨주는게 효율적일지
*/
