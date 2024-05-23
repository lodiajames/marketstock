import React, { useEffect, useState } from "react";

const StockPage = ({ addTowatchlist }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("https://stockmarket-app.onrender.com/api/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
      .catch((error) => console.log(error("Error Fetching stocks")));
  }, []);

  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="stock-page">
      <h2>Stocks</h2>
      <ul className="stock-list">
        {stocks?.map((stock) => (
          <li key={stock.symbol} className="stock-item">
            <div className="stock-info">
              <span className="stock-company">
                {stock.company} ({stock.symbol})
              </span>
              <span className="stock-price" style={{ color: getRandomColor() }}>
                ${stock.initial_price}
              </span>
            </div>
            <button
              className="add-button"
              onClick={() => addTowatchlist(stock)}
            >
              Add to Watchlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockPage;
