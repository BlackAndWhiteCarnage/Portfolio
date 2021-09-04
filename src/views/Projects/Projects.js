import React, { useState, useEffect } from 'react';
// PROJECTS DATA
import { projects } from 'data/projectsData';
// COMPONENTS
import Project from 'components/Project/Project';
import SliderInfo from 'components/SliderInfo/SliderInfo';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide } from 'assets/animations/animation';
// STYLES
import { Wrapper, ProjectsSliderWrapper, StyledLink } from './Projects.styles';

const Projects = ({ viewProject }) => {
  const [element, controls] = useScroll();

  const [clock, setClock] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  let [current, setCurrent] = useState(0);
  let [next, setNext] = useState(projects.length - 1);
  let [prev, setPrev] = useState(current + 1);

  const [isLoaded, setIsLoaded] = useState(false);

  let toggleInterval = false;

  const slider = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
    setNext(next === projects.length - 1 ? 0 : next + 1);
    setPrev(prev === projects.length - 1 ? 0 : prev + 1);
  };

  const projectHandler = (index) => {
    setIsLocked(true);

    if (next === index) {
      setIsLocked(true);
      setIsLoaded(false);
      setCurrent(current === 0 ? (current = projects.length - 1) : current - 1);
      setNext(next === 0 ? (next = projects.length - 1) : next - 1);
      setPrev(prev === 0 ? (prev = projects.length - 1) : prev - 1);
    } else if (prev === index) {
      setIsLocked(true);
      setIsLoaded(false);
      setCurrent(current === projects.length - 1 ? 0 : current + 1);
      setNext(next === projects.length - 1 ? 0 : next + 1);
      setPrev(prev === projects.length - 1 ? 0 : prev + 1);
    }
  };

  const fireSlider = () => {
    if (isLocked) {
      return;
    }
    toggleInterval = setInterval(() => {
      setClock(clock + 1);
    }, 3000);
    slider();
  };

  useEffect(() => {
    fireSlider();
    return () => clearTimeout(toggleInterval);
  }, [clock]);

  let startX, moveX;

  const touchStartHandler = (e) => {
    startX = e.touches[0].clientX;
  };

  const touchMoveHandler = (e) => {
    moveX = e.touches[0].clientX;
  };

  const touchEndHandler = () => {
    if (startX + 80 < moveX) {
      setIsLocked(true);
      setIsLoaded(false);
      setCurrent(current === projects.length - 1 ? 0 : current + 1);
      setNext(next === projects.length - 1 ? 0 : next + 1);
      setPrev(prev === projects.length - 1 ? 0 : prev + 1);
    } else if (startX - 80 > moveX) {
      setIsLocked(true);
      setIsLoaded(false);
      setCurrent(current === 0 ? (current = projects.length - 1) : current - 1);
      setNext(next === 0 ? (next = projects.length - 1) : next - 1);
      setPrev(prev === 0 ? (prev = projects.length - 1) : prev - 1);
    }
  };

  return (
    <Wrapper
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
      id='PROJECTS'
    >
      <ProjectsSliderWrapper>
        {projects.map((project, index) => (
          <>
            <StyledLink to={`/projects/${project.routeId}`} className={current === index && 'show'} />
            <Project
              current={current}
              index={index}
              next={next}
              prev={prev}
              project={project}
              viewProject={viewProject}
              projectHandler={projectHandler}
            />
          </>
        ))}
        <SliderInfo slide={slide} isLocked={isLocked} />
      </ProjectsSliderWrapper>
<<<<<<< HEAD
      <PreviewProject isLoaded={isLoaded} setIsLoaded={setIsLoaded} viewProject={viewProject} />
      <PageTransition toggle={viewProject.isToggled} />
=======
>>>>>>> 8c7146a75111aee1aa11f21e51f306c34ba23e90
    </Wrapper>
  );
};

export default Projects;
