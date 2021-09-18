import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: relative;
  width: 50px;
  height: 100%;
  @media screen and (max-width: 680px) {
    width: 40px;
  }
`;

export const HamburgerWrapper = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  pointer-events: all;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  overflow: hidden;
  background-color: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  &.toggle {
    transition: 0.25s ease;
  }
  @media screen and (min-width: 1000px) {
    &:hover {
      transition: 0.25s ease;
      transform: perspective(800px) rotateY(20deg) scale(1.1) rotate(-5deg) scale(1.05) !important;
      background-color: ${({ theme }) => theme.comicLayer.greenColor};
      background-image: ${({ theme }) => theme.comicLayer.greenBackground};
    }
  }
  @media screen and (max-width: 1200px) {
    width: 54px;
    height: 54px;
  }
`;

export const HamburgerIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  transition: 0.25s 0.25s ease;
  pointer-events: all;
  &.hide {
    pointer-events: none;
    transition: 0.25s 0.25s ease;
    left: -100%;
    opacity: 0;
  }
`;

export const BackIcon = styled.img`
  position: absolute;
  width: 50px;
  height: 100%;
  left: 100%;
  top: 50%;
  opacity: 0;
  transition: 0.25s 0.25s ease;
  pointer-events: none;
  transform: translate(-50%, -50%);
  &.show {
    pointer-events: all;
    transition: 0.25s 0.25s ease;
    opacity: 1;
    left: 50%;
  }
  @media screen and (max-width: 680px) {
    width: 40px;
  }
`;
