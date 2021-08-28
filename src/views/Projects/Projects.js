import React, { useState, useEffect } from 'react';
// PROJECTS DATA
import { projects } from 'data/projectsData';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, headerAnimation, slide } from 'assets/animations/animation';
// STYLES
import {
  Wrapper,
  ProjectsSliderWrapper,
  Project,
  ProjectImage,
  ProjectTitle,
  SliderInfoWrapper,
  IsSliderLockedInfo,
  Header,
} from './Projects.styles';

const Projects = () => {
  const [element, controls] = useScroll();

  const [clock, setClock] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  let [current, setCurrent] = useState(0);
  let [next, setNext] = useState(projects.length - 1);
  let [prev, setPrev] = useState(current + 1);

  let toggleInterval = false;

  const slider = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
    setNext(next === projects.length - 1 ? 0 : next + 1);
    setPrev(prev === projects.length - 1 ? 0 : prev + 1);
  };

  const fireSlider = () => {
    if (isLocked) {
      return;
    }
    toggleInterval = setInterval(() => {
      setClock(clock + 1);
    }, 2500);
    slider();
  };

  useEffect(() => {
    fireSlider();
    return () => clearTimeout(toggleInterval);
  }, [clock]);

  const projectHandler = (index) => {
    if (index === current) {
    } else if (next === index) {
      setIsLocked(true);
      setCurrent(current === 0 ? (current = projects.length - 1) : current - 1);
      setNext(next === 0 ? (next = projects.length - 1) : next - 1);
      setPrev(prev === 0 ? (prev = projects.length - 1) : prev - 1);
    } else if (prev === index) {
      setIsLocked(true);
      setCurrent(current === projects.length - 1 ? 0 : current + 1);
      setNext(next === projects.length - 1 ? 0 : next + 1);
      setPrev(prev === projects.length - 1 ? 0 : prev + 1);
    }
  };

  return (
    <Wrapper variants={fade} animate={controls} initial='hidden' ref={element}>
      {/* <Header variants={headerAnimation}>MY PROJECTS</Header> */}
      <ProjectsSliderWrapper>
        {projects.map((project, index) => (
          <Project
            className={`${current === index && 'show'} ${next === index && 'next'} ${prev === index && 'prev'}`}
            id='active'
            onClick={() => {
              projectHandler(index);
            }}
          >
            <ProjectImage src={project.image} />
            <ProjectTitle className={index === current && 'show'}>{project.title}</ProjectTitle>
          </Project>
        ))}
        <SliderInfoWrapper variants={slide}>
          <p>
            <strong>Click</strong> on projects to interact.
          </p>
        </SliderInfoWrapper>
        <IsSliderLockedInfo variants={slide}>
          <p>
            Slider <strong>{!isLocked ? 'unlocked' : 'locked'}</strong>
          </p>
        </IsSliderLockedInfo>
      </ProjectsSliderWrapper>
    </Wrapper>
  );
};

export default Projects;
