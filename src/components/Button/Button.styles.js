import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export const ButtonWrapper = styled(motion.button)`
  position: relative;
  max-width: 220px;
  margin: 5px 0;
  border: 4px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  font-family: 'Bangers', cursive;
  transition: 0.3s ease;
  background: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  &.right {
    box-shadow: ${({ theme }) => theme.boxShadow.right};
  }
  @media screen and (min-width: 1200px) {
    cursor: none;
  }
  @media screen and (max-width: 1366px) {
    padding: 5px 10px;
  }
  @media screen and (min-width: 1000px) {
    /* &:focus { */
    &:hover {
      outline: none;
      transform: perspective(800px) rotateY(-20deg) scale(1.1) rotate(5deg) scale(1.05);
      background: ${({ theme }) => theme.comicLayer.greenColor};
      background-image: ${({ theme }) => theme.comicLayer.greenBackground};
      img {
        transform: translateX(15px) scale(1.8);
        transition: 0.3s ease;
      }
      &.right {
        transform: perspective(800px) rotateY(20deg) scale(1.1) rotate(-5deg) scale(1.05);
      }
    }
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px 30px;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  img {
    max-height: 35px;
    margin: 0 10px 0 5px;
    transition: 0.3s ease;
    pointer-events: none;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  @media screen and (min-width: 1200px) {
    cursor: none;
  }
`;
