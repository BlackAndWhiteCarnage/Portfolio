import styled from 'styled-components';

export const StyledDotTop = styled.div`
  position: fixed;
  left: -50%;
  top: -50%;
  width: 0%;
  height: 0%;
  background: ${({ theme }) => theme.colors.black};
  transition: 1s 0.5s;
  border-radius: 50%;
  z-index: 110;
  &.toggle {
    width: 400%;
    height: 200%;
    transition: 1s ease;
  }
`;

export const StyledDotBottom = styled.div`
  position: fixed;
  right: -50%;
  bottom: -50%;
  width: 100%;
  height: 0%;
  background: ${({ theme }) => theme.colors.white};
  transition: 1s;
  border-radius: 50%;
  z-index: 120;
  &.toggle {
    width: 400%;
    height: 200%;
    transition: 1s 0.5s ease;
  }
`;