import React from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { isEmpty } from "lodash";
import FilterPanel from "../FilterPanel";
import useFilter from "../../../hooks/useFilter";

const FilterModal = ({ filterData }) => {
  const {
    openFilter,
    handleCloseFilter,
    allSelectedFilter,
    handleChangeFilter,
    modalAppliedFilter,
    applyFilter,
    clearFilter,
  } = useFilter();
  return (
    <Dialog fullWidth open={openFilter} onClose={handleCloseFilter}>
      <DialogTitle>Optional sizes</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText>
        <Box display="flex">
          {filterData.map((fd) => (
            <FilterPanel
              panelData={fd}
              selectedPanelKey={
                !isEmpty(modalAppliedFilter) ? modalAppliedFilter[fd.title].key : ""
              }
              handleChange={(list) => handleChangeFilter(list, fd.title)}
              allSelectedFilter={allSelectedFilter}
              key={fd.title}
            />
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseFilter}>Close</Button>
        <Button onClick={clearFilter}>Clear Selection</Button>
        <Button onClick={applyFilter}>Apply & Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterModal;
