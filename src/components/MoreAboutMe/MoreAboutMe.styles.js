import styled from 'styled-components';

export const ReadMoreWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 150;
  transition: 0.5s ease;
  opacity: 0;
  transform: scale(2);
  overflow-y: scroll;
  padding: 250px 0;
  @media screen and (max-width: 1000px) {
    padding: 150px 0;
  }
  &.show {
    transform: scale(1);
    transition: 1s 0.5s ease;
    opacity: 1;
    pointer-events: all;
  }
`;

export const ReadMore = styled.div`
  width: 60%;
  min-height: 600px;
  height: auto;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

export const Header = styled.h4`
  width: 100%;
  margin-bottom: 50px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 30px;
  }
`;

export const Answer = styled.p`
  width: 100%;
  margin-bottom: 80px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 60px;
  }
`;
