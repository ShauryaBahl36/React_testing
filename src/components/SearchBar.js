import React from "react";

const SearchBar = ({ onSearch }) => {
    return (
        <input type="text"
        placeholder="Search books..."
        onChange={(e) => onSearch (e.target.value)}
        style={{ margin: "10px", padding: "5px", width: "300px" }}
        />
    );
}

export default SearchBar;