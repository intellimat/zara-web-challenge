import React from "react";
import "./searchbar.css";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  numberOfResults: number;
}

const Searchbar: React.FC<Props> = ({ query, setQuery, numberOfResults }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="searchbar">
      <div className="input-wrapper">
        <img src="icons/lens.svg" alt="search icon" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="SEARCH A CHARACTER..."
        />
      </div>
      <p className="number-of-results">{numberOfResults} RESULTS</p>
    </div>
  );
};

export default Searchbar;
