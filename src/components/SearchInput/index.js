import React from "react";

const SearchInput = ({ value, onChange }) => {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <input
      style={{
        width: "400px",
        padding: "4px",
        marginTop: "20px",
      }}
      onChange={handleChange}
      value={value}
      type="search"
      placeholder="character"
    />
  );
};
export default SearchInput;
