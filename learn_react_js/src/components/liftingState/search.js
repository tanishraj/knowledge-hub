import React from "react";

// const Search = ({ children }) => {
//   const [query, setQuery] = React.useState("");

//   const handleQuery = (event) => {
//     setQuery(event.target.value);
//   };

//   return (
//     <div>
//       {children}
//       <input type="text" value={query} onChange={handleQuery} />
//     </div>
//   );
// };

const Search = ({ query, handleQuery, children }) => (
  <div>
    {children}
    <input type="text" value={query} onChange={handleQuery} />
  </div>
);

export default Search;
