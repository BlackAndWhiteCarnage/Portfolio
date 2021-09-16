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
        /* background: ${({ theme }) => theme.colors.white}; */
        @media screen and (min-width: 1200px){
            cursor: none;
        }
    }
    h1,h2,h3,h4{
        font-size: ${({ theme }) => theme.fontSize.xl};
        letter-spacing: 5px;
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
        background: ${({ theme }) => theme.colors.black};
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.black};
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.comicLayer.yellowColor};
    }
`;
