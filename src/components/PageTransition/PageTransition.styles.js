import styled from 'styled-components';

export const StyledDotTop = styled.div`
  /* position: fixed;
  left: 0;
  top: 100%;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.comicLayer.redColor};
  background-image: ${({ theme }) => theme.comicLayer.redBackground};
  transition: 0.5s 0.5s;
  z-index: 110;
  pointer-events: none;
  &.toggle {
    transition: 0.25s ease;
    top: 0;
    pointer-events: all;
    transform: scale(1);
  } */
`;

export const StyledDotBottom = styled.div`
  position: fixed;
  right: 0;
  top: -100%;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.comicLayer.blueColor};
  background-image: ${({ theme }) => theme.comicLayer.blueBackground};
  transition: 0.25s 0.5s;
  z-index: 120;
  pointer-events: none;
  &.toggle {
    top: 0;
    pointer-events: all;
    transform: scale(1);
    transition: 0.25s 0.2s ease;
  }
`;
