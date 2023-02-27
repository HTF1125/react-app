import styles from "./App.module.css";

const SingleAsset = (props) => {
  return (
    <div className={styles.name}>
      <h1>
        {props.ticker} - {props.name}
      </h1>
    </div>
  );
};

function App() {
  const age = 18;
  const isGreen = true;

  const assets = [
    { ticker: "SPY", name: "S&P500 ETF" },
    { ticker: "AGG", name: "AGGREGATE BOND ETF" },
    { ticker: "TLT", name: "AGGREGATE BOND ETF" },
  ];

  return (
    <div className={styles.App}>
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This is Green</h1>
      {assets.map((asset, key) => {
        return (
          <SingleAsset ticker={asset.ticker} name={asset.name}></SingleAsset>
        );
      })}
    </div>
  );
}

export default App;
