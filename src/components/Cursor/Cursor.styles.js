import styled, { keyframes } from 'styled-components';

export const Ouch = styled.img`
  position: absolute;
  top: -80px;
  left: -80px;
  opacity: 0;
  min-width: 150px;
  transition: 0.3s ease;
  z-index: 9999999;
  &.ouch {
    transform: scale(1.3);
    transition: 0.3s ease;
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
  transition: 0.3s ease;
  z-index: 9999999;
  @media screen and (max-width: 520px) {
    top: -80px;
    left: -80px;
  }
  &.bang {
    transform: scale(1.3) rotate(-25deg);
    transition: 0.3s ease;
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
`;

const wavingHandAnim = keyframes`
50%{
  transform:  scale(1.1) rotate(-45deg);
}
`;

const emailSendAnim = keyframes`
50%{
  transform:  scale(1.1) rotate(-5deg);
}
`;

const notActiveHandAnim = keyframes`
50%{
  transform:  scale(1.7) rotate(-15deg);
}
`;

const notActiveIconAnim = keyframes`
50%{
  transform:  rotate(-15deg) translate(0, -15px);
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
  &.isntActive {
    transform: scale(1.6);
    opacity: 1;
    transition: 0.3s ease;
    animation: ${notActiveHandAnim} 2s ease infinite;
  }
  &.emailSend {
    transform: scale(1.3);
    opacity: 1;
    transition: 0.3s ease;
    animation: ${emailSendAnim} 2s ease infinite;
  }
  &.wave {
    animation: ${wavingHandAnim} 0.5s ease infinite;
    width: 120px;
    transform: scale(1);
    opacity: 1;
    transition: 0.3s ease;
  }
`;

export const IsntActiveIcon = styled.img`
  position: absolute;
  top: -60px;
  right: -80px;
  width: 80px;
  z-index: 999999;
  transition: 0.3s ease;
  opacity: 0;
  z-index: 9999999;
  &.isntActive {
    opacity: 1;
    transition: 0.3s ease;
    animation: ${notActiveIconAnim} 2s ease-in-out infinite;
  }
`;
