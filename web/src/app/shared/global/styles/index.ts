import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --toastify-toast-width: 40%;
        --toastify-color-warning: #FF9100;

        --light-blue: #77a5f9;
        --blue: #3C7EF7;
        --white: #fff;
        --light-gray: #F8F8F8;
        --gray-10opc: #464E5F;
        --gray-20opc: #55565a33;
        --red: #FF4F4F;
        --green: #00BEA4;
        --yellow: #FFB440;

        --main-color: #A4C5B3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    
    body {
        background: #ffffff;
        font-family: 'Julius Sans One', sans-serif;

    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        border: 1px solid rgba(225, 228, 232, 0.75);
        margin-left: .938em;
        margin-right: .938em;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(225, 228, 232, 0.8);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #3C7EF733
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    ul, li, a {
        text-decoration: none;
        list-style: none;
        
    }



`;
