import React, { useState } from "react";
import { data, HotelData } from "../data/data.ts";
import Chart from "react-apexcharts";
import Button from "@mui/material/Button";

interface Props {
  hotelData: HotelData[];
}

const VisitorsPerDay: React.FC<Props> = ({ hotelData }) => {
  const [list, setList] = useState<HotelData[]>(data);
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(31);

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

  const StartChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Svalue = parseInt(e.target.value);
    setStart(Svalue);
  };
  const EndChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Evalue = parseInt(e.target.value);
    setStart(Evalue);
  };

  const HandleSubmitFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return <div>VisitorsPerDay</div>;
};

export default VisitorsPerDay;
