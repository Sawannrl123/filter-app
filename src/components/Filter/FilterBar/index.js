import React from "react";
import Button from "@mui/material/Button";
import useFilter from "../../../hooks/useFilter";

const FilterBar = () => {
  const { appliedFilter, handleOpenFilter, clearAllFilter } = useFilter();
  const makeFilterString = React.useMemo(() => {
    const titles = Object.keys(appliedFilter);
    return titles.reduce(
      (initial, current) =>
        (initial = initial
          ? `${initial} | ${current}: ${appliedFilter[current].text}`
          : `${current}: ${appliedFilter[current].text}`),
      ""
    );
  }, [appliedFilter]);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpenFilter}>
        Open Filter Modal
      </Button>
      <p>{makeFilterString}</p>
      <Button variant="outlined" onClick={clearAllFilter}>
        Clear Filter
      </Button>
    </div>
  );
};

export default FilterBar;
