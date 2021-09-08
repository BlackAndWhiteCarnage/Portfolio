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
        background: ${({ theme }) => theme.colors.white};
        letter-spacing: 5px;
        cursor: none;
    }
    h1,h2,h3,h4{
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-family: 'Bangers', cursive;
        @media screen and (max-width: 1600px) {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
        /* @media screen and (max-width: 680px) {
            font-size: ${({ theme }) => theme.fontSize.m};
        } */
    }
    article, p, a, input, textarea, label{
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 25px;
        letter-spacing: normal;
        font-weight: 400;
        cursor: none;
        @media screen and (max-width: 1000px) {
            line-height: 20px;
            /* font-size: ${({ theme }) => theme.fontSize.s}; */
        }
    }
    ::-webkit-scrollbar {
        width: 10px;
        background: #FFB806;
    }
    ::-webkit-scrollbar-track {
        background: #FFB806;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #106FCA;
    }
`;
