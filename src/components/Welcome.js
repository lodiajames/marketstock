import React from "react";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to the Stock Market App</h1>
      <p>
        Track your favorite stocks and stay updated with the latest market
        trends. Add stocks to your personalized watchlist and monitor their
        performance over time.
      </p>
      <div className="features">
        <div className="feature">
          <h2>Browse Stocks</h2>
          <p>
            Explore a wide range of stocks and get detailed information about
            each one
          </p>
        </div>
        <div className="feature">
          <h2>Add to Watchlist</h2>
          <p>
            Keep track of the stocks you're interested in by adding them to your
            watchlist.
          </p>
        </div>
        <div className="feature">
          <h2>Stay Informed</h2>
          <p>
            Get real-time updates and stay informed about market movements and
            trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
