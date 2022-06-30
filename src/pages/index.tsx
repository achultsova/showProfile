import React, { FC } from 'react';
import Head from 'next/head';
import { MainProps } from '../types';

const Main: FC<MainProps> = ({ filters, data, main }) => {
  console.log(filters, data);
  return (
    <>
      <Head>
        <title>Main Page Events ItechArt</title>
        <meta name="keywords" content="Another keywords" />
        <meta name="description" content="Another description" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="stylesheet" href="../shared/configs/styles/global.css" />
      </Head>
    </>
  );
};

export default Main;
