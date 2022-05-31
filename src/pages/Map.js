import React from "react";
import Canvas from "../components/Map/Canvas";
import { Logo, Inventory } from "../styles";

export default function Map() {
  return (
    <>
      <Canvas />

      <Logo>
        <a href="/">
          <img src="/Map/sheepfarm_logo_top.png" alt="logo" />
        </a>
      </Logo>

      <Inventory target="_blank" href="/inventory">
        <img src="/Map/inventory.png" alt="inventory" />
      </Inventory>
    </>
  );
}
