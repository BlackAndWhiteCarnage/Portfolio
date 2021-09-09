import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  /* transition: 0.5s ease; */
  transform: scale(0);
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  @media screen and (max-width: 1000px) {
    height: 500px;
  }
  @media screen and (max-width: 680px) {
    height: 400px;
  }
  &.show,
  &.next,
  &.prev {
    transition: 0.3s ease;
  }
  &.show {
    transform: scale(1);
    opacity: 1;
    left: 0;
    z-index: 20;
    background-color: #d62e2e;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%239B2122' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    @media screen and (min-width: 1200px) {
      &:hover {
        transform: scale(1.025);
        transition: 0.5s ease;
      }
    }
  }
  &.next,
  &.prev {
    opacity: 0.3;
  }
  &.next {
    left: 100%;
    transform: perspective(400px) rotateY(-25deg) scale(0.7) rotate(25deg);
    @media screen and (min-width: 1200px) {
      &:hover {
        opacity: 0.8;
        transition: 0.5s ease;
        img {
          transform: rotate(-30deg);
        }
      }
    }
    @media screen and (max-width: 1920px) {
      left: 80%;
    }
    @media screen and (max-width: 1280px) {
      left: 70%;
    }
  }
  &.prev {
    left: -100%;
    transform: perspective(400px) rotateY(25deg) scale(0.7) rotate(-25deg);
    @media screen and (min-width: 1200px) {
      &:hover {
        opacity: 0.8;
        transition: 0.5s ease;
        img {
          transform: rotate(30deg);
        }
      }
    }
    @media screen and (max-width: 1920px) {
      left: -80%;
    }
    @media screen and (max-width: 1280px) {
      left: -70%;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 120%;
  height: auto;
  transition: 0.5s ease;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  pointer-events: none;
  @media screen and (min-width: 1000px) {
    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 680px) {
    width: 85%;
  }
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
      top: -135px;
    }
  }
  @media screen and (max-width: 680px) {
    top: -45px;
    height: 130px;
    display: flex;
    align-items: flex-end;
    text-align: left;
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
  min-width: 50px;
  min-height: 50px;
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  z-index: 9999 !important;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  border-radius: 50%;
  transition: 0.5s ease;
  background-color: #ffc10b !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%23FFAD00' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
  @media screen and (max-width: 1200px) {
    min-width: 40px;
    min-height: 40px;
  }
  @media screen and (min-width: 1000px) {
    &:hover {
      transition: 0.5s ease;
      transform: scale(1.2);
      background-color: #a3ed0a !important;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 4 4'%3E%3Cpath fill='%2343B104' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") !important;
    }
  }
`;
