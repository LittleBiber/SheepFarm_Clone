import React, { useEffect, useRef } from "react";

import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Map() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef) return;
    const ctx = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = "https://sheepfarm.io/img/maps/sector_0.png";

    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };
  }, [canvasRef]);

  return (
    <Main>
      <canvas width="1720px" height="1738px" ref={canvasRef}></canvas>
    </Main>
  );
}
