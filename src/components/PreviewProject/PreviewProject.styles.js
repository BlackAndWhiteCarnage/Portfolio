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
  z-index: 200;
  top: 0;
  pointer-events: none;
  transition: 0.5s ease;
  animation: ${rotate} 10s infinite alternate;
  &.show {
    opacity: 0.15;
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
  transition: 0.5s ease;
  opacity: 0;
  transform: scale(2);
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 250px 0;
  background-color: ${({ theme }) => theme.comicLayer.whiteColor};
  background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
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

export const Wrapper = styled.div`
  position: relative;
  width: 60%;
  min-height: 600px;
  max-width: 1200px;
  height: auto;
  @media screen and (max-width: 1000px) {
    width: 90%;
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
  @media screen and (max-width: 1000px) {
    margin-bottom: 40px;
    padding-bottom: 20px;
  }
`;

export const Description = styled.article`
  width: 100%;
  margin: 5px;
`;

export const Header = styled.span`
  width: 100%;
  text-transform: uppercase;
  list-style: none;
  display: flex;
  font-weight: 600;
  flex-wrap: wrap;
  margin: 65px 0 30px 5px;
  letter-spacing: normal;
`;

export const FeaturesWrapper = styled.ol`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-position: inside;
  margin-left: 5px;
`;

export const Feature = styled.li`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 40px;
  padding: 20px;
  /* border-radius: 10px; */
  @media screen and (max-width: 680px) {
    margin-bottom: 5px;
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
  padding: 5px 10px;
  width: auto;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  margin: 5px;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 600;
  @media screen and (max-width: 680px) {
    font-size: 12px;
    margin: 2px;
    padding: 5px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    width: auto;
    height: 100px;
    margin-top: 40px;
  }
`;
