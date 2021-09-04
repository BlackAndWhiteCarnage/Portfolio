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
} from './PreviewProject.styles';
// ICONS
import link from 'assets/icons/link-icon.svg';
import github from 'assets/icons/github-icon.svg';
import Button from 'components/Button/Button';

const PreviewProject = ({ viewProject }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewProject.isToggled]);

  return (
    <PreviewProjectWrapper className={viewProject.isToggled && 'show'} ref={ref}>
      <Wrapper>
        <PreviewProjectTitle>{viewProject.data.title}</PreviewProjectTitle>
        <PreviewProjectRwd src={viewProject.data.img} />
        <Header>Used tools:</Header>
        <UsedTools>{viewProject.data !== false && viewProject.data.usedTools.map((usedTool) => <Tool>{usedTool}</Tool>)}</UsedTools>
        <Header>About Project:</Header>
        <Description>{viewProject.data.aboutProject}</Description>
        <Header>Problems I faced with and how do I solved them</Header>
        <Description>{viewProject.data.projectProblems}</Description>
        <Header>Features Im proud of</Header>
        <FeaturesWrapper>{viewProject.data !== false && viewProject.data.features.map((feature) => <Feature>{feature}</Feature>)}</FeaturesWrapper>
        <ButtonsWrapper>
          <Button href={viewProject.data.live} text='Live' margin='5px' icon={link} />
          <Button href={viewProject.data.repo} text='Reposytory' margin='5px' icon={github} />
        </ButtonsWrapper>
      </Wrapper>
    </PreviewProjectWrapper>
  );
};

export default PreviewProject;
