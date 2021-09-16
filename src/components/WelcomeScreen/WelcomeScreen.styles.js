import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.comicLayer.redColor};
  background-image: ${({ theme }) => theme.comicLayer.redBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  &.hide {
    top: -150%;
    transition: 1s ease;
  }
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  transform: scale(0) rotate(360deg);
  opacity: 0;
  &.show {
    transition: 0.5s ease-out;
    opacity: 1;
    transform: scale(1);
  }
`;
