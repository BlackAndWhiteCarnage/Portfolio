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
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (max-width: 680px) {
    width: 40px;
  }
`;

export const BackIcon = styled.img`
  width: 50px;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 680px) {
    width: 40px;
  }
`;

export const Line = styled.nav`
  height: 1px;
  pointer-events: none;
  backdrop-filter: invert(100%);
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
