import React from "react";
import styled from "styled-components";

const Main = styled.div`
  padding: 4px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ selected }) => (selected ? "#643a3a" : "#ba8f5d")};
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .sector-id {
    color: ${({ selected }) => (selected ? "white" : "black")};
    justify-content: center;

    @media (min-width: 758px) {
      width: 50px;
    }

    @media (max-width: 757px) {
      width: unset;
    }
  }

  .property {
    display: flex;
    align-items: center;
    color: white;

    @media (min-width: 758px) {
      padding: 0 5px;
    }

    img {
      @media (max-width: 757px) {
        width: 25px;
      }
    }
  }

  .sold-btn-parent {
    display: flex;
    align-items: center;

    @media (min-width: 758px) {
      width: 86px;
    }

    .sold-btn {
      width: 100%;
      text-align: center;
      background-color: #bf3f3f;
      color: white;
      cursor: pointer;
      padding: 6px;
      text-decoration: none;
      border-radius: 10px;
      font-size: 13px;
      font-family: "Arial";
    }
  }

  span .sold-btn {
    width: 100%;
    text-align: center;
    background-color: #bf3f3f;
    color: white;
    cursor: pointer;
    padding: 6px;
    text-decoration: none;
    border-radius: 10px;
    border: none;
    font-size: 13px;
    font-family: "Arial";

    @media (min-width: 758px) {
      width: 86px;
    }
  }
`;

export default function PastureBox({
  id,
  sold,
  size,
  sheepLimit,
  selected,
  onClickGoButton,
}) {
  return (
    <Main id={id} selected={selected} onClick={() => onClickGoButton(id)}>
      <span>
        <span className="sector-id">{id}</span>
        <span className="property">
          <img src="/Map/size.png" />
          {size}
        </span>
        <span className="property">
          <img src="/Map/sheep.png" />
          {sheepLimit}
        </span>
      </span>
      <span className="sold-btn-parent">
        {sold ? (
          <button
            className="sold-btn"
            target="_blank"
            onClick={() => alert("TEST")}
          >
            OCCUPIED
          </button>
        ) : (
          <button className="sold-btn">LOCKED</button>
        )}
      </span>
    </Main>
  );
}
