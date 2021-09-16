import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
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
  z-index: 150;
  top: 0;
  pointer-events: none;
  transition: 0.5s ease;
  animation: ${rotate} 10s infinite alternate;
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
  /* background-color: ${({ theme }) => theme.comicLayer.whiteColor};
  background-image: ${({ theme }) => theme.comicLayer.whiteBackground}; */
  @media screen and (max-width: 1000px) {
    padding: 150px 0;
  }
  transition: 0.5s ease;
  &.show {
    transform: scale(1);
    transition: 0.5s 0.5s ease;
    opacity: 1;
    pointer-events: all;
  }
`;

const rotate2 = keyframes`
25%{
  transform: scale(0.98);
}
}
75%{
  transform: scale(1);
}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 60%;
  min-height: 600px;
  max-width: 1200px;
  height: auto;
  padding: 60px;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  background-color: ${({ theme }) => theme.comicLayer.whiteColor};
  background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
  animation: ${rotate2} 8s infinite ease;
  @media screen and (max-width: 760px) {
    animation: none;
    width: 95%;
    padding: 60px 20px;
  }
`;

export const PreviewProjectRwd = styled.img`
  width: 100%;
  height: auto;
  pointer-events: none;
  background: none;
  transition: 0.5s ease;
`;

export const PreviewProjectTitle = styled.h4`
  width: 100%;
  margin-bottom: 65px;
  text-transform: uppercase;
  padding-bottom: 30px;
  @media screen and (max-width: 760px) {
    margin-bottom: 40px;
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
  font-weight: 600;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  @media screen and (max-width: 760px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 10px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    width: auto;
    height: 100px;
    margin-top: 40px;
  }
`;
