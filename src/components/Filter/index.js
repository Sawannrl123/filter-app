import React from "react";
import FilterBar from "./FilterBar";
import FilterModal from "./FilterModal";
import FilterContextProvider from "../contextProvider/FilterContextProvider";

const Filter = ({ filterData }) => {
  return (
    <FilterContextProvider filterData={filterData}>
      <div>
        <p>Filter</p>
        <FilterBar />
        <FilterModal filterData={filterData} />
      </div>
    </FilterContextProvider>
  );
};

export default Filter;
