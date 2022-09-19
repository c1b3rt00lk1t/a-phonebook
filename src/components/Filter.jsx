import React from "react";

const Filter = ({ handleInputFilterName, filterName }) => {
  return (
    <div>
      filter shown with{" "}
      <input onChange={handleInputFilterName} value={filterName} />
    </div>
  );
};

export default Filter;
