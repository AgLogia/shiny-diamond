import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/css/font-awesome.min.css';
import '../public/css/themify-icons.css';
import '../public/css/flaticon.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../public/sass/style.scss';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Head>
        <title>Expert Real Estate Photography Services in Ontario</title>
      </Head>
      <div className='App' id='scrool'>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default MyApp;
