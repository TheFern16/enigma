import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'react-css-themr';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>, document.querySelector('#root'));
registerServiceWorker();
