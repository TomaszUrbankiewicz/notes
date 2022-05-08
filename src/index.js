import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './view/root/Root';
import GlobalStyle from './theme/GlobalStyle'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Root />
  </React.StrictMode>
);


