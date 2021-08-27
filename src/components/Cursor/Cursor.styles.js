import styled from 'styled-components';

export const CursorWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.5s ease;
  transition-property: transform;
  /* transform-origin: 130% 130%; */
  transform-origin: 100% -20%;
  /* border: 2px solid white; */
  /* backdrop-filter: invert(100%); */
  border-radius: 50%;
  &::before {
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
  }
  &.active {
    /* backdrop-filter: invert(100%); */
    /* transform: scale(1.5 */
    /* border: none; */
    /* border-radius: 50%; */
    /* backdrop-filter: invert(100%); */
    transform: scale(1.2) rotate(45deg);
    /* background: rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.5); */
    /* transform-origin: 100% 0; */
    /* border-radius: 50%; */
    &::before {
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.white};
    }
    &::after {
      border-radius: 0;
    }
  }
`;
