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
    }
    h1,h2,h3,h4{
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-family: 'Bangers', cursive;
        @media screen and (max-width: 1600px) {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
        @media screen and (max-width: 680px) {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }
    article, li, p, a, input, textarea{
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 25px;
        letter-spacing: normal;
        font-weight: 400;
        @media screen and (max-width: 1000px) {
            line-height: 20px;
            font-size: ${({ theme }) => theme.fontSize.s};
        }
    }
    ::-webkit-scrollbar {
        width: 10px;
        background: ${({ theme }) => theme.colors.black};
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.white};
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.black};
    }
`;
