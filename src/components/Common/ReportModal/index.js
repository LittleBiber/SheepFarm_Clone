import React, { useState } from "react";
import { Main } from "./styles";

export default function ReportModal({ setReport }) {
  const [text, setText] = useState("");
  const handleText = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const killReport = () => {
    setText("");
    setReport(false);
  };

  const SubmitReport = () => {
    alert("Successfully reported.");
    killReport();
  };

  return (
    <Main>
      <div className="box_top">
        <div>
          <img className="report_img" src="/ReportModal/error.png" alt="" />
        </div>
        <div className="report_title">
          <div className="report-popup-title">Report error</div>
          <div>please describe what happened</div>
        </div>
      </div>
      <div className="report_input">
        <textarea
          className="text-input-area"
          rows="10"
          id="error-report-text"
          onChange={handleText}
        ></textarea>
      </div>
      <div className="btns">
        <button className="cancel" onClick={killReport}>
          Cancel
        </button>
        <button className="submit" onClick={SubmitReport}>
          Submit
        </button>
      </div>
    </Main>
  );
}
