import { useState } from "react";

const SingleAsset = (props) => {
  return (
    <div className="name">
      <h1 key={props.key}>
        {props.ticker} - {props.name}
      </h1>
    </div>
  );
};

function App() {
  const [inputText, setInputText] = useState("");
  const [age, setAge] = useState(15);
  const isGreen = true;
  const increaseAge = () => {
    setAge(age + 1);
  };
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const assets = [
    { ticker: "SPY", name: "S&P500 ETF" },
    { ticker: "AGG", name: "AGGREGATE BOND ETF" },
    { ticker: "TLT", name: "AGGREGATE BOND ETF" },
  ];

  const [showText, setShowText] = useState(false);

  return (
    <div className="App">

      <input type="text" onChange={handleInputChange}></input>
      {inputText}
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}

      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      {showText && <h1> Hi My Name is Robert</h1>}

      <button onClick={increaseAge}>Increase Age</button>
      <h1 style={{ color: isGreen ? "green" : "red" }}>This is Green</h1>
      {assets.map((asset, key) => {
        return (
          <SingleAsset
            ticker={asset.ticker}
            name={asset.name}
            key={key}
          ></SingleAsset>
        );
      })}
    </div>
  );
}

export default App;
