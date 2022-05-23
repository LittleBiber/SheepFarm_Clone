import React from "react";
import styled from "styled-components";

const Main = styled.div`
  ${({ modal }) => (modal ? "" : "display: none;")}

  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000000b3;
  z-index: 9999;

  @media (max-width: 757px) {
    ${({ modal }) => (modal ? "display: flex;" : "display: none;")}
    flex-direction: column;
    justify-content: center;
  }

  #welcome-modal {
    position: fixed;
    background-color: #fef7e2;
    border-radius: 10px;
    box-shadow: 8px 13px 0px 1px #100000;

    @media (max-width: 757px) {
      width: 90vw;
      height: unset;
      left: 5vw;
      display: block;
    }

    @media (min-width: 758px) {
      width: 700px;
      height: 310px;
      left: calc(50% - 350px);
      top: calc(50% - 155px);
      display: flex;
      align-items: flex-end;
    }

    .left-area {
      display: flex;

      @media (max-width: 757px) {
        display: none;
      }
    }

    .welcome-text-area {
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      line-height: 1.7;

      p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;

        strong {
          font-size: 25px;
        }
      }

      .action-area {
        text-align: center;

        .ok-btn {
          cursor: pointer;
          outline: none;

          font-family: "Poppins";

          border: 0;
          width: 200px;
          color: white;
          border-radius: 10px;
          box-sizing: border-box;
          margin-left: 5px;
          cursor: pointer;
          background-color: #4c9933;
          color: white;

          @media (max-width: 757px) {
            height: 50px;
          }

          @media (min-width: 758px) {
            height: 30px;
          }
        }
      }
    }
  }
`;

export default function WelcomeModal({ welcomeModal, setWelcomeModal }) {
  return (
    <Main modal={welcomeModal}>
      <div id="welcome-modal">
        <div className="left-area">
          <img className="kelly" src="/WelcomeModal/kelly.png" />
        </div>
        <div className="welcome-text-area">
          <p>
            <strong>
              {/*  style="font-size:25px" */}Welcome to Meta-land!
            </strong>
            <br />
            Welcome! The map you're looking at right now is your Meta-land
            Pasture. It is based on a real-world landscape, although for the
            time being, you can only see Stewart Island. Other regions will be
            revealed after their official releases. In order to enjoy Sheepfarm,
            you must have at least one pasture.
          </p>
          <div className="action-area">
            <button className="ok-btn" onClick={setWelcomeModal}>
              Let's take a closer look!
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}
