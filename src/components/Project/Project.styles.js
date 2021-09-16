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
  border: 4px solid ${({ theme }) => theme.colors.black};
  transform: scale(0);
  background-color: ${({ theme }) => theme.comicLayer.yellowColor};
  background-image: ${({ theme }) => theme.comicLayer.yellowBackground};
  &.show,
  &.next,
  &.prev {
    transition: 0.5s ease;
  }
  &.show {
    z-index: 20;
    transform: scale(1);
    opacity: 1;
    left: 0;
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
  border: 4px solid ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 760px) {
    &:hover {
      transform: scale(1.025);
    }
  }
`;
