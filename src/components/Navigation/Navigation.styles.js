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
  z-index: 9999 !important;
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
  /* transition: 0.5s 1s ease; */
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  opacity: 1;
  pointer-events: all;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  border-radius: 50%;
  background-color: #a3ed0a !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%2343B104' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  @media screen and (max-width: 1200px) {
    width: 55px;
    height: 55px;
  }
  &.hide {
    pointer-events: none;
    transition: 0.5s 1s ease;
    left: -100%;
    opacity: 0;
  }
`;

export const AccualHamburger = styled.img`
  width: 80%;
  height: 80%;
`;

export const BackIcon = styled.img`
  position: absolute;
  width: 50px;
  height: 100%;
  right: -100%;
  opacity: 0;
  transition: 0.5s 1s ease;
  pointer-events: none;
  &.show {
    pointer-events: all;
    transition: 0.5s 1s ease;
    opacity: 1;
    right: 0;
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
  z-index: 9999 !important;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  border-radius: 50%;
  @media screen and (max-width: 1200px) {
    min-width: 40px;
    min-height: 40px;
  }
  &.facebook {
    background-color: #71d8fd;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%234FA5CB' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  }
  &.github {
    background-color: #c8c8c8;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%239D9D9D' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  }
`;

export const SocialMedia = styled.nav`
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999 !important;
  @media screen and (max-width: 1200px) {
    width: 100px;
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
