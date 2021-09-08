import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* flex-direction: column; */
  padding: 150px 0 0 0;
`;

export const LogoAndNavWrapper = styled(motion.div)`
  position: relative;
  height: 600px;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1500px) {
    width: 85%;
  }
  @media screen and (max-width: 680px) {
    width: 80%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  &.hide {
    transition: 0.5s ease;
    opacity: 0;
    transform: scale(0);
  }
`;

const rotate2 = keyframes`
55%{
  transform: perspective(800px) rotateY(25deg) rotateX(5deg) scale(1.1) translateY(5px);
}
}

`;

export const LogoImageWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: perspective(800px) rotateY(10deg) scale(1.1);
  max-width: 1200px;
  transition: 0.5s ease;
  z-index: 1;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  animation: ${rotate2} 6s infinite ease;
  &:hover {
    border-radius: 30px;
  }
  @media screen and (max-width: 1500px) {
    width: 50%;
  }
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const LogoLeftHalf = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LogoRightHalf = styled(motion.img)`
  position: absolute;
  right: 0;
  @media screen and (max-width: 680px) {
    width: 33%;
    height: 100px;
  }
`;

export const ScrollWrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  width: 30px;
  height: 30px;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 680px) {
    top: 95%;
  }
`;

export const Scroll = styled.img`
  min-width: 20px;
  opacity: 0;
`;

const rotate = keyframes`
25%{
  transform: rotateY(5deg) scale(1.1) rotateX(-5deg);
}
}
75%{
  transform: rotateY(5deg) scale(1) rotate(5deg);
}
`;

export const Navigation = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  transform: perspective(800px) rotateY(-10deg) scale(1.1);
  transition: 0.5s ease;
  z-index: 1;
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  border: 3px solid ${({ theme }) => theme.colors.black};
  background-color: #106fca;
  animation: ${rotate} 4s infinite ease;
  /* border-radius: 0 0 0 30px; */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%230C64BE' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  @media screen and (max-width: 680px) {
    width: 100%;
    height: 350px;
    margin-top: 150px;
  }
`;

export const NavItem = styled(motion.li)`
  padding: 15px;
  position: relative;
  width: 200px;
  height: 60px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  background-color: #ffc10b;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23FFAD00' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  transition: 0.5s ease;
  @media screen and (min-width: 1200px) {
    &:hover {
      transform: perspective(800px) rotateY(-20deg) scale(1.2) rotate(5deg) !important;
      background-color: #a3ed0a !important;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%2343B104' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
      transition: 0.5s ease;
      &::after {
        transition: 0.5s ease;
        height: 100%;
        opacity: 1;
      }
      &::before {
        transition: 0.5s ease;
        opacity: 1;
      }
    }
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
