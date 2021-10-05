import React from "react";
import useCalender from "../../hooks/useCalender";

const Calender = ({ handleChange }) => {
  const [
    handleNext,
    handleBack,
    handleYearChange,
    handleMonthChange,
    selectedMonth,
    selectedYear,
    month,
    year,
    YEARS,
    MONTHS
  ] = useCalender();

  React.useEffect(() => {
    const changedData = {
      month,
      year
    }
    handleChange(changedData);
  }, [month, year, handleChange])

  return (
    <div className="calender">
      <div className="calenderHeader">
        <button disabled={selectedYear === 0} onClick={handleBack}>{"<<"}</button>
        <select onChange={handleYearChange} value={selectedYear}>
          {YEARS.map((year, i) => (
            <option key={year} value={i}>
              {year}
            </option>
          ))}
        </select>
        <button disabled={selectedYear === YEARS.length - 1} onClick={handleNext}>{">>"}</button>
      </div>
      <div className="calenderBody">
        <ul className="calenderMonthList">
          {MONTHS.map((month, i) => (
            <li
              key={month}
              className={
                i === selectedMonth
                  ? "calenderMonthItem calenderMonthActive"
                  : "calenderMonthItem"
              }
            >
              <button onClick={() => handleMonthChange(i)}>{month}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calender;
