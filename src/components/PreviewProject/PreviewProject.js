import React, { useRef, useEffect } from 'react';
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
} from './PreviewProject.styles';
// ICONS
import link from 'assets/icons/link-icon.svg';
import github from 'assets/icons/github-icon.svg';
import Button from 'components/Button/Button';
import hero from 'assets/images/heroImageProject.svg';
import heroHorizontal from 'assets/images/heroImageProjectHorizontal.svg';
import heroMedium from 'assets/images/heroImageProjectMedium.svg';
// HELPERS
import { matchMedia, matchMediaMedium, matchMediaHorizontal } from 'helpers/matchMedia';

const PreviewProject = ({ viewProject }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewProject.isToggled]);

  return (
    <>
      <HeroImage
        src={matchMediaHorizontal ? heroHorizontal : matchMediaMedium ? heroMedium : matchMedia && hero}
        className={viewProject.isToggled && 'show'}
      />
      <PreviewProjectWrapper className={viewProject.isToggled && 'show'} ref={ref}>
        <Wrapper>
          <PreviewProjectTitle>{viewProject.data.title}</PreviewProjectTitle>
          <PreviewProjectRwd src={viewProject.data.imgDesktop} />
          <Header>Used tools:</Header>
          <UsedTools>{viewProject.data !== false && viewProject.data.usedTools.map((usedTool) => <Tool>{usedTool}</Tool>)}</UsedTools>
          <Header>About Project:</Header>
          <Description>{viewProject.data.aboutProject}</Description>
          <Header>Problems I faced with and how do I solved them</Header>
          <Description>{viewProject.data.projectProblems}</Description>
          <Header>Features Im proud of</Header>
          <FeaturesWrapper>{viewProject.data !== false && viewProject.data.features.map((feature) => <Feature>{feature}</Feature>)}</FeaturesWrapper>
          <ButtonsWrapper>
            <Button href={viewProject.data.live} text='Live' icon={link} />
            <Button href={viewProject.data.repo} text='Reposytory' icon={github} />
          </ButtonsWrapper>
        </Wrapper>
      </PreviewProjectWrapper>
    </>
  );
};

export default PreviewProject;
