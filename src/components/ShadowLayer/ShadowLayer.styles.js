import styled from 'styled-components';

export const ShadowWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 0;
  box-shadow: 0px 0px 100px 150px ${({ theme }) => theme.colors.white};
  &.bottom {
    bottom: 0;
    @media screen and (max-width: 680px) {
      box-shadow: 0px 0px 50px 25px ${({ theme }) => theme.colors.white};
    }
  }
  &.top {
    top: 0;
    @media screen and (max-width: 680px) {
      box-shadow: 0px 0px 100px 80px ${({ theme }) => theme.colors.white};
    }
    @media screen and (max-width: 340px) {
      box-shadow: 0px 0px 50px 25px ${({ theme }) => theme.colors.white};
    }
  }
  z-index: 100;
`;
