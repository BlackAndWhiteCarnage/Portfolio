import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from 'data/projectsData';

export const Wrapper = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProjectsSliderWrapper = styled.div`
  position: relative;
  height: 450px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export const Project = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  left: -100%;
  transition: 0.5s ease;
  transform: scale(0);
  h1 {
    font-size: 60px;
  }
  &.show {
    transition: 0.5s ease;
    transform: scale(1);
    opacity: 1;
    left: 0;
  }
  &.next {
    transition: 0.5s ease;
    opacity: 0.2;
    transform: scale(0.5);
    left: 100%;
  }
  &.prev {
    transition: 0.5s ease;
    opacity: 0.2;
    transform: scale(0.5);
    left: -100%;
  }
`;

const Projects = () => {
  const [clock, setClock] = useState(0);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(projects.length - 1);
  const [prev, setPrev] = useState(current + 1);

  let toggleInterval = false;

  const slider = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
    setNext(next === projects.length - 1 ? 0 : next + 1);
    setPrev(prev === projects.length - 1 ? 0 : prev + 1);
  };

  const fireSlider = () => {
    toggleInterval = setInterval(() => {
      setClock(clock + 1);
    }, 3000);
    slider();
  };

  useEffect(() => {
    fireSlider();
    return () => clearTimeout(toggleInterval);
  }, [clock]);

  return (
    <Wrapper>
      <ProjectsSliderWrapper>
        {projects.map((project, index) => (
          <Project className={`${current === index && 'show'} ${next === index && 'next'} ${prev === index && 'prev'}`}>
            <h1>{project.name}</h1>
          </Project>
        ))}
      </ProjectsSliderWrapper>
    </Wrapper>
  );
};

export default Projects;
