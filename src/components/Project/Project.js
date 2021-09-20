import React from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import ProjectLinks from 'components/ProjectLinks/ProjectLinks';
// STYLES
import { ProjectWrapper, ProjectImage } from './Project.styles';

const Project = ({
  current,
  index,
  next,
  prev,
  project,
  toggleProjectModalHandler,
  projectSliderHandler,
  blockClickingHanlder,
  blockClick,
  isEnglish,
}) => {
  const isClickBlockedHandler = (key) => {
    if (key) {
      if (index !== current) {
        blockClickingHanlder();
      }
      projectSliderHandler(index);
    } else {
      if (index === current && !blockClick) {
        toggleProjectModalHandler();
      }
    }
  };

  return (
    <ProjectWrapper
      className={`${current === index && 'show'} ${next === index && 'next'} ${prev === index && 'prev'}`}
      id='active'
      onClick={() => {
        isClickBlockedHandler(true);
      }}
    >
      <ProjectImage
        id='active'
        src={!isEnglish ? project.projectPoster : project.projectPosterPL}
        onClick={() => {
          isClickBlockedHandler(false);
        }}
      />
      <ProjectLinks index={index} current={current} project={project} />
    </ProjectWrapper>
  );
};

Project.propTypes = {
  current: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  next: PropTypes.number.isRequired,
  prev: PropTypes.number.isRequired,
  project: PropTypes.object.isRequired,
  toggleProjectModalHandler: PropTypes.func.isRequired,
  projectSliderHandler: PropTypes.func.isRequired,
  blockClickingHanlder: PropTypes.func.isRequired,
  blockClick: PropTypes.bool.isRequired,
};

export default Project;
