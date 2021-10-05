import React from "react";

const MONTHS = [
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
];
const YEARS = [2020, 2021, 2022];

const useCalender = () => {
  const [selectedMonth, setSeletedMonth] = React.useState(0);
  const [selectedYear, setSeletedYear] = React.useState(0);

  const handleNext = () => {
    setSeletedYear(prevState => prevState + 1)
  }

  const handleBack = () => {
    setSeletedYear(prevState => prevState - 1)
  }

  const handleYearChange = (e) => {
    setSeletedYear(parseInt(e.target.value))
  }

  const handleMonthChange = (value) => {
    setSeletedMonth(value)
  }

  return [
    handleNext,
    handleBack,
    handleYearChange,
    handleMonthChange,
    selectedMonth,
    selectedYear,
    MONTHS[selectedMonth],
    YEARS[selectedYear],
    YEARS,
    MONTHS
  ]
};

export default useCalender;
