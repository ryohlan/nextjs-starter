import 'babel-polyfill';
import 'isomorphic-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Document, { Head, Main, NextScript } from 'next/document';
import * as React from 'react';

export default class MyDocument extends Document {
  public static getInitialProps = async ({ renderPage }: any) => {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks };
  }

  public render() {
    return (
      <html>
        <Head>
          <title>Title</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" type="text/css" href="/static/css/default.css" media="screen" />
        </Head>
        <body>
        <MuiThemeProvider>
          <Main />
          <NextScript />
        </MuiThemeProvider>
        </body>
      </html>
    );
  }
}
