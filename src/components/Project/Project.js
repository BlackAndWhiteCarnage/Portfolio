import React from 'react';
// ICONS
import link from 'assets/icons/link-icon.svg';
import github from 'assets/icons/github-icon.svg';
// STYLES
import { ProjectWrapper, ProjectImage, ProjectTitle, ProjectLinksWrapper, Links } from './Project.styles';

const Project = ({ current, index, next, prev, project, toggleProjectModalHandler, projectHandler, viewProject }) => {
  return (
    <ProjectWrapper
      className={`${current === index && 'show'} ${next === index && 'next'} ${prev === index && 'prev'}`}
      id='active'
      onClick={() => {
        if (index === current) {
          toggleProjectModalHandler(project);
          projectHandler(index);
        } else {
          projectHandler(index);
        }
      }}
    >
      <ProjectImage src={project.image} className={current === index && viewProject && 'previewProject'} />
      <ProjectTitle className={index === current && 'show'}>{project.title}</ProjectTitle>
      <ProjectLinksWrapper className={index === current && 'show'}>
        <Links>
          <img src={link} />
        </Links>
        <Links>
          <img src={github} />
        </Links>
      </ProjectLinksWrapper>
    </ProjectWrapper>
  );
};

export default Project;
