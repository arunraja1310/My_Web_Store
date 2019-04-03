import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary w-100 dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Categories
      </button>
      <ul className="dropdown-menu">
        {items.map(item => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem ? "dropdown-item active" : "dropdown-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
