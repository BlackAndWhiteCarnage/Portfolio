import styled from 'styled-components';

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
    transition: 1s 1s ease;
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
  cursor: pointer;
  position: relative;
  z-index: 100;
  padding: 10px;
  width: 200px;
  height: 60px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  transition: 0.5s ease;
  background-color: #ffc10b;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23FFAD00' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  @media screen and (min-width: 1200px) {
    &::before {
      position: absolute;
      content: '${(props) => props.text}';
      top: -150%;
      left: -100%;
      transform: translate(-50%);
      font-size: 180px;
      white-space: nowrap;
      opacity: 0;
      transition: 0.5s ease;
      color: ${({ theme }) => theme.colors.white};
      z-index: -1;
      pointer-events: none;
    }
    transition: 0.5s ease;
    &:hover {
      transition: 0.5s ease;
      outline: none;
      transform: scale(1.2) !important;
      background-color: #a3ed0a !important;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%2343B104' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
      /* &::after {
        transition: 0.5s ease;
        height: 100%;
        opacity: 1;
      } */
      &::before {
        transition: 0.2s ease;
        opacity: 1;
        left: 50%;
      }
    }
  }
`;
