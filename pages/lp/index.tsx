import * as React from 'react';
import Head from '../../components/Head';

export default class extends React.Component {
  public static getInitialProps = async ({ renderPage }: any) => {
    return { };
  }

  public render() {
    return (
      <React.Fragment>
        <Head titleText="LP" />
        <h1>LP</h1>
      </React.Fragment>
    );
  }
}
