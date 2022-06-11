import React, { useRef } from "react";
import "./SearchBar.css";
function SearchBar(props) {
  const searchedItem = useRef();
  function onSearchHandler(event) {
    event.preventDefault();
    props.setSearch(searchedItem.current.value);
  }
  return (
    <form className="formClass" onSubmit={onSearchHandler}>
      <input
        ref={searchedItem}
        type="text"
        placeholder="Search..."
        className="inputClass"
      ></input>
      <button className="buttonClass">Search</button>
    </form>
  );
}
export default SearchBar;
