import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #342B5A;
        --dark-violet: #282145;
        --text-color: #FFF;
        --green: #00C0A4;
        --black-text: #000;
        --violet: #B96BC3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }

        @media (max-width: 720px) {
            font-size: 87.5%
        }
    }


    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h4, h5, h6, strong {
        font-weight: 600;
    }

    h3 {
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    ::selection {
        color: var(--text-color);
        background: var(--dark-violet);
    }
`