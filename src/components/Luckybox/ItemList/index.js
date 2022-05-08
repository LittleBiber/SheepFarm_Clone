import React, { useState } from "react";
import ItemBox from "../ItemBox";
import ProbabilityModal from "../ProbabiltyModal";
import { Main } from "./styles";
import { BOX_LIST, MODAL_DATA } from "./dummy";

export default function ItemList() {
  const [modal, setModal] = useState(false);

  return (
    <Main>
      {BOX_LIST.map((one, idx) => (
        <ItemBox {...one} setModal={setModal} key={idx} />
      ))}

      <ProbabilityModal
        modal={modal}
        setModal={setModal}
        data={MODAL_DATA[modal - 1] || MODAL_DATA[0]}
      />
    </Main>
  );
}

/*
처음 보는 태그 grid-template-columns
*/
