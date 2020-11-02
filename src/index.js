import React from 'react';
import ReactDOM from 'react-dom';
import App from '@App';
import { Auth0Provider } from '@auth0/auth0-react';
import '@Styles/Index.scss';

const auth0props = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENTID,
  redirectUri: window.location.origin
}

console.log(process.env.AUTH0_DOMAIN)

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0props.domain}
      clientId={auth0props.clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
