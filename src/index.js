import React from 'react';
import ReactDOM from 'react-dom';
import App from '@App';
import { Auth0Provider } from '@auth0/auth0-react';
import '@Styles/Index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={'dev-r0qdxyeq.us.auth0.com'}
      clientId={'BlwfF2xr2nmxytc05JMYcHqi12fl9WrJ'}
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
