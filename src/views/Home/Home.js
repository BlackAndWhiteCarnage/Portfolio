import React from 'react';
import styled from 'styled-components';
import logo from 'assets/icons/logo-icon.svg';
import scroll from 'assets/icons/scroll-icon.svg';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoAndNavWrapper = styled.div`
  height: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
`;

const Scroll = styled.img`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%);
  width: 25px;
`;

const Navigation = styled.ul`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const NavItem = styled.li``;

const Line = styled.div`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
`;

const Home = () => {
  return (
    <Wrapper>
      <LogoAndNavWrapper>
        <LogoImage src={logo} />
        <Navigation>
          <NavItem>O MNIE</NavItem>
          <Line />
          <NavItem>PROJEKTY</NavItem>
          <Line />
          <NavItem>KONTAKT</NavItem>
        </Navigation>
      </LogoAndNavWrapper>
      <Scroll src={scroll} />
    </Wrapper>
  );
};

export default Home;
