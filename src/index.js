import React from 'react';
import ReactDOM from 'react-dom';
import App from '@App';
import { Auth0, Apollo } from '@Providers';
import '@Styles/Index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Auth0>
      <Apollo>
        <App />
      </Apollo>
    </Auth0>
  </React.StrictMode>,
  document.getElementById('root')
);
