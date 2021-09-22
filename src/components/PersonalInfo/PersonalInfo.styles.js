import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonAndPersonalInfoWrapper = styled(motion.div)`
  height: 100%;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: perspective(800px) rotateY(-10deg) scale(1.1);
  margin-right: 35px;
  @media screen and (max-width: 760px) {
    height: auto;
    width: 350px;
    justify-content: center;
    margin: 0;
  }
  @media screen and (max-width: 520px) {
    max-width: unset;
    width: 85%;
    margin: 0;
    margin-top: 100px;
  }
  @media screen and (min-width: 200px) and (max-width: 920px) and (orientation: landscape) {
    max-width: 300px;
    margin: 0;
  }
`;

export const Header = styled(motion.h4)`
  white-space: nowrap;
  text-align: right;
  width: 100%;
  margin-bottom: 20px;
`;

const rotate = keyframes`
25%{
  transform: rotate(-3deg);
}
75%{
  transform: rotate(5deg);
}
`;

export const InfoWrapper = styled(motion.div)`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 0.5s ease;
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  border: 4px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.comicLayer.beigeColor};
  background-image: ${({ theme }) => theme.comicLayer.beigeBackground};
  animation: ${rotate} 4s infinite ease;
`;

export const PortfolioQRCode = styled(motion.div)`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  transition: 0.5s ease;
  margin-top: 30px;
  padding-bottom: 20px;
  &::before {
    position: absolute;
    content: "don't scan this!";
    width: 200px;
    left: 0;
    bottom: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  &.eng {
    &::before {
      content: 'nie radzę!';
    }
  }
  @media screen and (max-width: 1366px) {
    margin-top: 20px;
  }
`;

export const Info = styled(motion.a)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  padding: 5px;
  &.addHover {
    transition: 0.25s ease;
    @media screen and (min-width: 1000px) {
      &:hover,
      &:focus {
        transition: 0.25s ease;
        outline: none;
        background-color: ${({ theme }) => theme.comicLayer.greenColor};
        background-image: ${({ theme }) => theme.comicLayer.greenBackground};
        border-top: 4px solid ${({ theme }) => theme.colors.black};
        border-bottom: 4px solid ${({ theme }) => theme.colors.black};
      }
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Icon = styled.img`
  min-width: 35px;
  max-width: 35px;
  margin: 0 15px;
  transition: 0.25s ease;
  @media screen and (max-width: 680px) {
    margin: 0 10px;
  }
`;

export const QRCode = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  @media screen and (max-width: 1366px) {
    width: 120px;
    height: 120px;
  }
`;
