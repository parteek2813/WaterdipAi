import React, { useState } from "react";
import { data, HotelData } from "../data/data.ts";
import Chart from "react-apexcharts";
import Button from "@mui/material/Button";
import Heading from "./utils/Heading.tsx";
import Selects from "../components/utils/selects.jsx";
import useSound from "use-sound";
import toggle from "../../src/assets/toggle.wav";

const VisitorsPerDay = () => {
  const [list, setList] = useState<HotelData[]>(data);
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(31);
  const [play] = useSound(toggle);

  // storing the unique days in day array
  const allDays = [
    ...new Set(list.map((item) => item.arrival_date_day_of_month)),
  ];

  // getting total number of adults+ children+ babies in each day
  const visitors = allDays.map((item) =>
    list
      .filter((filters) => filters.arrival_date_day_of_month === item)
      .reduce((acc, curr) => {
        return acc + (curr.adults + curr.children + curr.babies);
      }, 0)
  );

  // Setup for the Apex Charts
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: allDays,
    },
  };
  const series = [
    {
      name: "visitors",
      data: visitors,
    },
  ];

  const StartChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Svalue = parseInt(e.target.value);
    setStart(Svalue);
  };
  const EndChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Evalue = parseInt(e.target.value);
    setEnd(Evalue);
  };

  const HandleSubmitFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(start, end);
    if (end - start < 0) {
      alert("Invalid Range selected");
    }
    setList(
      data.filter(
        (date) =>
          date.arrival_date_day_of_month >= start &&
          date.arrival_date_day_of_month <= end
      )
    );
  };

  return (
    <div className="graph-indiv">
      <Heading heading="No. of Visitors per Day" />
      <form onSubmit={HandleSubmitFunction}>
        <Selects
          key="select3"
          id="start-date"
          label="Start Date"
          defaultValue={start}
          onChange={StartChangeDate}
        />
        <Selects
          key="select4"
          id="end-date"
          defaultValue={end}
          label="End Date"
          onChange={EndChangeDate}
        />
        <Button variant="contained" type="submit" onClick={play}>
          Filter
        </Button>
      </form>
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        className="height"
      />
    </div>
  );
};

export default VisitorsPerDay;
