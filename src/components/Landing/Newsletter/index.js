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
              <a
                href="https://discord.gg/sheepfarm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Newsletter/discord.svg" alt="discord" />
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/SheepFarmMeta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Newsletter/twitter.svg" alt="news_twitter" />
              </a>
            </span>
            <span>
              <a
                href="https://t.me/sheepmeta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Newsletter/telegram.svg" alt="news_telegram" />
              </a>
            </span>
            <span>
              <a
                href="https://sheepfarm.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Newsletter/medium.png" alt="news_medium" />
              </a>
            </span>
          </div>
        </div>
        <img className="postman" src="/Newsletter/postman_spring.png" alt="" />
      </div>
    </Main>
  );
}

/*
  a태그에서 target="_blank" 사용 상 주의점
  
  1. 보안 상 취약점이 발생함.
    링크 페이지가 악의적인 목적으로 만들어졌고, JS에서 window.opener로 부모 윈도우의 주소를 바꾸려 하면?
    부모 윈도우의 데이터를 마음대로 사용/조작할 수 있으므로 보안 상 위협이 됨.
  
  2. 성능저하의 원인
    target="_blank" 에 의해 열린 페이지는 부모 페이지(링크를 건 페이지)와 같은 프로세스로 실행됨.
    = 링크된 페이지가 고부하 작업을 수행하면 부모 페이지도 같이 느려질 수 있다
  
  해결 방법
    1. noopener 지정 
      링크된 페이지에서 window.opener로 부모 페이지를 볼 수 없게 됨.
      링크된 페이지와 링크를 건 페이지를 별개의 프로세스로 실행해 서로 영향을 주지 않음

    2. noreferrer 지정
      다른 페이지로 이동할 때 링크를 건 페이지 주소 등 정보를 브라우저가 Referer헤더로 전송하지 않음.
    
    3. 결론: 보안을 위해 _blank 사용한 a태그에는 rel="noopener noreferrer" 사용해주기!.
*/
