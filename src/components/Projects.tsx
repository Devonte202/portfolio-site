import React, {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "@/types";
import { getProjects } from "@/sanity/sanity.query";

export default function Projects() {

  const [projectList, setProjectList] = useState<ProjectType[]>([]);

  const renderProjects = async () => {
    const projects: ProjectType[] = await getProjects();
    setProjectList(projects)
  }

  useEffect(() => {
    renderProjects()
  }, [])

  return (
    <div className="project-section">
      <h2 className="project-section_title">Projects</h2>
      <div className="project-section_projects">
        {projectList.map((project: ProjectType) => (<ProjectCard key={project._id} project={project}/>))}
      </div>
      <style jsx global>{`
        .project-section {
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 30px;
        }

        .project-section_title {
          font-family: Inter;
          color: #444;
          font-size: 72px;
          margin-top: 0px;
          margin-bottom: 30px;
        }

        .project-section_projects {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 10px;
        }

        @media (min-width: 744px) {
          .project-section_projects {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (min-width: 1280px) {
          .project-section_projects {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }
        }
      `}</style>
    </div>
  )
}