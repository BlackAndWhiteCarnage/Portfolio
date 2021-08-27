import styled from 'styled-components';

export const ShadowWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 0;
  &.bottom {
    bottom: 0;
  }
  &.top {
    top: 0;
  }
  z-index: 100;
  box-shadow: 0px 0px 100px 150px ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 680px) {
    box-shadow: 0px 0px 100px 100px ${({ theme }) => theme.colors.white};
  }
  @media screen and (max-width: 380px) {
    box-shadow: 0px 0px 100px 50px ${({ theme }) => theme.colors.white};
  }
`;
