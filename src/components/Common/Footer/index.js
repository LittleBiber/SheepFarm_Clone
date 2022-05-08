import React, { useState } from "react";
import { Main } from "./styles";
import ReportModal from "../ReportModal";

export default function Footer({ section }) {
  const [report, setReport] = useState(false);

  const handleReportModal = () => {
    setReport(true);
  };

  return (
    <Main section={section}>
      <div className="page-container">
        <img src="/Footer/nightingale-interactive.png" alt="footer" />
        <a href="mailto:support@sheepfarm.io">
          <span>support@sheepfarm.io</span>
        </a>
        <span>2021-2022 All rights reserved. Nightingale Interactive.</span>
      </div>
      <div className="error-report-container">
        <button className="btn-error-report" onClick={handleReportModal}>
          Report error
        </button>
      </div>
      <div className={!report && "hidden"}>
        <ReportModal setReport={setReport} />
      </div>
    </Main>
  );
}
