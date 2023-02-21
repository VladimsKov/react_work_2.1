import { useState } from "react";
import './css/portfolio.css';
import Toolbar from "./components/Toolbar";
import { projectsData } from "./projectsData";
import ProjectList from "./components/ProjectList";

export default function Portfolio() {
  const [selected, setSelected] = useState('All');
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const onSelectFilter = (filter) => setSelected(filter);
  let projects = projectsData;
  if (selected !== 'All') {
    projects = projectsData.filter(el => el.category === selected);
  }
  return (
    <div className="container">
      <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
      <ProjectList projects={projects} />
    </div>
  )
}