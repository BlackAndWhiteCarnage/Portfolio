import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  width: 90%;
  max-width: 1920px;
  height: 30px;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  @media screen and (max-width: 680px) {
    top: 20px;
  }
`;

export const HamburgerMenu = styled.nav`
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
  transition: 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  pointer-events: all;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  &.toggle {
    transition: 0.3s ease;
    background-color: ${({ theme }) => theme.comicLayer.redColor};
    background-image: ${({ theme }) => theme.comicLayer.redBackground};
  }
  @media screen and (min-width: 1000px) {
    &:hover {
      transition: 0.5s ease;
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

export const AccualHamburger = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  transition: 0.5s 1s ease;
  pointer-events: all;
  &.hide {
    pointer-events: none;
    transition: 0.5s 1s ease;
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
  transition: 0.5s 1s ease;
  pointer-events: none;
  transform: translate(-50%, -50%);
  &.show {
    pointer-events: all;
    transition: 0.5s 1s ease;
    opacity: 1;
    left: 50%;
  }
  @media screen and (max-width: 680px) {
    width: 40px;
  }
`;

export const IconWrapper = styled.nav`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  border-radius: 50%;
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  @media screen and (max-width: 1200px) {
    min-width: 40px;
    min-height: 40px;
  }
  @media screen and (min-width: 1000px) {
    &:hover {
      transition: 0.5s ease;
      transform: perspective(800px) rotateY(-20deg) scale(1.1) rotate(5deg) scale(1.05) !important;
      background-color: ${({ theme }) => theme.comicLayer.greenColor};
      background-image: ${({ theme }) => theme.comicLayer.greenBackground};
    }
  }
`;

export const SocialMedia = styled.nav`
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  @media screen and (max-width: 1200px) {
    width: 100px;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  pointer-events: none;
`;
