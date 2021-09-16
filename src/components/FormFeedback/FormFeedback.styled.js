import styled, { keyframes } from 'styled-components';

const feedbackAnim = keyframes`
25%{
  transform: rotate(-5deg) scale(0.6);
}
75%{
  transform: rotate(5deg) scale(0.8);
}
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.2s ease;
  pointer-events: none;
  opacity: 0;
  img {
    z-index: 10;
    width: 100%;
    opacity: 1;
    height: 100%;
    animation: ${feedbackAnim} 2s infinite;
  }
  &.SHOW {
    pointer-events: all;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
  &.ERROR {
    opacity: 1;
    transition: 0.2s ease;
    background: rgba(0, 0, 0, 0.2);
  }
`;
