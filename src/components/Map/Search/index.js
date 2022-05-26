import React, { useRef } from "react";
import { SearchBox, BackButton } from "./styles";

export default function Search({ onClickLandSearch }) {
  const targetID = useRef(null);

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      onClickLandSearch(targetID.current.value);
    }
  };

  return (
    <>
      <SearchBox>
        <div className="info-area-heading">Search</div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Pasture ID"
            id="land-id-input"
            ref={targetID}
            onKeyPress={onKeyEnter}
          />
          <button
            id="search_btn"
            onClick={() => onClickLandSearch(targetID.current.value)}
          >
            GO
          </button>
        </div>
      </SearchBox>
      <BackButton>
        <a href="/">
          <img src="/Search/back_className=.png" alt="" />
        </a>
      </BackButton>
    </>
  );
}
