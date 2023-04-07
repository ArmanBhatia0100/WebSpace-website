import Header from "../../components/Header";

import "../../styles/destination.scss";

const Destination = () => {
  return (
    <div className="destination-container">
      <Header />
      <div className="destination-content">
        <h3>01 Pick your destination</h3>
        <div className="planet-container">
          <img src="/assets/destination/image-moon.webp" alt="planet-moon" />
        </div>
        <div className="destination-nav">
          <a href="#123">Moon</a>
          <a href="#123">Mars</a>
          <a href="#123">Europa</a>
          <a href="#123">Titan</a>
        </div>
        <div className="planet-info-container">
          <h1 className="planet-name">MOON</h1>
          <p className="planet-description">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr />
          <div className="avg-distance">
            <h4>AVG. DISTANCE</h4>
            <h1>384,400 km</h1>
          </div>
          <div className="est-time">
            <h4>Est. travel time</h4>
            <h1>3 days</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
