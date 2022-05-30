import React, { useRef } from "react";
import { SearchBox, BackButton } from "./styles";

export default function Search({ onClickLandSearch }) {
  const targetID = useRef(null);

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      onClickLandSearch(targetID.current.value);
    }
  };

  const isNotNumber = (value) => {
    const regExp = /[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    return regExp.test(value);
  };

  return (
    <>
      <SearchBox>
        <div className="info-area-heading">Search</div>
        <div className="search-box">
          <input
            type="number"
            placeholder="Pasture ID"
            id="land-id-input"
            ref={targetID}
            onKeyPress={onKeyEnter}
            onChange={(e) => {
              if (e.nativeEvent.data && isNotNumber(e.nativeEvent.data)) {
                e.preventDefault();
                return null;
              }
            }}
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
          <img src="/Search/back_button.png" alt="" />
        </a>
      </BackButton>
    </>
  );
}
