import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 100px;
`;

export const ProjectsSliderWrapper = styled.div`
  position: relative;
  height: 450px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  transition: 1s 0.5s ease;
  @media screen and (max-width: 680px) {
    width: 70%;
    height: 250px;
  }
  &.previewProject {
    transition: 0.5s ease;
    opacity: 0;
    transform: scale(0);
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
  transition: 0.5s ease;
  opacity: 0;
  transform: scale(2);
  overflow-y: scroll;
  padding: 250px 0;
  @media screen and (max-width: 1000px) {
    padding: 150px 0;
  }
  &.show {
    transform: scale(1);
    transition: 1s 1s ease;
    opacity: 1;
    pointer-events: all;
  }
`;

export const PreviewProject = styled.div`
  position: relative;
  width: 60%;
  min-height: 600px;
  max-width: 1200px;
  height: auto;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export const PreviewProjectRwd = styled.img`
  width: 100%;
  height: auto;
  pointer-events: none;
  background: none;
  opacity: 0;
  margin-bottom: 40px;
  transition: 0.5s ease;
  &.show {
    transition: 0.5s ease;
    opacity: 1;
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translate(-50%);
  opacity: 0;
  transition: 0.5s ease;
  @media screen and (max-width: 680px) {
    top: 0;
  }
  &.show {
    opacity: 1;
    transition: 0.5s 0.5s ease;
  }
`;

const scale = keyframes`
25%{
  opacity: 1;
  transform: scale(2);
}
100%{
  transform: scale(0);
  opacity: 0;
}
`;

export const Dot = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.black};
  opacity: 0;
  @media screen and (max-width: 680px) {
    width: 20px;
    height: 20px;
  }
  &:nth-child(1) {
    animation: ${scale} 3s ease infinite;
  }
  &:nth-child(2) {
    animation: ${scale} 3s 0.5s ease infinite;
  }
  &:nth-child(3) {
    animation: ${scale} 3s 1.5s ease infinite;
  }
  &:nth-child(4) {
    animation: ${scale} 3s 2.5s ease infinite;
  }
`;

export const PreviewProjectTitle = styled.h4`
  width: 100%;
  margin-bottom: 60px;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding-bottom: 30px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 40px;
    padding-bottom: 20px;
  }
`;

export const Header = styled.span`
  width: 100%;
  text-transform: uppercase;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 15px 5px;
`;

export const UsedTools = styled.ul`
  width: 100%;
  text-transform: uppercase;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const Tool = styled.li`
  padding: 5px 10px;
  width: auto;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  margin: 5px;
  font-size: 14px;
  white-space: nowrap;
  @media screen and (max-width: 680px) {
    font-size: 12px;
    margin: 2px;
    padding: 5px;
  }
`;
