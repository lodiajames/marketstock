import "./App.css";
import React, { useState } from "react";
import StockPage from "./pages/stockPage";
import { Routes, Route } from "react-router-dom";
import WatchlistPage from "./pages/watchlistPage";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/Welcome";
import Notiflix from "notiflix";
function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addTowatchlist = (stock) => {
    if (watchlist.some((item) => item.symbol === stock.symbol)) {
      Notiflix.Notify.failure("Stock is already in the watchlist");
      return;
    }
    fetch("https://stockmarket-app.onrender.com/api/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(stock),
    })
      .then((res) => res.json())
      .then((data) => {
        Notiflix.Notify.success("add to your watchlist");
        setWatchlist([...watchlist, stock]);
      })
      .catch((error) => {
        console.log("Error adding to watchlist", error);
      });
  };
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/stocks"
          element={<StockPage addTowatchlist={addTowatchlist} />}
        />
        <Route
          path="/watchlist"
          element={
            <WatchlistPage watchlist={watchlist} setWatchlist={setWatchlist} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
