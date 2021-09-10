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
  position: relative;
  padding: 10px;
  width: 200px;
  height: 60px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  @media screen and (min-width: 1200px) {
    cursor: none;
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
      pointer-events: none;
      z-index: -1;
    }
    transition: 0.5s ease;
    &:hover {
      transition: 0.5s ease;
      outline: none;
      background-color: ${({ theme }) => theme.comicLayer.greenColor};
      background-image: ${({ theme }) => theme.comicLayer.greenBackground};
      &::before {
        transition: 0.2s ease;
        opacity: 1;
        left: 50%;
      }
    }
  }
`;
