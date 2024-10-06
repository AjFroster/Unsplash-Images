import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchValue = e.target.elements.search.value;
    if (!searchValue) return;

    console.log(searchValue);
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Search Form</h1>
      <form className="serach-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        ></input>
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
