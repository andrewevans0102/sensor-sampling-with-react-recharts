import React from "react";
import "../App.css";
import thermometer from "./thermometer.jpg";

function Home(props) {
  return (
    <div className="home">
      <h1 className="title">Evans Thermometer</h1>
      <img src={thermometer} alt="thermometer" />
      <a href="https://pixabay.com/photos/thermometer-summer-heiss-heat-sun-4294021/">
        Thermometer image came from Pixabay
      </a>
    </div>
  );
}

export default Home;
