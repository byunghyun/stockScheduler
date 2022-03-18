import '../styles/globals.scss';
import '../styles/antdChangeStyle.scss';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/timeline/main.css';
import '@fullcalendar/resource-timeline/main.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import DefaultTemplate from '../components/layout/DefaultTemplate';
import Header from '../components/layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Header>
      {router.pathname !== '/login' ? (
        <DefaultTemplate>
          <Component {...pageProps} />
        </DefaultTemplate>
      ) : (
        <Component {...pageProps} />
      )}
    </Header>
  );
}

export default MyApp;
