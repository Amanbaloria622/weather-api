import React from "react";
import { useState } from "react";
const Datalist = [
  {
    id: "1",
    timestamp: "2025-04-20T00:00:00Z",
    location: "New York, USA",
    moon_angle: 179.3,
    visibility: 0.92,
  },
  {
    id: "2",
    timestamp: "2025-04-20T00:15:00Z",
    location: "Tokyo, Japan",
    moon_angle: 182.1,
    visibility: 0.89,
  },
  {
    id: "3",
    timestamp: "2025-04-20T00:30:00Z",
    location: "Cairo, Egypt",
    moon_angle: 177.6,
    visibility: 0.85,
  },
  {
    id: "4",
    timestamp: "2025-04-20T00:45:00Z",
    location: "Sydney, Australia",
    moon_angle: 180.4,
    visibility: 0.94,
  },
  {
    id: "5",
    timestamp: "2025-04-20T01:00:00Z",
    location: "Paris, France",
    moon_angle: 176.9,
    visibility: 0.81,
  },
];

export const Body = () => {
  let [Searchres, Setsearch] = useState("");
  let [Data, setdata] = useState(Datalist);

  return (
    <>
      <div id="inputbar">
        <input
          type="text"
          placeholder=" Enter Location"
          value={Searchres}
          onChange={(a) => {
            Setsearch(a.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            console.log(Searchres);
            let fliterlist = Datalist.filter((products) => {
              return products.location
                .toLowerCase()
                .trim()
                .includes(Searchres.toLowerCase());
            });

            setdata(fliterlist);
          }}
        >
          Search
        </button>
      </div>
      <div className="maindiv">
        {Datalist.map((data, index) => (
          <div key={index} className="list">
            <h2 className="location">{data.location}</h2>
            <p>Time:{data.timestamp}</p>
            <p>Moon Angle: {data.moon_angle}°</p>
            <p>Visibility:{data.visibility}%</p>
          </div>
        ))}
      </div>
    </>
  );
};
