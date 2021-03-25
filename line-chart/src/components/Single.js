import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import SingleResults from "../results/SINGLE_RESULTS";
import HistoricalResults from "../results/HISTORICAL_RESULTS";
import "../App.css";

export default function Single() {
  const singleResults = SingleResults.results;
  const historicalResults = HistoricalResults.results;

  const [results, setResults] = useState([]);

  useEffect(() => {
    const formattedResults = [];
    for (let i = 0; i < singleResults.length; i++) {
      console.log("reading value");
      formattedResults.push({
        day: singleResults[i].day,
        time: singleResults[i].time,
        temp: parseFloat(singleResults[i].temp),
        humidity: parseFloat(singleResults[i].humidity),
        outsideTemp: parseFloat(historicalResults[i].temp),
        outsideHumidity: parseFloat(historicalResults[i].humidity),
      });
    }
    setResults(formattedResults);
  }, [singleResults, historicalResults]);

  return (
    <>
      <h1>Single Readings for 03/18/2021</h1>
      <div className="single">
        <div>
          <h4>Temperature</h4>
          <LineChart
            width={700}
            height={500}
            data={results}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[40, 80]} />
            <Tooltip />
            <Legend verticalAlign="bottom" height={1} />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#ff2a00"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="outsideTemp" stroke="#105e10" />
          </LineChart>
        </div>
        <div>
          <h4>Humidity</h4>
          <LineChart
            width={700}
            height={500}
            data={results}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[20, 110]} />
            <Tooltip />
            <Legend verticalAlign="bottom" height={1} />
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#9b12aa"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="outsideHumidity" stroke="#c92a5c" />
          </LineChart>
        </div>
      </div>
    </>
  );
}
