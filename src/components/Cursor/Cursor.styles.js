import styled, { keyframes } from 'styled-components';

export const Ouch = styled.img`
  position: absolute;
  top: -80px;
  left: -80px;
  opacity: 0;
  min-width: 150px;
  transition: 0.2s ease;
  z-index: 9999999;
  &.ouch {
    transform: scale(1.3);
    transition: 0.2s ease;
    opacity: 1;
    @media screen and (max-width: 520px) {
      transform: scale(0.8) rotate(-25deg);
    }
  }
`;

export const Bang = styled.img`
  position: absolute;
  top: -50px;
  left: -50px;
  opacity: 0;
  min-width: 200px;
  transition: 0.2s ease;
  z-index: 9999999;
  @media screen and (max-width: 520px) {
    top: -80px;
    left: -80px;
  }
  &.bang {
    transform: scale(1.3) rotate(-25deg);
    transition: 0.2s ease;
    opacity: 1;
    @media screen and (max-width: 520px) {
      transform: scale(0.8) rotate(-25deg);
    }
  }
`;

export const CursorWrapper = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  position: fixed;
  top: 50%;
  left: 80%;
  z-index: 999999;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.5s ease;
  transition-property: transform;
  transform-origin: 100% -20%;
  border-radius: 50%;
  &.active {
    transform: scale(1.2) rotate(25deg);
  }
`;

const waveAnim = keyframes`
50%{
  transform:  scale(1.1) rotate(-45deg);
}
`;

const emailSendAnim = keyframes`
50%{
  transform:  scale(1.1) rotate(-5deg);
}
`;

export const CursorImage = styled.img`
  position: absolute;
  width: 80px;
  z-index: 999999;
  transform: scale(0);
  transition: 0.3s ease;
  opacity: 0;
  &.show {
    transform: scale(1);
    opacity: 1;
    transition: 0.3s ease;
  }
  &.emailSend {
    transform: scale(1.3);
    opacity: 1;
    transition: 0.3s ease;
    animation: ${emailSendAnim} 2s ease infinite;
  }
  &.showText {
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
    transition: 0.3s ease;
  }
  &.wave {
    animation: ${waveAnim} 0.5s ease infinite;
    width: 120px;
    transform: scale(1);
    opacity: 1;
    transition: 0.3s ease;
  }
`;

export const CursorText = styled.p`
  position: absolute;
  z-index: 9999;
  white-space: nowrap;
  transition: 0.3s ease;
  opacity: 0;
  right: -300px;
  top: 20px;
  &.showText {
    transition: 0.3s ease;
    opacity: 1;
  }
`;
