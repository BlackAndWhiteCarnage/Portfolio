import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
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

const PreviewProject = ({ viewProject, projects, current, projectSliderHandler, next, prev, isEnglish }) => {
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
                <Button href={project.live} text={!isEnglish ? 'Live' : 'Podgląd'} icon={linkIcon} />
                <Button href={project.repo} text={!isEnglish ? 'Reposytory' : 'Repozytorium'} icon={githubIcon} />
              </ButtonsWrapper>
              <Header>{!isEnglish ? 'Used tools:' : 'Użyte narzędzia:'}</Header>
              <UsedTools>{viewProject.data !== false && project.usedTools.map((usedTool, i) => <Tool key={i}>{usedTool}</Tool>)}</UsedTools>
              <Header>{!isEnglish ? 'About project:' : 'O Projekcie:'}</Header>
              <Description>{project.aboutProject}</Description>
              <Header>{!isEnglish ? 'Problems I faced and how do I soled them:' : 'Problemy które napotkałem i jak sobie z nimi poradziłem:'}</Header>
              <Description>{project.projectProblems}</Description>
              <Header>{!isEnglish ? 'Features that Im proud of:' : 'Funkcje z których jestem zadowolony:'}</Header>
              <FeaturesWrapper>{project !== false && project.features.map((feature, i) => <Feature key={i}>{feature}</Feature>)}</FeaturesWrapper>
              <Header>{!isEnglish ? 'Other projects:' : 'Inne projekty:'}</Header>
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

PreviewProject.propTypes = {
  projects: PropTypes.array,
  toggleReadMore: PropTypes.bool,
  toggleModal: PropTypes.bool,
  viewProject: PropTypes.bool.isRequired,
  current: PropTypes.number.isRequired,
  next: PropTypes.number.isRequired,
  prev: PropTypes.number.isRequired,
  projectSliderHandler: PropTypes.func.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};

export default PreviewProject;
