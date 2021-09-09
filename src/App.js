import { React, useState, useEffect } from "react";
import ChartRace from "react-chart-race";

function App() {
  const [data, setData] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleChange() {
    const data = [
      {
        id: 0,
        title: "GOOGL",
        value: getRandomInt(0.2, 10),
        color: "#50c4fe"
      },
      { id: 1, title: "AAPL", value: getRandomInt(0.2, 10), color: "#3fc42d" },
      { id: 2, title: "BABA", value: getRandomInt(0.2, 10), color: "#c33178" },
      { id: 3, title: "FB", value: getRandomInt(0.2, 10), color: "#423bce" },
      { id: 4, title: "MSFT", value: getRandomInt(0.2, 10), color: "#c8303b" },
      { id: 5, title: "NVDA", value: getRandomInt(0.2, 10), color: "#2c2c2c" }
    ];

    setData([...data]);
  }

  useEffect(() => {
    const data = [
      {
        id: 0,
        title: "GOOGL",
        value: getRandomInt(0.2, 10),
        color: "#50c4fe"
      },
      {
        id: 1,
        title: "AAPL",
        value: getRandomInt(0.2, 10),
        color: "#3fc42d"
      },
      { id: 2, title: "BABA", value: getRandomInt(0.2, 10), color: "#c33178" },
      { id: 3, title: "FB", value: getRandomInt(0.2, 10), color: "#423bce" },
      { id: 4, title: "MSFT", value: getRandomInt(0.2, 10), color: "#c8303b" },
      { id: 5, title: "NVDA", value: getRandomInt(0.2, 10), color: "#2c2c2c" }
    ];

    setData([...data]);
  }, []);

  return (
    <div>
      <ChartRace
        data={data}
        backgroundColor="#000"
        width={760}
        padding={12}
        itemHeight={58}
        gap={12}
        titleStyle={{ font: "normal 400 13px Arial", color: "#fff" }}
        valueStyle={{
          font: "normal 400 11px Arial",
          color: "rgba(255,255,255, 0.42)"
        }}
      />

      <button onClick={handleChange}>Click Me!</button>
    </div>
  );
}

export default App;
