import React from "react";
import {
  Intro,
  Overview,
  Features,
  Trailer,
  Marmalade,
  Nightingale,
  NFTMarket,
  Partners,
  Sheepster,
  Newsletter,
  Faq,
} from "../components/Landing";
import Sidebar from "../components/Common/Sidebar";
import Header from "../components/Common/Header";
import MobileHeader from "../components/Common/MobileHeader";
import Footer from "../components/Common/Footer";

export default function Landing() {
  return (
    <>
      <Header bgcolor="rgba(101, 164, 182, 0.4)" />
      <MobileHeader bgcolor="rgba(101, 164, 182, 0.4)" />
      <Intro />
      <Sidebar />
      <Overview />
      <Features />
      <Trailer />
      <Marmalade />
      <Nightingale />
      <NFTMarket />
      <Partners />
      <Sheepster />
      <Newsletter />
      <Faq />
      <Footer />
    </>
  );
}
