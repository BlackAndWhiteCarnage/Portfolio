import React, { useState, useEffect } from 'react';
// PROJECTS DATA
import { projects } from 'data/projectsData';
// COMPONENTS
import Slider from 'components/Slider/Slider';
import Project from 'components/Project/Project';
import SliderInfo from 'components/SliderInfo/SliderInfo';
// HELPERS
import { useScroll } from 'helpers/useScroll';
// ANIMATIONS
import { fade, slide } from 'assets/animations/animation';
// STYLES
import {
  Wrapper,
  ProjectsSliderWrapper,
  PreviewProjectWrapper,
  PreviewProject,
  PreviewProjectTitle,
  PreviewProjectRwd,
  LoadingWrapper,
  Dot,
  Header,
  UsedTools,
  Tool,
  Description,
  Feature,
  FeaturesWrapper,
} from './Projects.styles';

const Projects = ({ viewProject, setViewProject }) => {
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

  const toggleProjectModalHandler = (project) => {
    if (project !== false) {
      setViewProject({ isToggled: true, data: project });
    } else {
      setViewProject({ ...viewProject, isToggled: false });
    }
  };

  const checkIfLoadedHandler = (e) => {
    if (e.naturalHeight !== 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  };

  // console.log(
  //   viewProject.data.usedTools.map((item) => {
  //     console.log(item);
  //   })
  // );

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
      <ProjectsSliderWrapper className={viewProject.isToggled && 'previewProject'}>
        {projects.map((project, index) => (
          <Project
            current={current}
            index={index}
            next={next}
            prev={prev}
            project={project}
            toggleProjectModalHandler={toggleProjectModalHandler}
            projectHandler={projectHandler}
            viewProject={viewProject}
          />
        ))}
        <SliderInfo slide={slide} isLocked={isLocked} />
      </ProjectsSliderWrapper>
      <PreviewProjectWrapper className={viewProject.isToggled && 'show'} onClick={() => toggleProjectModalHandler(false)}>
        <PreviewProject>
          <PreviewProjectTitle>{viewProject.data.title}</PreviewProjectTitle>
          <PreviewProjectRwd src={viewProject.data.img} onLoad={checkIfLoadedHandler} className={isLoaded && 'show'} />
          <Header>Used tools:</Header>
          <UsedTools>{viewProject.data !== false && viewProject.data.usedTools.map((usedTool) => <Tool>{usedTool}</Tool>)}</UsedTools>
          <Header>About Project:</Header>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laborum sequi atque mollitia, iusto blanditiis quibusdam ab explicabo
            rem ducimus quia sapiente, eaque perferendis consequatur eligendi voluptate dolor minima magnam? Earum quos fuga explicabo quaerat quod
            accusantium maiores aliquam impedit sit velit numquam id mollitia adipisci officia, eveniet hic quo est reprehenderit vel ullam.
            Perspiciatis nostrum error numquam esse hic.
          </Description>
          <Header>Problems I faced with and how do I solved them</Header>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laborum sequi atque mollitia, iusto blanditiis quibusdam ab explicabo
            rem ducimus quia sapiente, eaque perferendis consequatur eligendi voluptate dolor minima magnam.
          </Description>
          <Header>Features Im proud of</Header>
          <FeaturesWrapper>
            <Feature>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laborum sequi atque mollitia, iusto blanditiis quibusdam ab explicabo
              rem ducimus quia sapiente.
            </Feature>
            <Feature>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laborum sequi atque mollitia, explicabo</Feature>
            <Feature>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laborum sequi atque mollitia, iusto blanditiis quibusdam ab explicabo
              rem ducimus quia sapiente.
            </Feature>
            <Feature>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laborum sequi atque mollitia, iusto blanditiis quibusdam ab explicabo
              rem ducimus quia sapiente.
            </Feature>
          </FeaturesWrapper>
          <LoadingWrapper className={!isLoaded && 'show'}>
            <Dot className={!isLoaded && 'show'} />
            <Dot className={!isLoaded && 'show'} />
            <Dot className={!isLoaded && 'show'} />
            <Dot className={!isLoaded && 'show'} />
          </LoadingWrapper>
        </PreviewProject>
      </PreviewProjectWrapper>
      <Slider toggle={viewProject.isToggled} />
    </Wrapper>
  );
};

export default Projects;
