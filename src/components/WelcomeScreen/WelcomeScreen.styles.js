import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.comicLayer.beigeColor};
  background-image: ${({ theme }) => theme.comicLayer.beigeBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  &.hide {
    top: -150%;
    transition: 1s ease;
  }
`;

const imageAnim = keyframes`
0%{
  transform: scale(0.9);
}
10%{
  transform: scale(1);
}
20%{
  transform: scale(0.9);
}
30%{
  transform: scale(1);
}
50%{
  transform: scale(0.9);
}
60%{
  transform: scale(1);
}
70%{
  transform: scale(0.9);
}
80%{
  transform: scale(1);
}
90%{
  transform: scale(0.9);
}
100%{
  transform: scale(1);
}
`;

export const Image = styled.img`
  width: auto;
  height: 95%;
  object-fit: cover;
  &.show {
    transition: 2s ease-in;
    animation: ${imageAnim} 2s ease;
  }
  @media screen and (max-width: 520px) {
    width: 95%;
    height: auto;
  }
`;
