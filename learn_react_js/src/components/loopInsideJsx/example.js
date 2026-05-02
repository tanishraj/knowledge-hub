import React from "react";
import List from "./list";

const Example = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((item) => {
          return <List key={item.id} item={item} />;
        })}
      </ul>

      {/* 
      <hr />
      // For Loop is not possible to use
      <ul>
        {
          for(let i = 0; i < list.length; i++) {
            return {<List key={list[i].id} item={list[i].name} />};
          }
        }
      </ul> */}
    </>
  );
};

export default Example;
