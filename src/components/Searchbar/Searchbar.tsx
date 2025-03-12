import React, { useState } from "react";
import "./searchbar.css";

const Searchbar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="searchbar">
      <img src="icons/lens.svg" alt="search icon" />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="SEARCH A CHARACTER..."
      />
    </div>
  );
};

export default Searchbar;
