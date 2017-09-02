import React from 'react';
import { render } from 'react-dom';
// import theme from './Assets/theme';
// import ThemeProvider from 'react-toolbox/lib/ThemeProvider.js';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.querySelector('#root'));
registerServiceWorker();
