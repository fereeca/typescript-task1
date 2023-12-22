import React, { useState } from "react";
import Question from "../Question/ques";

import { Capitalize, Truncate } from "../../Utils/Utils";
import "./task3.css";
function Task3() {
  const [originalString, setOriginalString] = useState<string>("");
  const [truncateLength, setTruncateLength] = useState<number>(5);
  const capitalizedString: string = Capitalize(originalString);
  const truncatedString: string = Truncate(originalString, truncateLength);
  return (
    <>
      <h2 className="task3-title">Task-3</h2>
      <div className="question-3">
        <Question title="Create a utility function that takes a string as input and returns a new string with the letter capitalized. Apply this utility in a React component." />
      </div>
      <div className="task3-align">
        <main>
          <div className="string-truncate">
            <label htmlFor="inputString">Enter a string:</label>
            <input
              type="text"
              id="inputString"
              value={originalString}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setOriginalString(e.target.value)
              }
            />
            <label htmlFor="truncateLength">Truncate Length:</label>
            <input
              type="number"
              id="truncateLength"
              value={truncateLength}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTruncateLength(Number(e.target.value))
              }
            />
          </div>
          <div className="options">
            <p>Original string: {originalString}</p>
            <p>Capitalized string: {capitalizedString}</p>
            <p>Truncated string: {truncatedString}</p>
          </div>
        </main>
      </div>
    </>
  );
}
export default Task3;
