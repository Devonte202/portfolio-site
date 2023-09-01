"use client";
import type { ProjectType } from "../../types";

export default function ProjectCard(props: { project: ProjectType }) {
  const { project } = props
  return (
    <>
      <div className="project-card">
        <img className="project-card_thumbnail" src={project.thumbnail.image} alt={project.thumbnail.alt} />
        <div className="project-card_body">
          <div className="project-card_title">{project.title}</div>
          <p className="project-card_description">
            {project.description}
          </p>
        </div>
        <div className="project-card_cta-wrapper">
          <a href={project.repoLink} className="project-card_cta">
            Github repo
          </a>
          <a href={project.projectLink} className="project-card_cta">
            Live demo
          </a>
        </div>
        <div className="project-card_tech-section">
          {project.techList.map((item) => (
            <span key={item} className="project-card_bubble">{item}</span>
          ))}
        </div>
      </div>
      <style jsx global>
        {`
          .project-card {
            font-family: 'Open Sans', sans-serif;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            display: inline-block;
            position: relative;
            width: 400px;
            min-width: 400px;
            border-radius: 30px;
            box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
            margin: 30px;
            padding: 20px;
          }

          .project-card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }

          .project-card_thumbnail {
            width: 100%;
          }
          .project-card_cta {
            align-items: center;
            background-color: initial;
            background-image: linear-gradient(#464d55, #25292e);
            border-radius: 8px;
            border-width: 0;
            box-shadow: 0 10px 20px rgba(0, 0, 0, .1),0 3px 6px rgba(0, 0, 0, .05);
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            display: inline-flex;
            flex-direction: column;
            font-size: 18px;
            height: 42px;
            justify-content: center;
            line-height: 1;
            margin: 0;
            outline: none;
            overflow: hidden;
            padding: 0 32px;
            text-align: center;
            text-decoration: none;
            transform: translate3d(0, 0, 0);
            transition: all 150ms;
            vertical-align: baseline;
            white-space: nowrap;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }

          .project-card_cta:hover {
            box-shadow: rgba(0, 1, 0, .2) 0 2px 8px;
            opacity: .85;
          }

          .project-card_cta:active {
            outline: 0;
          }

          .project-card_cta:focus {
            box-shadow: rgba(0, 0, 0, .5) 0 0 0 3px;
          }

          @media (max-width: 420px) {
            .project-card_cta {
              height: 48px;
            }
          }
        `}
      </style>
    </>
  )
}
