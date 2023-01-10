import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value.trim());
  };
  // const handleClick = (e) => {
  //   e.preventDefault();
  // };

  return (
    <SearchContext.Provider value={{ searchText, setSearchText, handleChange }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
