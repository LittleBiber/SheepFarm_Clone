import React from "react";
import { Pin } from "../../../styles/index";
import { Main, NewsletterTitle } from "./styles";

export default function Newsletter() {
  return (
    <Main>
      <div className="page-container">
        <div className="newsletter-desc">
          <div className="pin_wrapper">
            <Pin>NEWSLETTER</Pin>
          </div>
          <NewsletterTitle>
            SUBSCRIBE TO OUR
            <br />
            FEED!
          </NewsletterTitle>
          <div className="email_form">
            <input type="email" placeholder="Type your email..." />
            <button
              type="submit"
              onClick={() => alert("Okay, You'll be fed soon!")}
            >
              Baa!
            </button>
          </div>
          <div className="desc">Join our community to stay informed!</div>
          <div className="links">
            <span>
              <a href="https://discord.gg/sheepfarm" target="_blank">
                <img src="/Newsletter/discord.svg" alt="discord" />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/SheepFarmMeta" target="_blank">
                <img src="/Newsletter/twitter.svg" />
              </a>
            </span>
            <span>
              <a href="https://t.me/sheepmeta" target="_blank">
                <img src="/Newsletter/telegram.svg" />
              </a>
            </span>
            <span>
              <a href="https://sheepfarm.medium.com/" target="_blank">
                <img src="/Newsletter/medium.png" />
              </a>
            </span>
          </div>
        </div>
        <img className="postman" src="/Newsletter/postman_spring.png" alt="" />
      </div>
    </Main>
  );
}
