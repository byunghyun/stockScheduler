import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React, { ReactNode } from 'react';

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <script
            src='https://apis.google.com/js/platform.js'
            async
            defer
          ></script>
          <meta
            name='google-signin-client_id'
            content='937994307608-l3d831vgkq05bslufdl3f1bjd2qfbnmb.apps.googleusercontent.com'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
