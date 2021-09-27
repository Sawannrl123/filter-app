import React from "react";

const FilterPanel = ({
  panelData,
  selectedPanelKey,
  handleChange,
  allSelectedFilter,
}) => {
  return (
    <div style={{flex:1}}>
      <h4>{panelData.title}</h4>
      <ul>
        <li
          className={selectedPanelKey.toLowerCase() === "all" ? "active" : null}
          onClick={() => handleChange(allSelectedFilter)}
        >
          All
        </li>
        {panelData.data.map((d) => (
          <li
            key={d.key}
            className={
              selectedPanelKey.toLowerCase() === d.key.toLowerCase()
                ? "active"
                : null
            }
            onClick={() => handleChange(d)}
          >
            {d.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterPanel;
