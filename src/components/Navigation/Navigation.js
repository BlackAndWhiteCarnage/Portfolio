import React from 'react';
import styled from 'styled-components';
import facebook from 'assets/icons/facebook-icon.svg';
import github from 'assets/icons/github-icon.svg';

const Wrapper = styled.nav`
  position: fixed;
  width: 90%;
  max-width: 1920px;
  height: 30px;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 680px) {
    top: 20px;
  }
`;

const HamburgerMenu = styled.nav`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media screen and (max-width: 680px) {
    width: 40px;
  }
`;

const Line = styled.nav`
  height: 1px;
  pointer-events: none;
  background: ${({ theme }) => theme.colors.black};
  &:nth-child(1) {
    width: 100%;
  }
  &:nth-child(2) {
    width: 20%;
  }
  &:nth-child(3) {
    width: 70%;
  }
  &:nth-child(4) {
    width: 40%;
  }
`;

const SocialMedia = styled.nav`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <HamburgerMenu id='active'>
        <Line />
        <Line />
        <Line />
        <Line />
      </HamburgerMenu>
      <SocialMedia>
        <Icon src={facebook} id='active' />
        <Icon src={github} id='active' />
      </SocialMedia>
    </Wrapper>
  );
};

export default Navigation;
