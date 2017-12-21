import Head from 'next/head';
import * as React from 'react';

interface Props {
  titleText?: string;
}

const Header = ({ titleText }: Props) => (
  <Head>
    <title>Title{titleText && ` | ${titleText}`}</title>
  </Head>
);

export default Header;
