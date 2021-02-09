import "./SearchBar.scss";

import { useState } from "react";
const SearchBar = ({ handleSearch }: any) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSearch(inputValue);
    return false;
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-form">
      <input
        placeholder="Ingrese una ciudad"
        className="city-search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
