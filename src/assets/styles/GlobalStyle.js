import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
        overflow-x: hidden;
        color: ${({ theme }) => theme.colors.black};
        background: ${({ theme }) => theme.colors.white};
        letter-spacing: 5px;
    }
    h1,h2,h3,h4{
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSize.l};
    }
    article, li{
        font-size: ${({ theme }) => theme.fontSize.m};
        @media screen and (max-width: 680px) {
            /* font-size: ${({ theme }) => theme.fontSize.s}; */
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
