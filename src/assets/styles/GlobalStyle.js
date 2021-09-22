import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Bangers', cursive;
        overflow-x: hidden;
        color: ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.comicLayer.beigeColor};
        background-image: ${({ theme }) => theme.comicLayer.beigeBackground};
        @media screen and (min-width: 1200px){
            cursor: none;
        }
    }
    h1,h2,h3,h4{
        font-size: ${({ theme }) => theme.fontSize.xl};
        letter-spacing: 2px;
        @media screen and (max-width: 1366px) {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }
    article, p, a, input, textarea, label, ol{
        font-size: ${({ theme }) => theme.fontSize.l};
        @media screen and (min-width: 1200px){
            cursor: none;
        }
        @media screen and (max-width: 1366px) {
            line-height: 20px;
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }
    ::-webkit-scrollbar {
        width: 10px;
        background: #E0D5C7;
        border-left: 3px dashed ${({ theme }) => theme.colors.black};
    }
    ::-webkit-scrollbar-track {
        background: #E0D5C7;
        width: 10px;
        border-left: 3px dashed ${({ theme }) => theme.colors.black};

    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.comicLayer.yellowColor};
    }
`;
