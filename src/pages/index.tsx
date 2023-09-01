"use client";
import { getProjects } from "../../sanity/sanity.query";
import type { ProjectType } from "../../types";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);

  const renderProjects = async () => {
    const projects: ProjectType[] = await getProjects();
    setProjectList(projects)
  }

  useEffect(() => {
    renderProjects()
  }, [])

  return (
    <main className="main">
      {projectList.map((project: ProjectType) => (<ProjectCard key={project._id} project={project}/>))}
    </main>
  )
}
