import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #75594e;
  position: relative;
  padding: 50px 0;

  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  .bg_pattern {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(/Trailer/pattern-bg-trailer.png);
    background-size: cover;
  }

  .bottom_img {
    pointer-events: none;
    position: absolute;
    bottom: -10px;
    width: 100%;
    z-index: 1;
  }

  @media (max-width: 1000px) {
    min-height: unset;
    padding-top: 80px;
    padding-bottom: 0;
  }

  .page-container {
    z-index: 10;
    // padding: 50px 0;
    margin: 0 auto;
    width: 1300px;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .pin_wrapper {
      margin-bottom: 25px;
    }

    @media (max-width: 1000px) {
      box-sizing: border-box;
    }

    .video_wrapper {
      @media (max-width: 1000px) {
        position: relative;
        bottom: -7px;
        max-width: 100%;
        margin: 0 auto;
      }
    }
  }
`;

export const Title = styled.div`
  color: #fff8e2;
  font-style: normal;
  font-weight: bold;
  font-size: 47px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-shadow: 6px 6px 5px #63473d;
  text-align: center;

  @media (max-width: 1000px) {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.05em;
  }
`;
