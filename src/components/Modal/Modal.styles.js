import styled, { keyframes } from 'styled-components';

export const ModalWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  transform: scale(2);
  height: 100%;
  width: 100%;
  z-index: 150;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s ease;
  opacity: 0;
  &.toggle {
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
    transition: 0.5s 0.5s ease;
  }
`;

export const LinksWrapper = styled.ul`
  list-style: none;
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Link = styled.li`
  position: relative;
  width: auto;
  height: auto;
  transition: 0.3s ease;
  @media screen and (min-width: 1200px) {
    cursor: none;
    &::before {
      position: absolute;
      content: '${(props) => props.text}';
      top: -50%;
      left: -50%;
      transform: translate(-50%, -50%);
      font-size: 180px;
      white-space: nowrap;
      opacity: 0;
      transition: 0.3s ease;
      color: ${({ theme }) => theme.colors.black};
      pointer-events: none;
      z-index: -1;
    }
    transition: 0.5s ease;
    &:hover {
      transition: 0.3s ease;
      &::before {
        transition: 0.2s ease;
        opacity: 1;
        left: 50%;
      }
    }
  }
`;

const heroAnim = keyframes`
50%{
  transform: scale(1.1);
}
`;

export const HeroImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
  animation: ${heroAnim} 10s infinite alternate;
`;
