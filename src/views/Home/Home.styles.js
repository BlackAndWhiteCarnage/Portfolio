import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const rotate2 = keyframes`
55%{
  transform: perspective(800px) rotateY(25deg) rotateX(5deg) translateY(5px);
}
}
`;

export const PosterImageWrapper = styled(motion.div)`
  min-width: fit-content;
  height: 100%;
  position: relative;
  /* transform: perspective(800px) rotateY(10deg) scale(1.1); */
  border: 5px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  animation: ${rotate2} 6s infinite ease;
  margin: 0 35px;
  display: flex;
  @media screen and (max-width: 760px) {
    margin: 0;
    height: 400px;
  }
  @media screen and (max-width: 520px) {
    min-width: unset;
    width: 85%;
    height: auto;
    margin: 30px 0 120px 0;
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    min-width: unset;
    max-width: 300px;
    margin: 0;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const scrollAnim = keyframes`
50%{
  transform: rotate(15deg) translate(-50%);
}
75%{
  transform: rotate(-15deg) translate(-50%);
}
`;

export const ScrollWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: -170px;
  transform: translate(-50%);
  z-index: 1;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  animation: ${scrollAnim} 3s infinite;
  @media screen and (max-width: 1366px) {
    bottom: -130px;
    width: 80px;
  }
`;

export const Scroll = styled.img`
  width: 100%;
  z-index: -1;
`;

const rotate = keyframes`
25%{
  transform: rotateY(5deg) rotateX(-5deg);
}
}
75%{
  transform: rotateY(5deg) rotate(5deg);
}
`;

export const Navigation = styled(motion.ul)`
  min-width: 400px;
  height: 100%;
  list-style: none;
  animation: ${rotate} 3s infinite alternate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transform: perspective(800px) rotateY(-10deg) scale(1.1);
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  border: 4px solid ${({ theme }) => theme.colors.black};
  margin: 0 35px;
  background-color: ${({ theme }) => theme.comicLayer.blueColor};
  background-image: ${({ theme }) => theme.comicLayer.blueBackground};
  @media screen and (max-width: 1366px) {
    min-width: 300px;
  }
  @media screen and (max-width: 760px) {
    margin: 0;
    height: 400px;
  }
  @media screen and (max-width: 520px) {
    min-width: unset;
    width: 85%;
    margin-top: 50px;
  }
`;

export const Line = styled(motion.div)`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 460px) {
    width: 100%;
    height: 1px;
  }
`;
