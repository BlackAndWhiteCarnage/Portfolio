import styled, { keyframes } from 'styled-components';

const rotateAnim = keyframes`
50%{
  transform: perspective(800px) rotateY(-10deg) scale(1);
}
`;

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  transform: perspective(800px) rotateY(-15deg) scale(1.1);
  z-index: 1;
  @media screen and (max-width: 1366px) {
    min-width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 520px) {
    max-width: unset;
    min-width: unset;
    width: 85%;
    height: 500px;
    margin-top: 100px;
  }
`;

export const MySkillsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  z-index: 1;
  animation: ${rotateAnim} 3s infinite;
  opacity: 0;
  transition: 0.5s ease;
  &.show {
    opacity: 1;
    transition: 0.5s 0.5s ease;
  }
`;

export const MySkillsBoringListWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  opacity: 0;
  transition: 0.5s ease;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  pointer-events: none;
  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: auto;
    margin: 5px;
    padding: 10px;
    text-align: center;
    border: 4px solid ${({ theme }) => theme.colors.black};
    box-shadow: ${({ theme }) => theme.boxShadow.right};
    background-color: ${({ theme }) => theme.comicLayer.beigeColor};
    background-image: ${({ theme }) => theme.comicLayer.beigeBackground};
    @media screen and (max-width: 1920px) {
      width: auto;
    }
    @media screen and (max-width: 1366px) {
      font-size: ${({ theme }) => theme.fontSize.m};
      padding: 5px;
    }
    @media screen and (max-width: 520px) {
      font-size: ${({ theme }) => theme.fontSize.m};
      width: 100%;
    }
  }
  &.show {
    opacity: 1;
    transition: 0.5s 0.5s ease;
  }

  @media screen and (max-width: 1366px) {
    min-width: 300px;
  }
  @media screen and (max-width: 520px) {
    /* justify-content: flex-start; */
    min-width: unset;
  }
`;

export const Skill = styled.ul`
  position: absolute;
  z-index: -1;
  pointer-events: none;
  top: 50%;
  width: 100%;
  height: 35%;
  right: 0;
  pointer-events: none;
  opacity: 0;
  background-color: ${({ theme }) => theme.comicLayer.beigeColor};
  background-image: ${({ theme }) => theme.comicLayer.beigeBackground};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.show {
    z-index: 1;
    opacity: 1;
    top: 50%;
    transform: translate(0, -50%);
    pointer-events: all;
    transition: 0.5s ease;
  }
  &.prev,
  &.next {
    z-index: -1;
    transition: 0.5s ease;
    pointer-events: all;
    opacity: 0.3;
  }
  &.next {
    top: 0;
    transform: perspective(800px) rotateX(45deg) scale(0.9);
  }
  &.prev {
    top: 65%;
    transform: perspective(1200px) rotateX(-45deg) scale(0.9);
  }
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  transition: 0.5s ease;
  @media screen and (max-width: 1366px) {
    width: auto;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const Header = styled.h3`
  width: 100%;
  text-align: right;
`;
