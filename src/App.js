import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CoinsData } from "./coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => alert(`You got error buddy ${err}`));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <div>
        <h1>Search a currency </h1>
        <div>
          <form>
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
            ></input>
          </form>
          {filteredCoins.map((coin) => {
            return (
              <CoinsData
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
