import React, { useState } from "react";
import { data, HotelData } from "../data/data.ts";

export const VisitorsPerCountry = () => {
  const [list, setList] = useState<HotelData[]>(data);
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(31);

  // Storing Each Unique Country in the Set
  const AllCountries = [...new Set(list.map((item) => item.country))];

  // calculate the total number of visitors per country [adults + children + babies]
  const visitors = AllCountries.map((item) =>
    list
      .filter((filters) => filters.country === item)
      .reduce((acc, curr) => {
        return acc + (curr.adults + curr.children + curr.babies);
      }, 0)
  );

  // setting up the options for the Apex Charts
  const options = {
    chart: {
      id: "basic-bar",
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        vertical: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#333"],
      },
      offsetY: -20,
    },
    xaxis: {
      categories: AllCountries,
    },
  };

  return <div>VisitorsPerCountry</div>;
};
