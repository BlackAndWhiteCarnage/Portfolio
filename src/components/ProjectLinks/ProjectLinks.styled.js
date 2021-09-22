import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: 100%;
  pointer-events: none;
  text-transform: uppercase;
  opacity: 0;
  transition: 0.25s ease;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  z-index: -1;
  &.show {
    right: -64px;
    transition: 0.25s 0.5s ease;
    opacity: 1;
    z-index: 9;
    @media screen and (max-width: 760px) {
      bottom: -80px;
      right: 0;
    }
    @media screen and (max-width: 320px) {
      bottom: -20px;
      right: 0;
    }
  }
  @media screen and (max-width: 760px) {
    height: auto;
    width: 80%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    right: unset;
    top: unset;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Link = styled.a`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  pointer-events: all;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  @media screen and (min-width: 760px) {
    &:hover,
    &:focus {
      outline: none;
      transition: 0.5s ease;
      transform: perspective(800px) rotateY(-20deg) scale(1.1) rotate(5deg) scale(1.05) !important;
      background-color: ${({ theme }) => theme.comicLayer.greenColor};
      background-image: ${({ theme }) => theme.comicLayer.greenBackground};
    }
  }
`;
