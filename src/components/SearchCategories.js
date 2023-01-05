import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import searchIcon from "../images/searchwhite.png";

const SearchCategories = () => {
  const { searchText, handleChange, handleClick } = useContext(SearchContext);
  const buttonStyle = searchText ? "darkslategray" : "whitesmoke";
  return (
    <div className="sc container">
      <div className="sc--search">
        <input
          type="text"
          placeholder="Search"
          className="sc--bar"
          name="searchText"
          onChange={handleChange}
          value={searchText}
        />
        <button style={{ backgroundColor: buttonStyle }} onClick={handleClick}>
          <img src={searchIcon} alt="" width="21px" />
        </button>
      </div>

      <ul className="sc--categories">
        <li value={"Mountains"}>Mountains</li>
        <li value={"Beaches"}>Beaches</li>
        <li value={"Birds"}>Birds</li>
        <li value={"Food"}>Food</li>
      </ul>
    </div>
  );
};

export default SearchCategories;
