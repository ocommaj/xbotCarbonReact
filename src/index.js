import React from 'react';
import ReactDOM from 'react-dom';
import App from '@App';
import { Auth0Provider } from '@auth0/auth0-react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@Styles/Index.scss';

const apolloClient = new ApolloClient({
  uri: "http://localhost:4002",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={'dev-r0qdxyeq.us.auth0.com'}
      clientId={'BlwfF2xr2nmxytc05JMYcHqi12fl9WrJ'}
      redirectUri={window.location.origin}>
      <ApolloProvider client={ apolloClient }>
        <App />
      </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
