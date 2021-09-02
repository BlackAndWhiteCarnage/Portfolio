import styled from 'styled-components';

export const ModalWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
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
  transform: scale(2);
  &.toggle {
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
    transition: 1s 0.5s ease;
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
  z-index: 10;
  padding: 10px;
  width: 150px;
  height: 50px;
  @media screen and (min-width: 1200px) {
    &::before {
      position: absolute;
      content: '${(props) => props.text}';
      top: -100%;
      left: 50%;
      transform: translate(-50%);
      font-size: 100px;
      white-space: nowrap;
      opacity: 0;
      font-weight: 400;
      transition: 0.5s ease;
      color: #efefef;
      z-index: -1;
      pointer-events: none;
    }
    &::after {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%);
      content: '';
      width: 100%;
      height: 100%;
      border: 1px solid ${({ theme }) => theme.colors.black};
      opacity: 0;
      z-index: -1;
      transition: 0.5s ease;
      pointer-events: none;
    }
    &:hover {
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
