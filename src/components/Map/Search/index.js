import React, { useRef, useState } from "react";
import { SearchBox, BackButton } from "./styles";

export default function Search({ onClickLandSearch }) {
  const searchInput = useRef(null);
  const [targetID, setTargetID] = useState(null);

  const onKeyEnter = (e) => {
    if (e.key === "-" || e.key === "+" || e.key === "." || e.key === "e") {
      e.preventDefault();
      return null;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      onClickLandSearch(targetID);
      searchInput.current.blur();
    }
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    onClickLandSearch(targetID);
    searchInput.current.blur();
  };

  const handleInput = (event) => {
    const value = event.target.value;

    let result = "";
    if (value[0] !== "0") result += value[0];

    console.log(event);

    for (let i = 1; i < value.length; i++) {
      if (!Number.isNaN(Number(value[i]))) result += value[i];
    }

    if (Number.isNaN(Number(result))) result = 0;

    setTargetID(result);
  };

  return (
    <>
      <SearchBox>
        <div className="info-area-heading">Search</div>
        <div className="search-box">
          <input
            type="number"
            min="0"
            placeholder="Pasture ID"
            id="land-id-input"
            ref={searchInput}
            onKeyPress={onKeyEnter}
            onChange={handleInput}
          />
          <button id="search_btn" onClick={onClickSearch}>
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
