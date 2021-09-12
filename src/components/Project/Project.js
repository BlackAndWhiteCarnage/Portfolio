import React, { useState, useEffect } from 'react';
// ICONS
import link from 'assets/icons/link-icon.svg';
import github from 'assets/icons/github-icon.svg';
// STYLES
import { ProjectWrapper, ProjectImage, ProjectLinksWrapper, Links } from './Project.styles';

const Project = ({
  current,
  index,
  next,
  prev,
  project,
  toggleProjectModalHandler,
  projectHandler,
  viewProject,
  blockClickingHanlder,
  blockClick,
}) => {
  return (
    <ProjectWrapper
      className={`${current === index && 'show'} ${next === index && 'next'} ${prev === index && 'prev'}`}
      id='active'
      onClick={() => {
        blockClickingHanlder();
        projectHandler(index);
      }}
    >
      <ProjectImage
        id='active'
        src={project.image}
        onClick={() => {
          if (index === current && !blockClick) {
            toggleProjectModalHandler(project);
          } else {
            console.log('ADDASDAS');
          }
        }}
      />
      <ProjectLinksWrapper className={index === current && 'show'}>
        <Links id='active' target='_blank' href={project.live}>
          <img src={link} id='active' />
        </Links>
        <Links id='active' target='_blank' href={project.repo}>
          <img src={github} id='active' />
        </Links>
      </ProjectLinksWrapper>
    </ProjectWrapper>
  );
};

export default Project;
