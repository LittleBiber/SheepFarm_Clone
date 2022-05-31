import React, { useState } from "react";
import ItemBox from "../ItemBox";
import ProbabilityModal from "../ProbabilityModal";
import { Main } from "./styles";
import { BOX_LIST, MODAL_DATA } from "./dummy";

export default function ItemList() {
  const [modal, setModal] = useState(false);

  const killModal = () => {
    setModal(false);
  };

  const body = document.getElementsByTagName("body")[0]; // DOM말고는 body에 접근할수 없는건가?
  const [height, setHeight] = useState(0);
  const handleScroll = () => {
    const nowHeight = window.scrollY;

    body.style.top = `-${nowHeight}px`; //!반대로!반대로주라고!!!!
    body.style.position = "fixed";
    body.style["overflow-y"] = "hidden";

    setModal(true);
    setHeight(nowHeight);
  };

  return (
    <Main modal={modal}>
      {BOX_LIST.map((one, idx) => (
        <ItemBox
          options={one}
          setModal={setModal}
          key={idx}
          handleScroll={handleScroll}
        />
      ))}

      <ProbabilityModal
        modal={modal}
        killModal={killModal}
        data={MODAL_DATA[modal - 1] || MODAL_DATA[0]}
        height={height}
      />
    </Main>
  );
}
