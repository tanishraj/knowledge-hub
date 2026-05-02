import React from "react";

const List = ({ item }) => {
  return (
    <>
      <li key={item.id}>{item.name}</li>
    </>
  );
};

export default List;
