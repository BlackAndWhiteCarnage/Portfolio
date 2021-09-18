import React, { useRef, useEffect } from 'react';
// ICONS
import linkIcon from 'assets/icons/link-icon.svg';
import githubIcon from 'assets/icons/github-icon.svg';
// COMPONENTS
import Button from 'components/Button/Button';
import hero from 'assets/images/heroImageProject.svg';
import heroHorizontal from 'assets/images/heroImageProjectHorizontal.svg';
import heroMedium from 'assets/images/heroImageProjectMedium.svg';
// HELPERS
import { matchMedia, matchMediaMedium, matchMediaHorizontal } from 'helpers/matchMedia';
// STYLES
import {
  PreviewProjectWrapper,
  Wrapper,
  PreviewProjectRwd,
  PreviewProjectTitle,
  Header,
  Tool,
  Description,
  Feature,
  FeaturesWrapper,
  UsedTools,
  ButtonsWrapper,
  HeroImage,
  CurrentProjectWrapper,
  OtherProjectsWrapper,
} from './PreviewProject.styles';

// prop types

const PreviewProject = ({ viewProject, projects, current, projectSliderHandler, next, prev }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewProject, current]);

  return (
    <>
      <PreviewProjectWrapper className={viewProject && 'show'} ref={ref}>
        <CurrentProjectWrapper>
          {projects.map((project, index) => (
            <Wrapper
              key={index}
              className={`${viewProject && current === index && 'show'} ${viewProject && next === index && 'next'} ${
                viewProject && prev === index && 'prev'
              }`}
            >
              <PreviewProjectTitle>{project.title}</PreviewProjectTitle>
              <PreviewProjectRwd
                src={matchMediaHorizontal ? project.projectScreenshot : project.projectRwdImage}
                className={matchMediaHorizontal && 'addShadow'}
              />
              <ButtonsWrapper>
                <Button href={project.live} text='Live' icon={linkIcon} />
                <Button href={project.repo} text='Reposytory' icon={githubIcon} />
              </ButtonsWrapper>
              <Header>Used tools:</Header>
              <UsedTools>{viewProject.data !== false && project.usedTools.map((usedTool, i) => <Tool key={i}>{usedTool}</Tool>)}</UsedTools>
              <Header>About Project:</Header>
              <Description>{project.aboutProject}</Description>
              <Header>Problems I faced with and how do I solved them:</Header>
              <Description>{project.projectProblems}</Description>
              <Header>Features that I'm proud of:</Header>
              <FeaturesWrapper>{project !== false && project.features.map((feature, i) => <Feature key={i}>{feature}</Feature>)}</FeaturesWrapper>
              <Header>Other Projects:</Header>
              <OtherProjectsWrapper>
                <PreviewProjectRwd
                  className='prevProject'
                  id='active'
                  src={projects[prev].projectPoster}
                  onClick={() => {
                    projectSliderHandler(prev);
                  }}
                />
                <PreviewProjectRwd
                  className='nextProject'
                  id='active'
                  src={projects[next].projectPoster}
                  onClick={() => {
                    projectSliderHandler(next);
                  }}
                />
              </OtherProjectsWrapper>
            </Wrapper>
          ))}
        </CurrentProjectWrapper>
      </PreviewProjectWrapper>
      <HeroImage src={matchMediaHorizontal ? heroHorizontal : matchMediaMedium ? heroMedium : matchMedia && hero} className={viewProject && 'show'} />
    </>
  );
};

export default PreviewProject;
