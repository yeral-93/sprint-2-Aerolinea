import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --White: hsl(0, 0%, 100%);
        --Black: hsl(0, 0%, 0%);
        --DarkGray: hsl(0, 0%, 55%);
        --VeryDarkGray: hsl(0, 0%, 41%);
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }
`;
export default GlobalStyles;