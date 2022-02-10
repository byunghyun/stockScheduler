import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};
const Header = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=1560, height=device-height, initial-scale=0.7, maximum-scale=3.0, minimum-scale=0.25, user-scalable=yes'
        />
        <title>{'credia'}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/cat.png' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='msapplication-config' content='browserconfig.xml' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://pc.vetflux.com/' />
        <meta property='og:title' content='벳플럭스' />
        <meta property='og:image' content='/logo.png' />
        <meta property='og:description' content='동물병원 메신저 서비스' />
        <meta property='og:site_name' content='벳플럭스' />
        <meta property='og:locale' content='KO' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      {children}
    </>
  );
};

export default Header;