import React from "react";
import FilterContext from "../../context/FilterContext";

const allSelectedFilter = {
  text: "All",
  key: "all",
};

const FilterContextProvider = ({ filterData, children }) => {
  const [appliedFilter, setAppliedFilter] = React.useState({});
  const [modalAppliedFilter, setModalAppliedFilter] = React.useState({});
  const [openFilter, setOpenFilter] = React.useState(false);

  const defaultFilter = React.useMemo(
    () =>
      filterData.reduce(
        (initial, current) =>
          (initial = { ...initial, [current.title]: allSelectedFilter }),
        {}
      ),
    [filterData]
  );

  React.useEffect(() => {
    setAppliedFilter(defaultFilter);
    setModalAppliedFilter(defaultFilter);
  }, [defaultFilter]);

  const clearFilter = () => {
    setModalAppliedFilter(defaultFilter);
  };

  const clearAllFilter = () => {
    setModalAppliedFilter(defaultFilter);
    setAppliedFilter(defaultFilter);
  };

  const applyFilter = () => {
    setAppliedFilter(modalAppliedFilter);
    setOpenFilter(false);
  };

  const handleOpenFilter = () => {
    setModalAppliedFilter(appliedFilter);
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleChangeFilter = (list, key) => {
    setModalAppliedFilter((prevState) => ({ ...prevState, [key]: list }));
  };

  return (
    <FilterContext.Provider
      value={{
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
