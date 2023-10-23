import React from "react";

const CategoryButton = ({ category, className, onChangeCategory }) => {
  return (
    <button onClick={() => onChangeCategory(category)} className={className}>
      {category}
    </button>
  );
};

export default CategoryButton;
