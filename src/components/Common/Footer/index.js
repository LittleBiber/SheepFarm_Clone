import React from "react";
import { Main } from "./styles";

export default function Footer({ section }) {
  return (
    <Main section={section}>
      <div className="page-container">
        <img src="/Footer/nightingale-interactive.png" alt="footer" />
        <a href="mailto:support@sheepfarm.io">
          <span>support@sheepfarm.io</span>
        </a>
        <span>2021-2022 All rights reserved. Nightingale Interactive.</span>
      </div>
      <div class="error-report-container">
        <button class="btn-error-report" onclick="show_error_report_popup()">
          Report error
        </button>
      </div>
    </Main>
  );
}
