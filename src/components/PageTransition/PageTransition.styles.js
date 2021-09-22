import styled from 'styled-components';

export const StyledDotBottom = styled.div`
  position: fixed;
  right: 0;
  top: -100%;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.comicLayer.beigeColor};
  background-image: ${({ theme }) => theme.comicLayer.beigeBackground};
  transition: 0.5s 0.5s;
  z-index: 120;
  pointer-events: none;
  &.toggle {
    top: 0;
    pointer-events: all;
    transform: scale(1);
    transition: 0.5s 0.25s;
  }
`;
