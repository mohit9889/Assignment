import { useState } from "react";
import SearchSvg from "~/public/assets/Search.svg";
import CancelSvg from "~/public/assets/Cancel.svg";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  const handleClear = () => {
    setSearchText("");
    onSearch("");
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search"
        className="search-box h-[40px] w-full py-2 pl-10 pr-10 rounded bg-greyLight focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <SearchSvg />
      </span>

      {searchText && (
        <span
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          <CancelSvg />
        </span>
      )}
    </div>
  );
};

export default SearchBar;
