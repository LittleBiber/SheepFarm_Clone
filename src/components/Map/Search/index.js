import React, { useRef } from "react";
import styled from "styled-components";

const SearchBox = styled.div`
  background-color: white;
  z-index: 10;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  background-color: #e4bb88;
  border: 5px solid #504130;
  filter: drop-shadow(0px 5px 0px #000);

  @media (max-width: 757px) {
    width: calc(100% - 20px - 70px);
  }

  @media (min-width: 758px) {
    width: 350px;
  }

  .info-area-heading {
    background-color: #504130;
    color: white;
    padding: 0px 5px 5px 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: calc(100% + 1px);
    font-size: 1.2rem;

    @media (max-width: 757px) {
      display: none;
    }

    @media (min-width: 758px) {
      display: block;
    }
  }

  .search-box {
    display: flex;
    align-items: center;

    // Placeholder 글자색상은 따로 변경
    input::-webkit-input-placeholder { color: white; }

    #land-id-input {
      background-color: #ba8f5d;
      color: white;
      border: 0px;
      border-radius: 10px 0 0 10px;
      height: 30px;
      box-sizing: border-box;
      text-align: center;
      margin: 10px 0 10px 10px;
      width: 100%;
      
      }

      padding: 1px 2px;
    }

    #search_btn {
      height: 30px;
      border: 0;
      background-color: #504130;
      color: white;
      border-radius: 0 10px 10px 0;
      box-sizing: border-box;
      margin-right: 10px;
      width: 70px;
    }
  }
`;

const BackButton = styled.span`
  display: none;

  @media (max-width: 757px) {
    display: block;
    position: fixed;
    width: 60px;
    margin: 10px;
    left: 0;
    top: 0;

    img {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0px 5px 0px #000);
    }
  }
`;

export default function Search() {
  const targetID = useRef(null);

  const searchLand = () => {
    // targetID.current.value
  };

  return (
    <>
      <SearchBox>
        <div class="info-area-heading">Search</div>
        <div class="search-box">
          <input
            type="text"
            placeholder="Pasture ID"
            id="land-id-input"
            ref={targetID}
          />
          <button id="search_btn" onClick={() => searchLand(targetID)}>
            GO
          </button>
        </div>
      </SearchBox>
      <BackButton>
        <a href="/">
          <img src="/Search/back_button.png" alt="" />
        </a>
      </BackButton>
    </>
  );
}
