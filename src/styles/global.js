import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

/**
  * Edit Styles toasts
 */

  .Toastify__toast-container {
    width: 320px;
  }

  .Toastify__toast--default {
    background: #fff;
    color: #aaa;
  }

  .Toastify__toast--info {
    background: #3498db;
  }

  .Toastify__toast--success {
    background: #07bc0c;
  }

  .Toastify__toast--warning {
    background: #f1c40f;
  }

  .Toastify__toast--error {
    background: #7159c1;
    border-radius: 4px;
    padding: 10px 20px;
    font: 14px Roboto, sans-serif;
  }

`;
