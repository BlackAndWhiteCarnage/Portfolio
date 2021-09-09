import styled from 'styled-components';

export const Ouch = styled.img`
  position: absolute;
  top: -80px;
  left: -80px;
  opacity: 0;
  min-width: 150px;
  transition: 0.2s ease;
  &.ouch {
    transform: scale(1.3);
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
    transform: scale(1.3) rotate(-25deg);
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
  &.active {
    transform: scale(1.2) rotate(25deg);
  }
`;
