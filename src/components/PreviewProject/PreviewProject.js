import React, { useRef } from 'react';
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
  Dot,
  LoadingWrapper,
  UsedTools,
} from './PreviewProject.styles';

const PreviewProject = ({ isLoaded, viewProject, setIsLoaded }) => {
  const ref = useRef(null);

  const checkIfLoadedHandler = (e) => {
    if (e.naturalHeight !== 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  };

  return (
    <PreviewProjectWrapper className={viewProject.isToggled && 'show'} ref={ref}>
      <Wrapper>
        <PreviewProjectTitle>{viewProject.data.title}</PreviewProjectTitle>
        <PreviewProjectRwd src={viewProject.data.img} onLoad={checkIfLoadedHandler} className={isLoaded && 'show'} />
        <Header>Used tools:</Header>
        <UsedTools>{viewProject.data !== false && viewProject.data.usedTools.map((usedTool) => <Tool>{usedTool}</Tool>)}</UsedTools>
        <Header>About Project:</Header>
        <Description>{viewProject.data.aboutProject}</Description>
        <Header>Problems I faced with and how do I solved them</Header>
        <Description>{viewProject.data.projectProblems}</Description>
        <Header>Features Im proud of</Header>
        <FeaturesWrapper>{viewProject.data !== false && viewProject.data.features.map((feature) => <Feature>{feature}</Feature>)}</FeaturesWrapper>
        <LoadingWrapper className={!isLoaded && 'show'}>
          <Dot className={!isLoaded && 'show'} />
          <Dot className={!isLoaded && 'show'} />
          <Dot className={!isLoaded && 'show'} />
          <Dot className={!isLoaded && 'show'} />
        </LoadingWrapper>
      </Wrapper>
    </PreviewProjectWrapper>
  );
};

export default PreviewProject;
