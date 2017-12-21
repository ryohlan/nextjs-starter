import 'babel-polyfill';
import 'isomorphic-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import Head from './Head';

const app = ({ children, title }: {children: any, title?: string}) => (
  <MuiThemeProvider>
    <main>
      <Head titleText={title} />
      {children}
    </main>
  </MuiThemeProvider>
);

export default app;
