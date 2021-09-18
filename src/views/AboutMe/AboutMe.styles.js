import styled from 'styled-components';

export const AboutMeContentWrapper = styled.div`
  min-width: 350px;
  max-width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: perspective(800px) rotateY(10deg) scale(1.1);
  z-index: 1;
  margin: 0 35px;
  @media screen and (max-width: 1366px) {
    height: 350px;
    max-width: 300px;
  }
  @media screen and (max-width: 760px) {
    width: 350px;
    height: auto;
  }
  @media screen and (max-width: 520px) {
    max-width: unset;
    min-width: unset;
    width: 85%;
    margin: 0;
  }
`;

export const Header = styled.h4`
  width: 100%;
  margin-bottom: 40px;
  text-align: right;
  text-transform: uppercase;
  &.left {
    text-align: left;
  }
`;

export const Article = styled.article`
  margin-bottom: 30px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 520px) {
    min-height: 130px;
  }
`;
