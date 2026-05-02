import React from "react";

const List = ({ list }) => {
  // Part of lifting state down
  const [archivedItems, setArchivedItems] = React.useState([]);

  const handleArchive = (id) => {
    setArchivedItems((archivedItems) => [...archivedItems, id]);
  };

  const byArchived = (archivedItems) => (item) =>
    !archivedItems.includes(item.id);

  return (
    <ul>
      {list.filter(byArchived(archivedItems)).map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>
            <button type="button" onClick={() => handleArchive(item.id)}>
              Archive
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default List;
