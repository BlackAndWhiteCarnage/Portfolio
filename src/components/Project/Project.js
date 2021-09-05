import React from 'react';
// ICONS
import link from 'assets/icons/link-icon.svg';
import github from 'assets/icons/github-icon.svg';
// STYLES
import { ProjectWrapper, ProjectImage, ProjectTitle, ProjectLinksWrapper, Links } from './Project.styles';

const Project = ({ current, index, next, prev, project, toggleProjectModalHandler, projectHandler, viewProject }) => {
  return (
    <ProjectWrapper className={`${current === index && 'show'} ${next === index && 'next'} ${prev === index && 'prev'}`} id='active'>
      <ProjectImage
        src={project.image}
        className={current === index && viewProject && 'previewProject'}
        onClick={() => {
          if (index === current) {
            toggleProjectModalHandler(project);
            projectHandler(index);
          } else {
            projectHandler(index);
          }
        }}
      />
      <ProjectTitle className={index === current && 'show'}>{project.title}</ProjectTitle>
      <ProjectLinksWrapper className={index === current && 'show'}>
        <Links id='active' target='_blank' href={project.live}>
          <img src={link} />
        </Links>
        <Links id='active' target='_blank' href={project.repo}>
          <img src={github} />
        </Links>
      </ProjectLinksWrapper>
    </ProjectWrapper>
  );
};

export default Project;
