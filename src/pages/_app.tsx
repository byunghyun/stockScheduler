import '../styles/globals.scss'
import '../styles/antdChangeStyle.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Layout/Header';
import DefaultTemplate from '../components/Layout/DefaultTemplate';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import '@fullcalendar/timeline/main.css'
import '@fullcalendar/resource-timeline/main.css'
import 'antd/dist/antd.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Header>
      {router.pathname !== '/login' ? (<DefaultTemplate>
        <Component {...pageProps} />
      </DefaultTemplate>) : <Component {...pageProps} /> }
    </Header>
  );
}

export default MyApp
