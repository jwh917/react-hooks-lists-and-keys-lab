import React from "react";

function ProjectItem({ name, about, technologies }) {
  // console.log(name)
  // console.log(about)
  // console.log(technologies)

  function TechnologiesItem({technologies}) {
    return <span key={technologies}>{technologies}</span>
  }
  
  // const projectTechnologies = technologies.map((technologie) => {
  //   console.log(technologie)
  //   return <span key={technologie}>{technologie}</span>
  // });

  const projectTechnologies = technologies.map((technologie) => {
    return <TechnologiesItem key={technologie} technologies={technologie}/>
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {projectTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
