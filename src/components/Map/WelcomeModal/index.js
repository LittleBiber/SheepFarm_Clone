import React from "react";

import { Main } from "./styles";

export default function WelcomeModal({ handleModal, modal }) {
  return (
    <Main ref={modal}>
      <div id="welcome-modal">
        <div className="left-area">
          <img className="kelly" src="/WelcomeModal/kelly.png" alt="char" />
        </div>
        <div className="welcome-text-area">
          <p>
            <strong>Welcome to Meta-land!</strong>
            <br />
            Welcome! The map you're looking at right now is your Meta-land
            Pasture. It is based on a real-world landscape, although for the
            time being, you can only see Stewart Island. Other regions will be
            revealed after their official releases. In order to enjoy Sheepfarm,
            you must have at least one pasture.
          </p>
          <div className="action-area">
            <button className="ok-btn" onClick={handleModal}>
              Let's take a closer look!
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}
