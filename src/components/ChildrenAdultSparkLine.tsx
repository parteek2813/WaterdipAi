import React, { useState } from "react";
import { data, HotelData } from "../data/data.ts";
import Chart from "react-apexcharts";
import Button from "@mui/material/Button";
import Heading from "./utils/Heading.tsx";
import Selects from "../components/utils/selects.jsx";

const ChildrenAdultSparkLine = () => {
  const [list, setList] = useState<HotelData[]>(data);
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(31);

  // storing the unique days in day array
  const Allday = [
    ...new Set(list.map((item) => item.arrival_date_day_of_month)),
  ];

  // Storing all the childrens of each month and then totaling down
  const childrens = Allday.map((item) =>
    list
      .filter((filters) => filters.arrival_date_day_of_month === item)
      .reduce((acc, curr) => {
        return acc + curr.children;
      }, 0)
  );

  // Storing all the childrens of each month and then totaling down
  const adults = Allday.map((item) =>
    list
      .filter((filters) => filters.arrival_date_day_of_month === item)
      .reduce((acc, curr) => {
        return acc + curr.adults;
      }, 0)
  );

  // setting up the options for the Apex Charts
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: Allday,
    },
  };

  // setting up the series for charts i.e [adults , children]
  const series = [
    {
      name: "adults",
      data: adults,
    },
    {
      name: "childrens",
      data: childrens,
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
      <Heading heading="No. of Adults and Childrens visiting per day" />
      <form onSubmit={HandleSubmitFunction}>
        <Selects
          id="start-date"
          label="Start Date"
          defaultValue={start}
          onChange={StartChangeDate}
        />
        <Selects
          id="end-date"
          defaultValue={end}
          label="End Date"
          onChange={EndChangeDate}
        />
        <Button variant="contained" type="submit">
          Filter
        </Button>
      </form>
      <Chart options={options} series={series} type="line" width="100%" />
    </div>
  );
};

export default ChildrenAdultSparkLine;
