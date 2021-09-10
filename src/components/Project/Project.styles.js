import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  transform: scale(0);
  &.show,
  &.next,
  &.prev {
    transition: 0.3s ease;
    @media screen and (max-width: 520px) {
      transition: 0.6s ease;
    }
  }
  &.show {
    transform: scale(1);
    opacity: 1;
    left: 0;
    z-index: 20;
    @media screen and (min-width: 760px) {
      &:hover {
        transform: scale(1.025);
        transition: 0.5s ease;
      }
    }
    @media screen and (max-width: 520px) {
      transform: scale(0.8);
    }
  }
  &.next,
  &.prev {
    opacity: 0.3;
  }
  &.next {
    left: 100%;
    transform: perspective(400px) rotateY(-25deg) scale(0.7) rotate(25deg);
    @media screen and (min-width: 760px) {
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
    @media screen and (max-width: 1366px) {
      left: 70%;
    }
    @media screen and (max-width: 520px) {
      left: unset;
      top: 70%;
    }
  }
  &.prev {
    left: -100%;
    transform: perspective(400px) rotateY(25deg) scale(0.7) rotate(-25deg);
    @media screen and (min-width: 760px) {
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
    @media screen and (max-width: 1366px) {
      left: -70%;
    }
    @media screen and (max-width: 520px) {
      left: unset;
      top: -70%;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  @media screen and (min-width: 760px) {
    &:hover {
      transform: scale(1.05);
    }
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
    right: -65px;
    transition: 0.5s 0.5s ease;
    opacity: 1;
    @media screen and (max-width: 760px) {
      bottom: -70px;
      width: 100%;
    }
  }
  @media screen and (max-width: 760px) {
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
  pointer-events: all;
  z-index: 9999 !important;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.right};
  border-radius: 50%;
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  @media screen and (min-width: 760px) {
    &:hover {
      transition: 0.5s ease;
      transform: scale(1.2);
      background-color: ${({ theme }) => theme.comicLayer.greenColor};
      background-image: ${({ theme }) => theme.comicLayer.greenBackground};
    }
  }
`;
