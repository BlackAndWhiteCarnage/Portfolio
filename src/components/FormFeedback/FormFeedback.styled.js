import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.2s ease;
  pointer-events: none;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &.SHOW {
    pointer-events: all;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
`;

export const FeedbackMessage = styled.p`
  position: absolute;
  top: 0;
  left: -100%;
  color: #fbda00;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background: ${({ theme }) => theme.colors.black};
  padding: 20px;
  line-height: normal;
  &.SHOW {
    left: 0;
    transition: 0.5s 0.25s ease;
  }
`;
