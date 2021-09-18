import styled, { keyframes } from 'styled-components';

const heroImageAnim = keyframes`
50%{
  transform: scale(1.1);
}
`;

export const HeroImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0;
  z-index: 140;
  top: 0;
  left: 0;
  pointer-events: none;
  transition: 0.5s ease;
  animation: ${heroImageAnim} 10s infinite alternate;
  &.show {
    opacity: 0.3;
    transition: 1s 1s ease;
  }
`;

export const PreviewProjectWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 150;
  opacity: 0;
  transform: scale(2);
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 250px 0;
  transition: 0.5s ease;
  &.show {
    transform: scale(1);
    transition: 0.5s 0.5s ease;
    opacity: 1;
    pointer-events: all;
  }
  @media screen and (max-width: 520px) {
    padding: 150px 0;
  }
`;

export const CurrentProjectWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 60%;
  max-width: 1200px;
  padding: 100px 60px;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  background-color: ${({ theme }) => theme.comicLayer.whiteColor};
  background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
  left: 50%;
  opacity: 0;
  z-index: -1;
  transition: 0.3s ease;
  pointer-events: none;
  transform: translate(-50%);
  &.show {
    transform: translate(-50%);
    opacity: 1;
    z-index: 100;
    pointer-events: all;
    transition: 0.25s 0.25s ease;
    left: 50%;
  }
  &.next,
  &.prev {
    transition: 0.25s ease;
  }
  @media screen and (max-width: 760px) {
    width: 95%;
    padding: 50px 30px;
  }
  @media screen and (max-width: 520px) {
    padding: 80px 15px;
  }
`;

export const PreviewProjectRwd = styled.img`
  width: 100%;
  height: auto;
  background: none;
  &.addShadow {
    border: 4px solid ${({ theme }) => theme.colors.black};
    box-shadow: ${({ theme }) => theme.boxShadow.left};
  }
  &.nextProject,
  &.prevProject {
    box-shadow: ${({ theme }) => theme.boxShadow.left};
    border: 4px solid ${({ theme }) => theme.colors.black};
    transition: 0.3s ease;
    width: 45%;
  }
  @media screen and (min-width: 1000px) {
    &.nextProject {
      &:hover {
        transition: 0.3s ease;
        transform: perspective(1000px) rotateX(-5deg) rotateY(-10deg);
      }
    }
    &.prevProject {
      &:hover {
        transition: 0.3s ease;
        transform: perspective(1000px) rotateX(-5deg) rotateY(10deg);
      }
    }
  }
`;

export const OtherProjectsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PreviewProjectTitle = styled.h4`
  position: absolute;
  top: -80px;
  left: 50%;
  white-space: nowrap;
  font-size: 120px;
  z-index: 150;
  transform: translate(-50%);
  color: ${({ theme }) => theme.comicLayer.yellowColor};
  text-shadow: -10px 10px 0px ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 1366px) {
    font-size: 80px;
    top: -50px;
  }
  @media screen and (max-width: 760px) {
    font-size: 60px;
  }
  @media screen and (max-width: 520px) {
    font-size: 50px;
    top: -50px;
    text-shadow: -5px 5px 0px ${({ theme }) => theme.colors.black};
    white-space: normal;
    width: 100%;
    line-height: 40px;
  }
`;

export const Description = styled.article`
  width: 100%;
  @media screen and (max-width: 760px) {
    margin: 0;
  }
`;

export const Header = styled.h4`
  width: 100%;
  text-transform: uppercase;
  list-style: none;
  display: flex;
  font-weight: 600;
  flex-wrap: wrap;
  margin: 65px 0 30px 0;
  @media screen and (max-width: 760px) {
    margin: 0;
    margin: 60px 0 20px 0;
  }
`;

export const FeaturesWrapper = styled.ol`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-position: inside;
`;

export const Feature = styled.li`
  width: 100%;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  margin-bottom: 20px;
  padding: 20px;
  @media screen and (max-width: 760px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 10px 0 10px 0;
    padding: 15px;
  }
`;

export const UsedTools = styled.ul`
  width: 100%;
  text-transform: uppercase;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const Tool = styled.li`
  padding: 10px 25px;
  width: auto;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 10px;
  white-space: nowrap;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  @media screen and (max-width: 1366px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 10px;
  }
  @media screen and (max-width: 520px) {
    margin: 5px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
  @media screen and (max-width: 720px) {
    height: 100px;
    padding: 20px 0;
    margin-bottom: 100px;
  }
`;
