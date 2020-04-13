import withRedux from 'next-redux-wrapper';
import React from 'react';
import { Provider } from 'react-redux';

import makeStore from '../lib/redux';
import { checkServerSideCookie } from '../lib/redux/actions/authA';

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // we can dispatch from here too
  // ctx.store.dispatch({ type: 'FOO', payload: 'foo from _app' });
  checkServerSideCookie(ctx);

  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
};

export default withRedux(makeStore)(MyApp);
