import CategoryButton from "./CategoryButton";
import { useState } from "react";

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setactiveCategory] = useState("all");
  const changeCategoryHandler = (activeCat) => {
    setactiveCategory(activeCat);
    onFilterProjects(activeCat);
  };
  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          className={`btn cat__btn ${
            activeCategory === category ? "primary" : "white"
          } `}
          onChangeCategory={() => changeCategoryHandler(category)}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
