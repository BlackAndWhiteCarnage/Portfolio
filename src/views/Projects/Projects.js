import React, { useState, useEffect } from 'react';
// PROJECTS DATA
import { projects } from 'data/projectsData';
// COMPONENTS
import Slider from 'components/Slider/Slider';
// HELPERS
import { useScroll } from 'helpers/useScroll';
import link from 'assets/icons/link-icon.svg';
import github from 'assets/icons/github-icon.svg';
// ANIMATIONS
import { fade, slide } from 'assets/animations/animation';
// STYLES
import {
  Wrapper,
  ProjectsSliderWrapper,
  Project,
  ProjectImage,
  ProjectTitle,
  SliderInfoWrapper,
  IsSliderLockedInfo,
  Links,
  ProjectLinksWrapper,
  PreviewProjectWrapper,
} from './Projects.styles';

const Projects = ({ viewProject, setViewProject }) => {
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
    }, 3000);
    slider();
  };

  useEffect(() => {
    fireSlider();
    return () => clearTimeout(toggleInterval);
  }, [clock]);

  const projectHandler = (index) => {
    setIsLocked(true);

    if (next === index) {
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
      setCurrent(current === projects.length - 1 ? 0 : current + 1);
      setNext(next === projects.length - 1 ? 0 : next + 1);
      setPrev(prev === projects.length - 1 ? 0 : prev + 1);
    } else if (startX - 80 > moveX) {
      setIsLocked(true);
      setCurrent(current === 0 ? (current = projects.length - 1) : current - 1);
      setNext(next === 0 ? (next = projects.length - 1) : next - 1);
      setPrev(prev === 0 ? (prev = projects.length - 1) : prev - 1);
    }
  };

  const toggleProjectModalHandler = (project) => {
    setViewProject(project);
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
      <ProjectsSliderWrapper className={viewProject && 'previewProject'}>
        {projects.map((project, index) => (
          <Project
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
      <PreviewProjectWrapper className={viewProject && 'show'} onClick={() => toggleProjectModalHandler(false)}>
        projects...
      </PreviewProjectWrapper>
      <Slider toggle={viewProject} />
    </Wrapper>
  );
};

export default Projects;
