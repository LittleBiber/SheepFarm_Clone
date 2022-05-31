import React, { useState, useEffect } from "react";
import { Filter, Items } from "../components/Inventory";
import { Header, MobileHeader, Footer } from "../components/Common";
import { InventoryMain } from "../styles";

export default function Inventory() {
  const [selected, setSelected] = useState(0);
  const [world, setWorld] = useState(0);

  useEffect(() => {
    if (world) setWorld(0);
  }, [selected]);
  return (
    <>
      <Header bgcolor="#543F36" />
      <MobileHeader bgcolor="#543F36" />
      <InventoryMain>
        <Filter
          selected={selected}
          setSelected={setSelected}
          world={world}
          setWorld={setWorld}
        />
        <Items selected={selected} world={world} />
      </InventoryMain>
      <Footer section={false} />
    </>
  );
}
