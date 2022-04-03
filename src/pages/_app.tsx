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
import { Provider } from 'react-supabase'

import DefaultTemplate from '../components/Layout/DefaultTemplate';
import Header from '../components/Layout/Header';
import { runSupabase } from '../service/initializeSuapbase';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    // <Provider value={runSupabase}>
    <Header>
      {router.pathname !== '/login' ? (
        <DefaultTemplate>
          <Component {...pageProps} />
        </DefaultTemplate>
      ) : (
        <Component {...pageProps} />
      )}
    </Header>
    // </Provider>
  );
}

export default MyApp;
