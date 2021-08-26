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
    }
    h1,h2,h3,h4{
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSize.l};
    }
    article, li{
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;
