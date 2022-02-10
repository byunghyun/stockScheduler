import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header';
import DefaultTemplate from '../components/layout/DefaultTemplate';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import '@fullcalendar/timeline/main.css'
import '@fullcalendar/resource-timeline/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Header>
      <DefaultTemplate>
        <Component {...pageProps} />
      </DefaultTemplate>
    </Header>
  );
}

export default MyApp
