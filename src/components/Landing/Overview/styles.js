import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  background-color: #576d40;
  background-image: url("/Overview/overview-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100%;
  min-height: 800px;

  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    justify-content: center;
  }

  .container {
    display: flex;
    flex-direction: row;
    padding-top: 30px;

    @media (max-width: 1100px) {
      flex-direction: column-reverse;
      align-items: center;
    }

    .image-container {
      flex: 0 0 auto;
      width: 50%;

      img {
        position: absolute;
        left: 80px;
        transform: translateY(0);
        animation: float ease-in-out 2s infinite alternate;
        filter: drop-shadow(24px 24px 15px rgba(68, 89, 46, 0.76));

        @keyframes float {
          0% {
            margin-top: 0px;
          }

          100% {
            margin-top: 20px;
          }
        }

        @media (max-width: 1100px) {
          animation: unset;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -60px;
          min-width: 600px;
          width: 50vw;
        }
      }
    }
  }

  .title {
    color: #fff8e2;
    font-style: normal;
    font-weight: bold;
    font-size: 47px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 500px;
    }

    @media (max-width: 580px) {
      font-size: 28px !important;
      line-height: 40px !important;
    }
  }

  .shadow {
    text-shadow: 2px 6px 7px rgb(68 89 46 / 76%);
  }

  .description {
    display: flex;
    flex-direction: column;
    align-itmes: flex-start;

    color: #fff8e2;
    font-size: 20px;
    font-weight: 500;

    @media (max-width: 1100px) {
      align-items: center;
    }

    @media (max-width: 1000px) {
      width: 500px;
    }

    @media (min-width: 992px) {
      flex: 0 0 auto;
      width: 85%;
    }

    @media (max-width: 580px) {
      font-size: 14px;
      line-height: 25px;
      text-align: center;
      letter-spacing: 0.03em;
    }
  }

  .banner_small {
    margin-top: 30px;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
  }

  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 200px;
    background-color: #ffd668;
    border: 3px solid #92552f;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px 5px 10px 20px;

    @media (max-width: 1100px) {
      text-align: center;
      margin: 0 auto;
      width: 170px !important;
      padding: 10px 5px 10px 10px;

      img {
        text-align: center;
        margin: 0 auto;
        width: 170px !important;
      }
    }

    img {
      width: 55px !important;
      height: 40px;
    }

    span {
      text-align: center;
      color: #553b2a;
      font-size: 18px;
      line-height: 1.2;
      font-weight: bold;
    }
  }

  .avail_web {
    cursor: pointer;
    width: 200px;

    @media (max-width: 1100px) {
      text-align: center;
      margin: 0 auto;
      width: 170px !important;
    }
  }

  .left {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 50%;
    gap: 20px;
    margin-top: 50px;
    z-index: 1;
    width: 50%;

    @media (max-width: 1100px) {
      flex: 0 0 auto;
      width: 500px;
      align-items: center;

      position: absolute;
      top: 80px;
    }
  }
`;
