import React from "react";
import Search from "./search";
import List from "./list";

// const SearchableList = ({ list }) => (
//   <div>
//     <Search>Search List:</Search>
//     <List list={list} />
//   </div>
// );

const SearchableList = ({ list }) => {
  const [query, setQuery] = React.useState("");

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const byQuery = (query) => (item) =>
    !query || item.name.toLowerCase().includes(query.toLowerCase());

  const filteredList = list.filter(byQuery(query));

  return (
    <div>
      <Search query={query} handleQuery={handleQuery}>
        Search List:
      </Search>
      {/* <List list={list} /> */}
      <List list={filteredList} />
    </div>
  );
};

export default SearchableList;
