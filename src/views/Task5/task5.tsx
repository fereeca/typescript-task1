import { useState } from "react";
import {
  convertCelsiusToFahrenheit,
  convertCelsiusToKelvin,
  convertFahrenheitToCelsius,
  convertFahrenheitToKelvin,
  convertKelvinToCelsius,
  convertKelvinToFahrenheit,
} from "../../Utils/Utils";
import "./task5.css";
import Question from "../Question/ques";

function Task5() {
  const [celsius, setCelsius] = useState<number | "">("");
  const [fahrenheit, setFahrenheit] = useState<number | "">("");
  const [kelvin, setKelvin] = useState<number | "">("");
  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value === "" ? "" : parseFloat(value));
    setFahrenheit(
      value === "" ? "" : convertCelsiusToFahrenheit(parseFloat(value))
    );
    setKelvin(value === "" ? "" : convertCelsiusToKelvin(parseFloat(value)));
  };
  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value === "" ? "" : parseFloat(value));
    setCelsius(
      value === "" ? "" : convertFahrenheitToCelsius(parseFloat(value))
    );
    setKelvin(value === "" ? "" : convertFahrenheitToKelvin(parseFloat(value)));
  };
  const handleKelvinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKelvin(value === "" ? "" : parseFloat(value));
    setCelsius(value === "" ? "" : convertKelvinToCelsius(parseFloat(value)));
    setFahrenheit(
      value === "" ? "" : convertKelvinToFahrenheit(parseFloat(value))
    );
  };
  return (
    <>
      <h2 className="task3-title">Task-5 Convert Temperature</h2>
      <div className="question-3">
        <Question title="Build an application that shows the temperatures for kelvin, celsius and fahrenheit." />
      </div>
      <main className="main-task5">
        <input
          type="number"
          placeholder="Celsius"
          value={celsius === "" ? "" : celsius}
          onChange={handleCelsiusChange}
        />
        <input
          type="number"
          placeholder="Fahrenheit"
          value={fahrenheit === "" ? "" : fahrenheit}
          onChange={handleFahrenheitChange}
        />
        <input
          type="number"
          placeholder="Kelvin"
          value={kelvin === "" ? "" : kelvin}
          onChange={handleKelvinChange}
        />
      </main>
    </>
  );
}
export default Task5;
