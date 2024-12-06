import Pyramid from "./components/Pyramid/Pyramid";
import Menu from "./components/Menu/Menu";
import { useState, useEffect } from "react";
import "./App.css";
import Balance from "./components/Balance/Balance";
import Error from "./components/Error/Error";

class Node {
  constructor(data) {
    this.data = data;
    this.nextLeft = null;
    this.nextRight = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

const App = () => {
  const [balance, setBalance] = useState(100);
  const [autoBet, setAutoBet] = useState(false);
  const [betAmount, setBetAmount] = useState(10);
  const [risk, setRisk] = useState(1);
  const [rows, setRows] = useState(8);
  const [betPath, setBetPath] = useState([]);
  const [betStarted, setBetStarted] = useState(false);
  const [numOfAutoBets, setNumOfAutoBets] = useState(10);
  const [error, setError] = useState(false);

  // Pyramid Code
  let rowCount = 1;

  // multipliers
  const sixteenRowMultipliers = [
    [16, 9, 2, 1.4, 1.4, 1.2, 1.1, 1, 0.5, 1, 1.1, 1.2, 1.4, 1.4, 2, 9, 16],
    [110, 41, 10, 5, 3, 1.5, 1, 0.5, 0.3, 0.5, 1, 1.5, 3, 5, 10, 41, 110],
    [1000, 130, 26, 9, 4, 2, 0.2, 0.2, 0.2, 0.2, 0.2, 2, 4, 9, 26, 130, 1000],
  ];
  // ... (other multipliers)

  const [multipliers, setMultipliers] = useState(twelveRowMultipliers);

  useEffect(() => {
    switch (rows) {
      case 8:
        setMultipliers(eightRowMultipliers);
        break;
      // ... (other cases)
      default:
        break;
    }
  }, [rows]);

  const mainNode = new Node(0);
  const list = new LinkedList(mainNode);

  let tempOldNodeArr = [mainNode];
  let tempNewNodeArr = [];
  let nodeArr = [];

  let ctr = 1;

  for (let i = 0; i < rows + 2; i++) {
    for (let j = 0; j < rowCount + 1; j++) {
      tempNewNodeArr.push(new Node(ctr));
      ctr += 1;
    }
    for (let k = 0; k < rowCount; k++) {
      tempOldNodeArr[k].nextLeft = tempNewNodeArr[k];
      tempOldNodeArr[k].nextRight = tempNewNodeArr[k + 1];
    }
    nodeArr.push(tempOldNodeArr);
    tempOldNodeArr = [...tempNewNodeArr];
    tempNewNodeArr = [];
    rowCount += 1;
  }
  // ... (rest of the code)

  return (
    <div className='app'>
      <div>
        <Balance handleBalance={handleBalance} balance={balance} betStarted={betStarted} />
        <Menu
          handleAutoBet={handleAutoBet}
          handleBetAmount={handleBetAmount}
          autoBet={autoBet}
          handleRisk={handleRisk}
          handleRows={handleRows}
          handleNumOfAutoBets={handleNumOfAutoBets}
          halfBet={halfBet}
          doubleBet={doubleBet}
          betAmount={betAmount}
          randomTraverse={randomTraverse}
          automatedTraverse={automatedTraverse}
          betStarted={betStarted}
        />
      </div>
      <Pyramid path={betPath} rows={rows} nodeArr={nodeArr} tempOldNodeArr={tempOldNodeArr} betStarted={betStarted} />
      <div className='error-module'>
        <Error error={error} />
      </div>
    </div>
  );
};

export default App;