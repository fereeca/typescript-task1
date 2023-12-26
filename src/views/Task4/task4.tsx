import React, { useState } from "react";
import { formatNumberWithOptions } from "../../Utils/Utils";
import Question from "../Question/ques";

interface NumberFormatProps {
  value: number;
  userSeparator: string;
}

const Task4: React.FC<NumberFormatProps> = ({ userSeparator = "," }) => {
  const [inputValue, setInputValue] = useState("");
  const [precision, setPrecision] = useState(2);
  const [format, setFormat] = useState("decimal");
  const [currency, setCurrency] = useState("USD");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlePrecisionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const precisionValue = parseInt(event.target.value);
    setPrecision(isNaN(precisionValue) ? 0 : precisionValue);
  };

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormat(event.target.value);
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrency(event.target.value);
  };

  const formattedNumber = formatNumberWithOptions(
    parseInt(inputValue) || undefined,
    userSeparator,
    precision,
    format,
    currency
  );

  return (
    <>
      <h2 className="task3-title">Task-4 Number Formatting Functions</h2>
      <div className="question-3">
        <Question title="Develop a utility function to format a number with commas as a specific separator." />
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter number"
        />
        <input
          type="number"
          value={precision}
          onChange={handlePrecisionChange}
          placeholder="Precision"
        />
        <select value={format} onChange={handleFormatChange}>
          <option value="decimal">Decimal</option>
          <option value="percent">Percent</option>
          <option value="currency">Currency</option>
        </select>
        <select value={currency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <p>Formatted Number: {formattedNumber}</p>
      </div>
    </>
  );
};

export default Task4;
