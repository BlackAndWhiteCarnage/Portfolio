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
  cursor: pointer;
  @media screen and (max-width: 680px) {
    width: 40px;
  }
`;

export const LinesWrapper = styled.nav`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.5s 1s ease;
  display: flex;
  flex-direction: column;
  left: 0;
  justify-content: space-between;
  opacity: 1;
  &.hide {
    transition: 0.5s 1s ease;
    left: -100%;
    opacity: 0;
  }
`;

export const BackIcon = styled.img`
  position: absolute;
  width: 50px;
  height: 100%;
  cursor: pointer;
  right: -100%;
  opacity: 0;
  transition: 0.5s 1s ease;
  &.show {
    transition: 0.5s 1s ease;
    opacity: 1;
    right: 0;
  }
  @media screen and (max-width: 680px) {
    width: 40px;
  }
`;

export const Line = styled.div`
  height: 1px;
  pointer-events: none;
  background: ${({ theme }) => theme.colors.black};
  transition: 0.5s ease;
  &:nth-child(1) {
    width: 100%;
    &.toggle {
      width: 50%;
    }
  }
  &:nth-child(2) {
    width: 20%;
    &.toggle {
      width: 80%;
    }
  }
  &:nth-child(3) {
    width: 70%;
    &.toggle {
      width: 20%;
    }
  }
  &:nth-child(4) {
    width: 40%;
    &.toggle {
      width: 100%;
    }
  }
`;

export const SocialMedia = styled.nav`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
