import React, { useState } from 'react';
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
  z-index: 9999;
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
  /* background: ${({ theme }) => theme.colors.black}; */
  backdrop-filter: invert(100%);
  transition: 0.5s ease;
  &:nth-child(1) {
    width: 100%;
    &.toggle {
      width: 50%;
    }
  }
  &:nth-child(2) {
    width: 20%;
    &.toggle {
      width: 80%;
    }
  }
  &:nth-child(3) {
    width: 70%;
    &.toggle {
      width: 20%;
    }
  }
  &:nth-child(4) {
    width: 40%;
    &.toggle {
      width: 100%;
    }
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

const ModalWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 150;
  transition: 0.5s 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  pointer-events: none;
  &.toggle {
    opacity: 1;
    pointer-events: all;
    transition: 0.5s 0.5s;
  }
`;

const LinksWrapper = styled.ul`
  list-style: none;
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledDotTop = styled.div`
  position: fixed;
  left: -50%;
  top: -50%;
  width: 0%;
  height: 0%;
  background: ${({ theme }) => theme.colors.black};
  transition: 1s 0.5s;
  border-radius: 50%;
  z-index: 100;
  &.toggle {
    width: 400%;
    height: 200%;
    transition: 1s ease;
  }
`;

const StyledDotBottom = styled.div`
  position: fixed;
  right: -50%;
  bottom: -50%;
  width: 100%;
  height: 0%;
  background: ${({ theme }) => theme.colors.white};
  transition: 1s;
  border-radius: 50%;
  z-index: 100;
  &.toggle {
    width: 400%;
    height: 200%;
    transition: 1s 0.5s ease;
  }
`;

const Link = styled.li`
  cursor: pointer;
  position: relative;
  z-index: 10;
  padding: 10px;
  @media screen and (min-width: 1200px) {
    &::before {
      position: absolute;
      content: '${(props) => props.text}';
      top: -100%;
      left: 50%;
      transform: translate(-50%);
      font-size: 100px;
      white-space: nowrap;
      opacity: 0;
      font-weight: 400;
      transition: 0.5s ease;
      color: #efefef;
      z-index: -1;
      pointer-events: none;
    }
    &::after {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%);
      content: '';
      width: 100%;
      height: 0%;
      background: ${({ theme }) => theme.colors.black};
      z-index: -1;
      transition: 0.5s ease;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      transition: 0.5s ease;
      &::after {
        transition: 0.5s ease;
        height: 100%;
      }
      &::before {
        transition: 0.5s ease;
        opacity: 1;
      }
    }
  }
`;

const Navigation = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <Wrapper>
        <HamburgerMenu id='active' onClick={toggleModalHandler}>
          <Line className={toggleModal && 'toggle'} />
          <Line className={toggleModal && 'toggle'} />
          <Line className={toggleModal && 'toggle'} />
          <Line className={toggleModal && 'toggle'} />
        </HamburgerMenu>
        <SocialMedia>
          <Icon src={facebook} id='active' />
          <Icon src={github} id='active' />
        </SocialMedia>
      </Wrapper>
      <ModalWrapper className={toggleModal && 'toggle'}>
        <LinksWrapper>
          <Link id='active' text='O MNIE'>
            O MNIE
          </Link>
          <Link id='active' text='PROJEKTY'>
            PROJEKTY
          </Link>
          <Link id='active' text='PORTFOLIO'>
            PORTFOLIO
          </Link>
        </LinksWrapper>
      </ModalWrapper>
      <StyledDotTop className={toggleModal && 'toggle'} />
      <StyledDotBottom className={toggleModal && 'toggle'} />
    </>
  );
};

export default Navigation;
