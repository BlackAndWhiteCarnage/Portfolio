import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
  opacity: 0;
  &.show {
    pointer-events: all;
  }
  z-index: 1000;
`;

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
  transition: 0.5s ease;
  transform: scale(0);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);

  &.show,
  &.next,
  &.prev {
    cursor: pointer;
    transition: 0.5s ease;
  }
  &.show {
    transform: scale(1);
    opacity: 1;
    left: 0;
    z-index: 20;
  }
  &.next,
  &.prev {
    opacity: 0.2;
    transform: scale(0.5);
    z-index: 10;
  }
  &.next {
    left: 100%;
    @media screen and (max-width: 1280px) {
      left: 50%;
    }
  }
  &.prev {
    left: -100%;
    @media screen and (max-width: 1280px) {
      left: -50%;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
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
  font-size: ${({ theme }) => theme.fontSize.m};
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
    right: -35px;
    transition: 0.5s 1s ease;
    opacity: 1;
    @media screen and (max-width: 680px) {
      bottom: -50px;
    }
  }
  @media screen and (max-width: 680px) {
    height: auto;
    width: 40%;
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
  @media screen and (max-width: 680px) {
    margin: 0;
  }
`;
