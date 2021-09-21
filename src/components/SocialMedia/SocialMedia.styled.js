import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
  @media screen and (max-width: 1366px) {
    width: 180px;
  }
  @media screen and (max-width: 520px) {
    width: 160px;
  }
`;

export const IconWrapper = styled.a`
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  transition: 0.25s ease;
  background-color: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  @media screen and (max-width: 1200px) {
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
  }
  @media screen and (min-width: 1000px) {
    &:hover {
      transition: 0.25s ease;
      transform: perspective(800px) rotateY(-20deg) scale(1.1) rotate(5deg) scale(1.05) !important;
      background-color: ${({ theme }) => theme.comicLayer.greenColor};
      background-image: ${({ theme }) => theme.comicLayer.greenBackground};
    }
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  pointer-events: none;
  &.flag {
    width: 100%;
    height: 100%;
  }
`;
