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
  justify-content: center;
  max-width: 1200px;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export const Project = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  left: 0;
  transition: 0.5s ease;
  transform: scale(0);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  &.show,
  &.next,
  &.prev {
    cursor: pointer;
    transition: 0.5s ease;
  }
  &.show {
    transform: scale(1);
    opacity: 1;
    left: 0;
  }
  &.next {
    opacity: 0.2;
    transform: scale(0.5);
    left: 100%;
  }
  &.prev {
    opacity: 0.2;
    transform: scale(0.5);
    left: -100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  pointer-events: none;
`;

const ProjectTitle = styled.h2`
  position: absolute;
  top: 0;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  pointer-events: none;
  text-transform: uppercase;
  opacity: 0;
  transition: 0.5s ease;
  &.show {
    top: -80px;
    transition: 0.8s ease;
    opacity: 1;
  }
`;

const Projects = () => {
  const [clock, setClock] = useState(0);
  let [current, setCurrent] = useState(0);
  let [next, setNext] = useState(projects.length - 1);
  let [prev, setPrev] = useState(current + 1);

  let toggleInterval = false;

  const slider = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
    setNext(next === projects.length - 1 ? 0 : next + 1);
    setPrev(prev === projects.length - 1 ? 0 : prev + 1);
  };

  //   const fireSlider = () => {
  //     toggleInterval = setInterval(() => {
  //       setClock(clock + 1);
  //     }, 3000);
  //     slider();
  //   };

  //   useEffect(() => {
  //     fireSlider();
  //     return () => clearTimeout(toggleInterval);
  //   }, [clock]);

  const projectHandler = (index) => {
    if (index === current) {
    } else if (next === index) {
      setCurrent(current === 0 ? (current = projects.length - 1) : current - 1);
      setNext(next === 0 ? (next = projects.length - 1) : next - 1);
      setPrev(prev === 0 ? (prev = projects.length - 1) : prev - 1);
    } else if (prev === index) {
      setCurrent(current === projects.length - 1 ? 0 : current + 1);
      setNext(next === projects.length - 1 ? 0 : next + 1);
      setPrev(prev === projects.length - 1 ? 0 : prev + 1);
    }
  };

  return (
    <Wrapper>
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
      </ProjectsSliderWrapper>
    </Wrapper>
  );
};

export default Projects;
