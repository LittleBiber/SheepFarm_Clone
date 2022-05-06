import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../components/Inventory/Filter";
import Items from "../components/Inventory/Items";
import Header from "../components/Common/Header";
import MobileHeader from "../components/Common/MobileHeader";
import Footer from "../components/Common/Footer";

const Main = styled.div`
  position: relative;
  top: 80px;
`;

export default function Landing() {
  const [selected, setSelected] = useState(0);
  const [world, setWorld] = useState(0);
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
      <Footer section={true} />
    </>
  );
}
