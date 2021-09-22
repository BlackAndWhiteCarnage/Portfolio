import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-width: 550px;
  min-height: 550px;
  transform: perspective(800px) rotateY(10deg) scale(1.1);
  transition: 0.5s ease;
  z-index: 1;
  margin: 0 35px;
  background-color: ${({ theme }) => theme.comicLayer.beigeColor};
  background-image: ${({ theme }) => theme.comicLayer.beigeBackground};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  border: 4px solid ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 1366px) {
    min-width: 350px;
    min-height: 450px;
  }
  @media screen and (max-width: 760px) {
    min-height: 500px;
  }
  @media screen and (max-width: 520px) {
    max-width: unset;
    min-width: unset;
    min-height: 550px;
    width: 85%;
    margin: 0;
  }
`;

export const FormWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.label`
  width: 100%;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  min-height: 35px;
  background: none;
  padding: 10px;
  border: none;
  border: 4px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Bangers', cursive;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 100;
  transition: 0.25s ease;
  @media screen and (max-width: 1366px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  &:focus {
    outline: none;
    transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
    transition: 0.25s ease;
    background-color: ${({ theme }) => theme.comicLayer.whiteColor};
    background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
  }
  @media screen and (min-width: 1000px) {
    &:hover {
      outline: none;
      transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
      transition: 0.25s ease;
      background-color: ${({ theme }) => theme.comicLayer.whiteColor};
      background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
    }
  }
  &.VALID {
    background-color: ${({ theme }) => theme.comicLayer.greenColor};
    background-image: ${({ theme }) => theme.comicLayer.greenBackground};
    transition: 0.25s ease;
  }
  &.ERROR {
    background-color: ${({ theme }) => theme.comicLayer.redColor};
    background-image: ${({ theme }) => theme.comicLayer.redBackground};
    transition: 0.25s ease;
    pointer-events: none;
  }
`;

export const Textarea = styled.textarea`
  position: relative;
  width: 100%;
  min-height: 200px;
  background: none;
  padding: 10px;
  border: 4px solid ${({ theme }) => theme.colors.black};
  font-weight: 100;
  resize: none;
  transition: 0.25s ease;
  box-shadow: ${({ theme }) => theme.boxShadow.left};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Bangers', cursive;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 1366px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    min-height: 180px;
  }
  @media screen and (max-width: 1366px) {
    min-height: 150px;
  }
  &:focus {
    outline: none;
    transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
    transition: 0.25s ease;
    background-color: ${({ theme }) => theme.comicLayer.whiteColor};
    background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
  }
  @media screen and (min-width: 1000px) {
    &:hover {
      outline: none;
      transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.1);
      transition: 0.25s ease;
      background-color: ${({ theme }) => theme.comicLayer.whiteColor};
      background-image: ${({ theme }) => theme.comicLayer.whiteBackground};
    }
  }
  &.VALID {
    background-color: ${({ theme }) => theme.comicLayer.greenColor};
    background-image: ${({ theme }) => theme.comicLayer.greenBackground};
    transition: 0.25s ease;
  }
  &.ERROR {
    background-color: ${({ theme }) => theme.comicLayer.redColor};
    background-image: ${({ theme }) => theme.comicLayer.redBackground};
    transition: 0.25s ease;
    pointer-events: none;
  }
`;
