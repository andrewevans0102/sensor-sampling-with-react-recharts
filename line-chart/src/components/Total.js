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
import TotalResults from "../results/TOTAL_RESULTS";
import "../App.css";

export default function Total() {
  const totalResults = TotalResults.results;

  const [results, setResults] = useState([]);

  useEffect(() => {
    const formattedResults = [];
    totalResults.forEach((value) => {
      console.log("reading value");
      formattedResults.push({
        day: value.day,
        time: value.time,
        temp: parseFloat(value.temp),
        humidity: parseFloat(value.humidity),
      });
    });
    setResults(formattedResults);
  }, [totalResults]);

  return (
    <>
      <h1>Total Readings from 03/08/2021 through 03/20/2021</h1>
      <div className="wrapper">
        <div className="total">
          <LineChart
            width={1000}
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
            <XAxis interval={50} dataKey="day" />
            <YAxis domain={[20, 80]} />
            <Tooltip />
            <Legend verticalAlign="bottom" height={1} />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </>
  );
}
