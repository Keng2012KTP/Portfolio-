import "./Portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import Portfoliodata from "./Portfoliodata";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(Portfoliodata);
  const categories = Portfoliodata.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];
  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(Portfoliodata);
      return;
    }
    const filterProjects = Portfoliodata.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };
  return (
    <section id="portfolio">
      <h2 data-aos="fade-down-right">Recent Projects</h2>
      <p data-aos="fade-down-right">
        Check out some of the projects I've recently been working on. Use the
        button to toggle between the different categories.
      </p>
      <p data-aos="fade-down-right">
        I do coding every day so the section will get updated after somethings
        done.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
