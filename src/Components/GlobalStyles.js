import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:18px;
        background-color:rgba(0, 0, 0, 1);
        color:white;
        padding-bottom:70px;
    }
    .mobileShow{
        @media only screen and (min-width: 768px) {
            display: none;
        }
    }
    .desktopShow{
        @media only screen and (max-width: 768px) {
            display: none;
        }
    }
`;

export default globalStyles;