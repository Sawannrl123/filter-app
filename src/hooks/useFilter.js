import React from "react";
import FilterContext from "../context/FilterContext";

const useFilter = () => {
  const {
    appliedFilter,
    handleChangeFilter,
    defaultFilter,
    clearFilter,
    openFilter,
    handleOpenFilter,
    handleCloseFilter,
    allSelectedFilter,
    modalAppliedFilter,
    applyFilter,
    clearAllFilter,
  } = React.useContext(FilterContext);  

  return {
    appliedFilter,
    handleChangeFilter,
    defaultFilter,
    clearFilter,
    openFilter,
    handleOpenFilter,
    handleCloseFilter,
    allSelectedFilter,
    modalAppliedFilter,
    applyFilter,
    clearAllFilter,
  };
};

export default useFilter;
