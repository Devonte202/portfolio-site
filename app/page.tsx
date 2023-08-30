"use client";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { useEffect, useState } from "react";

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
    <main className="flex flex-col min-h-screen items-center justify-evenly">
      {projectList.map((project) => (
        <div key={project._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={project.thumbnail.image} alt={project.thumbnail.alt} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
            <div className="flex justify-around">
              <a href={project.repoLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Github repo
              </a>
              <a href={project.projectLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Live demo
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
