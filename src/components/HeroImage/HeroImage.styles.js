import styled, { keyframes } from 'styled-components';

const rotateBackgroundAnim = keyframes`
0%{
  transform: scale(1.1);
}
25%{
  transform: rotate(5deg) scale(1.2);
}
50%{
  transform: scale(1.1);
}
75%{
  transform: rotate(-5deg) scale(1.2);
}
100%{
  transform: scale(1.1);
}
`;

export const Image = styled.img`
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.15;
  z-index: -1;
  animation: ${rotateBackgroundAnim} 15s infinite alternate;
`;

export const ComicLayer = styled.img`
  position: fixed;
  z-index: -2;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.comicLayer.whiteColor};
  background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
`;
