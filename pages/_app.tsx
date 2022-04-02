import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/css/font-awesome.min.css';
import '../public/css/themify-icons.css';
import '../public/css/flaticon.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../public/sass/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AG Logia - The Leader in Software Development Services</title>
      </Head>
      <div className="App" id='scrool'>
        <Component {...pageProps} />
        <ToastContainer/>
      </div>
    </>
  );
}

export default MyApp;
