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

export const StyledDotTop = styled.div`
  position: fixed;
  left: -50%;
  top: -50%;
  width: 0%;
  height: 0%;
  background: ${({ theme }) => theme.colors.black};
  transition: 1s 0.5s;
  border-radius: 50%;
  z-index: 110;
  &.toggle {
    width: 400%;
    height: 200%;
    transition: 1s ease;
  }
`;

export const StyledDotBottom = styled.div`
  position: fixed;
  right: -50%;
  bottom: -50%;
  width: 100%;
  height: 0%;
  background: ${({ theme }) => theme.colors.white};
  transition: 1s;
  border-radius: 50%;
  z-index: 120;
  &.toggle {
    width: 400%;
    height: 200%;
    transition: 1s 0.5s ease;
  }
`;
