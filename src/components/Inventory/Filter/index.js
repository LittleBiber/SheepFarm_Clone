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
                  <dt className={selected === 0 && "selected"}>ALL</dt>
                  <dd className={selected === 0 && "selected"}>0</dd>
                </dl>
              </button>
            </li>
            <li>
              <button onClick={() => setSelected(1)}>
                <p>
                  <img src="/Inventory/ic_menu01.png" alt="" />
                </p>
                <dl>
                  <dt className={selected === 1 && "selected"}>PASTURES</dt>
                  <dd className={selected === 1 && "selected"}>0</dd>
                </dl>
              </button>
            </li>
            <li>
              <button onClick={() => setSelected(2)}>
                <p>
                  <img src="/Inventory/ic_menu02.png" alt="" />
                </p>
                <dl>
                  <dt className={selected === 2 && "selected"}>SHEEP</dt>
                  <dd className={selected === 2 && "selected"}>0</dd>
                </dl>
              </button>
            </li>
            <li>
              <button onClick={() => setSelected(3)}>
                <p>
                  <img src="/Inventory/ic_menu03.png" alt="" />
                </p>
                <dl>
                  <dt className={selected === 3 && "selected"}>DECORATIONS</dt>
                  <dd className={selected === 3 && "selected"}>0</dd>
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
                  <dt className={selected === 4 && "selected"}>OTHER</dt>
                  <dd className={selected === 4 && "selected"}>0</dd>
                </dl>
              </button>
            </li>
          </ul>
        </TypeSelector>
        <WorldSelector>
          <ul>
            <li onClick={() => setWorld(0)}>
              <button className={world === 0 && "checked"}>
                <span>In Real-world</span>
              </button>
            </li>
            <li onClick={() => setWorld(1)}>
              <button className={world === 1 && "checked"}>
                <span>In Meta-land</span>
              </button>
            </li>
          </ul>
        </WorldSelector>
      </div>
    </Main>
  );
}

/*
따라 만들어보다 발견한 새로운 태그 [ dl, dt, dd ]
- <dl> 태그는 용어(term)와 그에 대한 설명(description)을 리스트 형식으로 정의할 때 사용합니다.
- <dl> 요소는 용어(term)나 이름(name)을 나타내는 <dt> 요소와 해당 용어에 대한 설명을 나타내는 <dd> 요소로 구성됩니다.
*/
