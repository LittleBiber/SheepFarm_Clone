import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Filter from "../components/Inventory/Filter";
import Items from "../components/Inventory/Items";
import Header from "../components/Common/Header";
import MobileHeader from "../components/Common/MobileHeader";
import Footer from "../components/Common/Footer";

const Main = styled.div`
  background-color: #fff8e2;
  position: relative;

  @media (max-width: 1100px) {
    top: 80px;
  }
`;

export default function Landing() {
  const [selected, setSelected] = useState(0);
  const [world, setWorld] = useState(0);

  useEffect(() => {
    if (world) setWorld(0); //  카테고리 변경 시 World 초기화
  }, [selected]);
  return (
    <>
      <Header bgcolor="#543F36" />
      <MobileHeader bgcolor="#543F36" />
      <Main>
        <Filter
          selected={selected}
          setSelected={setSelected}
          world={world}
          setWorld={setWorld}
        />
        <Items selected={selected} world={world} />
      </Main>
      <Footer section={false} />
    </>
  );
}
