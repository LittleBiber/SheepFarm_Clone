import React, { useState } from "react";
import { Selector, Treats, Morphing, Upgrades } from "../components/Shop";
import { Header, MobileHeader, Footer } from "../components/Common";
import { ShopMain, ShopContentWrapper, ShopContent } from "../styles";

export default function Shop() {
  const [select, setSelect] = useState(0);
  const components = [<Treats />, <Morphing />, <Upgrades />];

  return (
    <ShopMain>
      <Header bgcolor="#543F36" />
      <MobileHeader bgcolor="#543F36" />
      <ShopContentWrapper>
        <ShopContent>
          <div className="content-box">
            <h1 className="title">SHOP</h1>
            <Selector select={select} setSelect={setSelect} />
            <div className="shop-contents">{components[select]}</div>
          </div>
        </ShopContent>
      </ShopContentWrapper>
      <Footer section={false} />
    </ShopMain>
  );
}
