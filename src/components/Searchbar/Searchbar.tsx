import React from "react";
import styles from "./searchbar.module.css";

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
    <div data-testid="searchbar">
      <div className={styles.inputWrapper}>
        <img
          className={styles.searchIcon}
          src="icons/lens.svg"
          alt="search icon"
        />
        <input
          type="text"
          className={styles.textInput}
          value={query}
          onChange={handleInputChange}
          placeholder="SEARCH A CHARACTER..."
        />
      </div>
      <p className={styles.numberOfResults}>{numberOfResults} RESULTS</p>
    </div>
  );
};

export default Searchbar;
