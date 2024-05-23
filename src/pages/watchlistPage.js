import Notiflix from "notiflix";
import React from "react";

const WatchlistPage = ({ watchlist, setWatchlist }) => {
  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"]; // Red and Green
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleDelete = (id) => {
    fetch(`https://stockmarket-app.onrender.com/api/watchlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Notiflix.Notify.success("Successfully deleted in your watchlist");
          setWatchlist(watchlist.filter((stock) => stock._id !== id));
        } else {
          Notiflix.Notify.failure(
            "Failed to delete the stock from the watchlist"
          );
        }
      })
      .catch((error) => {
        console.log("Error deleting from watchlist", error);
      });
  };
  return (
    <div className="watchlist-page">
      <h1>My Watchlist</h1>
      <ul className="watchlist">
        {watchlist?.map((stock) => (
          <li key={stock._id} className="watchlist-item">
            <div className="watchlist-info">
              <span className="watchlist-company">
                {stock.company} ({stock.symbol}
              </span>
              <span
                className="watchlist-price"
                style={{ color: getRandomColor() }}
              >
                ${stock.initial_price}
              </span>
              <button
                className="delete-btn"
                onClick={() => handleDelete(stock._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchlistPage;
