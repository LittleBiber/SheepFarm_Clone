import React from "react";
import { Main, TypeSelector, WorldSelector } from "./styles";

export default function Filter({ selected, setSelected, world, setWorld }) {
  return (
    <Main>
      <div className="selector-wrapper">
        <TypeSelector>
          <ul>
            <li>
              <button onClick={() => setSelected(0)}>
                <p>
                  <img src="/Inventory/ic_menu00.png" alt="" />
                </p>
                <dl>
                  <dt className={selected === 0 ? "selected" : undefined}>
                    ALL
                  </dt>
                  <dd className={selected === 0 ? "selected" : undefined}>0</dd>
                </dl>
              </button>
            </li>
            <li>
              <button onClick={() => setSelected(1)}>
                <p>
                  <img src="/Inventory/ic_menu01.png" alt="" />
                </p>
                <dl>
                  <dt className={selected === 1 ? "selected" : undefined}>
                    PASTURES
                  </dt>
                  <dd className={selected === 1 ? "selected" : undefined}>0</dd>
                </dl>
              </button>
            </li>
            <li>
              <button onClick={() => setSelected(2)}>
                <p>
                  <img src="/Inventory/ic_menu02.png" alt="" />
                </p>
                <dl>
                  <dt className={selected === 2 ? "selected" : undefined}>
                    SHEEP
                  </dt>
                  <dd className={selected === 2 ? "selected" : undefined}>0</dd>
                </dl>
              </button>
            </li>
            <li>
              <button onClick={() => setSelected(3)}>
                <p>
                  <img src="/Inventory/ic_menu03.png" alt="" />
                </p>
                <dl>
                  <dt className={selected === 3 ? "selected" : undefined}>
                    DECORATIONS
                  </dt>
                  <dd className={selected === 3 ? "selected" : undefined}>0</dd>
                </dl>
              </button>
            </li>
            <li>
              <button onClick={() => setSelected(4)}>
                <p className="etc">
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
                <dl>
                  <dt className={selected === 4 ? "selected" : undefined}>
                    OTHER
                  </dt>
                  <dd className={selected === 4 ? "selected" : undefined}>0</dd>
                </dl>
              </button>
            </li>
          </ul>
        </TypeSelector>
        <WorldSelector>
          <ul>
            <li onClick={() => setWorld(0)}>
              <button className={world === 0 ? "checked" : undefined}>
                <span>In Real-world</span>
              </button>
            </li>
            <li onClick={() => setWorld(1)}>
              <button className={world === 1 ? "checked" : undefined}>
                <span>In Meta-land</span>
              </button>
            </li>
          </ul>
        </WorldSelector>
      </div>
    </Main>
  );
}
