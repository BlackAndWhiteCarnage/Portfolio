import styled from 'styled-components';

export const StyledDotTop = styled.div`
  position: fixed;
  left: -50%;
  top: -50%;
  width: 0%;
  height: 0%;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  background-color: #ffc10b !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23FFAD00' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
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
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  background-color: #106fca;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%230C64BE' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  transition: 1s;
  border-radius: 50%;
  z-index: 120;
  &.toggle {
    width: 400%;
    height: 200%;
    transition: 1s 0.5s ease;
  }
`;
