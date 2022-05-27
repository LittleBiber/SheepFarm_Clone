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

  return (
    <Main>
      {BOX_LIST.map((one, idx) => (
        <ItemBox {...one} setModal={setModal} key={idx} />
      ))}

      <ProbabilityModal
        modal={modal}
        killModal={killModal}
        data={MODAL_DATA[modal - 1] || MODAL_DATA[0]}
      />
    </Main>
  );
}

/*
처음 보는 태그 grid-template-columns
*/
