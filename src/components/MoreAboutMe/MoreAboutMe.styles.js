import styled, { keyframes } from 'styled-components';

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
  &.show {
    opacity: 0.25;
    transition: 1s 1s ease;
  }
`;

export const ReadMoreWrapper = styled.div`
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
  @media screen and (max-width: 1000px) {
    padding: 200px 0;
  }
  @media screen and (max-width: 520px) {
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

export const ReadMore = styled.div`
  width: 60%;
  min-height: 600px;
  max-width: 1200px;
  padding: 60px;
  height: auto;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  background-color: ${({ theme }) => theme.comicLayer.whiteColor};
  background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
  @media screen and (max-width: 760px) {
    width: 95%;
    padding: 50px 30px;
  }
  @media screen and (max-width: 520px) {
    padding: 50px 15px;
  }
`;

export const Header = styled.h4`
  width: 100%;
  margin-bottom: 50px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 30px;
  }
`;

export const Answer = styled.p`
  width: 100%;
  margin-bottom: 80px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 60px;
  }
`;
