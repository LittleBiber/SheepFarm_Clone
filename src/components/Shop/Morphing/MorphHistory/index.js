import React from "react";
import { MorphingHelp, MorphLog } from "./styles";

export default function MorphHistory() {
  return (
    <>
      <MorphingHelp>
        <dl>
          <dt>Morphing History</dt>
          <dd>
            You can use this page to keep track of your morphing progress.
            <br />
            Tasks that have been completed can be found in your inventory.
          </dd>
        </dl>
      </MorphingHelp>
      <MorphLog>
        <dl>
          <dt>
            <img src="/Morphing/img_no_morph.png" alt="" />
          </dt>
          <dd>No results to show</dd>
        </dl>
      </MorphLog>
    </>
  );
}
