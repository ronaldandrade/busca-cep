import { createGlobalStyle } from 'styled-components';
import mylocationImg from '../assets/mylocation.svg'

export default createGlobalStyle `
    *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;

    }

    body {
      background: #09031A no-repeat center/20em url(${mylocationImg});
      -webkit-font-smoothing: antialiased
    }
    body, input, button {
        font: 1rem Roboto, sans-serif;
    }
    #root {
        max-width: 700px;
        margin: 0 auto;
        padding: 2.4rem 1.4rem
    }
    button {
        cursor: pointer;
    }
`;
