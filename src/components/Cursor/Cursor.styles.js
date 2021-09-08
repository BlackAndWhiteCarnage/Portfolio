import styled from 'styled-components';

export const Ouch = styled.img`
  position: absolute;
  top: -80px;
  left: -80px;
  opacity: 0;
  min-width: 150px;
  transition: 0.2s ease;
  &.ouch {
    transition: 0.2s ease;
    opacity: 1;
  }
`;

export const Bang = styled.img`
  position: absolute;
  top: -50px;
  left: -50px;
  opacity: 0;
  min-width: 200px;
  transition: 0.2s ease;
  &.bang {
    transition: 0.2s ease;
    opacity: 1;
  }
`;

export const CursorWrapper = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.5s ease;
  transition-property: transform;
  transform-origin: 100% -20%;
  border-radius: 50%;
  img {
    width: 60px;
  }
  /* &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s ease;
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
  @media screen and (max-width: 1400px) {
    width: 15px;
    height: 15px;
    &::before {
      width: 35px;
      height: 35px;
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s ease;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
  }
  @media screen and (max-width: 1400px) {
    width: 15px;
    height: 15px;
    &::after {
      width: 35px;
      height: 35px;
    }
  } */
  &.active {
    transform: scale(1.2) rotate(25deg);
    /* &::before {
      border-radius: 50%;
    }
    &::after {
      border-radius: 0;
    } */
  }
`;
