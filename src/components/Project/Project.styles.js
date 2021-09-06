import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  left: 0;
  transition: 0.5s ease-out;
  transform: scale(0);
  box-shadow: ${({ theme }) => theme.boxShadow.l};
  @media screen and (max-width: 680px) {
    box-shadow: ${({ theme }) => theme.boxShadow.s};
  }
  &.show,
  &.next,
  &.prev {
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
  &.show {
    transform: scale(1);
    opacity: 1;
    left: 0;
    z-index: 20;
    @media screen and (min-width: 1200px) {
      &:hover {
        transform: scale(1.025);
        transition: 0.3s ease-out;
      }
    }
  }
  &.next,
  &.prev {
    opacity: 0.2;
    transform: scale(0.5);
    z-index: 10;
    /* @media screen and (min-width: 1200px) {
      &:hover {
        opacity: 0.8;
      }
    } */
  }
  &.next {
    left: 100%;
    transform: perspective(400px) rotateY(-15deg) scale(0.65);
    &:hover {
      opacity: 0.8;
      transform: perspective(800px) rotateY(-15deg) scale(0.65);
      transition: 0.3s ease-out;
    }
    @media screen and (max-width: 1920px) {
      left: 80%;
    }
    @media screen and (max-width: 1280px) {
      left: 50%;
    }
  }
  &.prev {
    left: -100%;
    transform: perspective(400px) rotateY(15deg) scale(0.65);
    &:hover {
      opacity: 0.8;
      transform: perspective(800px) rotateY(15deg) scale(0.65);
      transition: 0.3s ease-out;
    }
    @media screen and (max-width: 1920px) {
      left: -80%;
    }
    @media screen and (max-width: 1280px) {
      left: -50%;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  object-fit: cover;
`;

export const ProjectTitle = styled.h2`
  position: absolute;
  top: 0;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  pointer-events: none;
  text-transform: uppercase;
  opacity: 0;
  transition: 0.5s ease;
  font-size: ${({ theme }) => theme.fontSize.xl};
  &.show {
    top: -60px;
    transition: 0.5s 0.5s ease;
    opacity: 1;
    @media screen and (max-width: 680px) {
      top: -45px;
    }
  }
  @media screen and (max-width: 680px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const ProjectLinksWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: 100%;
  pointer-events: none;
  text-transform: uppercase;
  opacity: 0;
  transition: 0.5s ease;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  z-index: -1;
  &.show {
    pointer-events: all;
    right: -65px;
    transition: 0.5s 0.5s ease;
    opacity: 1;
    @media screen and (max-width: 680px) {
      bottom: -75px;
    }
  }
  @media screen and (max-width: 680px) {
    height: auto;
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    right: unset;
    top: unset;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Links = styled.a`
  margin-top: 30px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  transition: 1s ease;
  background: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.black};
  box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.black};
  &:hover {
    transform: rotateY(180deg) scale(1.2) rotate(360deg);
    transition: 1s ease;
  }
  img {
    width: 100%;
    @media screen and (min-width: 1200px) {
      transition: 0.3s ease;
    }
  }
  @media screen and (max-width: 680px) {
    width: 40px;
    height: 40px;
  }
`;
