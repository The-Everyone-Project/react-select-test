import "./App.css";
import React, { useState } from "react";
import Select from "react-select";

function App() {
  const values = ["one", "two", "three", "four"];
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleSelectChange = (evt) => {
    setSelectedValue(evt.label);
  };

  const convertArrayToSelectFormat = (arrayToConvert) =>
    arrayToConvert.map((item) => ({ value: item, label: item }));

  const displayedValue = convertArrayToSelectFormat([selectedValue]);
  const options = convertArrayToSelectFormat(values);

  return (
    <div
      className="App"
      style={{
        width: "50%",
        margin: "10% 25%",
      }}
    >
      <Select
        name="select"
        value={displayedValue}
        onChange={handleSelectChange}
        components={{
          ClearIndicator: null,
        }}
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
}

export default App;
