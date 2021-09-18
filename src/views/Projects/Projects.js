import React, { useState } from 'react';
import PropTypes from 'prop-types';
// PROJECTS DATA
import { projects } from 'data/projectsData';
// COMPONENTS
import Project from 'components/Project/Project';
import PreviewProject from 'components/PreviewProject/PreviewProject';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { slide } from 'assets/animations/animation';
// STYLES
import { Wrapper, ProjectsSliderWrapper } from './Projects.styles';

const Projects = ({ viewProject, setViewProject }) => {
  const [element, controls] = useScroll();
  const [blockClick, setBlockClick] = useState(false);

  let [current, setCurrent] = useState(0);
  let [next, setNext] = useState(projects.length - 1);
  let [prev, setPrev] = useState(current + 1);

  let startX, moveX;

  const touchStartHandler = (e) => {
    startX = e.touches[0].clientX;
  };

  const touchMoveHandler = (e) => {
    moveX = e.touches[0].clientX;
  };

  const projectSliderHandler = (index) => {
    if (next === index || startX - 80 > moveX) {
      setCurrent(current === 0 ? (current = projects.length - 1) : current - 1);
      setNext(next === 0 ? (next = projects.length - 1) : next - 1);
      setPrev(prev === 0 ? (prev = projects.length - 1) : prev - 1);
    } else if (prev === index || startX + 80 < moveX) {
      setCurrent(current === projects.length - 1 ? 0 : current + 1);
      setNext(next === projects.length - 1 ? 0 : next + 1);
      setPrev(prev === projects.length - 1 ? 0 : prev + 1);
    }
  };

  const toggleProjectModalHandler = () => {
    setViewProject(!viewProject);
  };

  const blockClickingHanlder = () => {
    if (blockClick) {
      return;
    }
    setBlockClick(true);
    setTimeout(() => {
      setBlockClick(false);
    }, 250);
  };

  return (
    <Wrapper
      variants={slide}
      animate={controls}
      initial='hidden'
      ref={element}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={projectSliderHandler}
      id='PROJECTS'
    >
      <ProjectsSliderWrapper>
        {projects.map((project, index) => (
          <Project
            key={index}
            current={current}
            index={index}
            next={next}
            prev={prev}
            project={project}
            toggleProjectModalHandler={toggleProjectModalHandler}
            projectSliderHandler={projectSliderHandler}
            blockClickingHanlder={blockClickingHanlder}
            blockClick={blockClick}
          />
        ))}
        {/* <SliderInfo slide={slide} isLocked={isLocked} /> */}
        <PreviewProject
          viewProject={viewProject}
          projects={projects}
          current={current}
          next={next}
          prev={prev}
          projectSliderHandler={projectSliderHandler}
        />
      </ProjectsSliderWrapper>
    </Wrapper>
  );
};

Projects.propTypes = {
  viewProject: PropTypes.bool.isRequired,
  setViewProject: PropTypes.func.isRequired,
};

export default Projects;
