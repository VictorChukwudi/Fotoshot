import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import searchIcon from "../images/searchwhite.png";

const SearchCategories = (props) => {
  const { searchText, handleChange } = useContext(SearchContext);
  const buttonStyle = searchText ? "darkslategray" : "whitesmoke";

  const handleSearch = (e) => {
    e.preventDefault();
    props.searchState({
      state: true,
      text: searchText,
    });
  };
  const mountains = () => {
    props.category("mountains");
  };
  const beaches = () => {
    props.category("beaches");
  };
  const birds = () => {
    props.category("birds");
  };
  const foods = () => {
    props.category("foods");
  };

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

        <button style={{ backgroundColor: buttonStyle }} onClick={handleSearch}>
          <Link to="/search">
            <img src={searchIcon} alt="" width="21px" />
          </Link>
        </button>
      </div>

      <ul className="sc--categories">
        <Link to="/mountains" onClick={mountains}>
          mountains
        </Link>
        <Link to="/beaches" onClick={beaches}>
          beaches
        </Link>
        <Link to="/birds" onClick={birds}>
          birds
        </Link>
        <Link to="/foods" onClick={foods}>
          foods
        </Link>
      </ul>
    </div>
  );
};

export default SearchCategories;
