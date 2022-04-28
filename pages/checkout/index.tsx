import React, { Fragment } from 'react';
import CheckoutSection from '../../components/CheckoutSection';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/PageTitle';
import Scrollbar from '../../components/Scrollbar';

const CheckoutPage = () => {
  return (
    <Fragment>
       <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-10840716317/rJguCNyf2LQDEJ3ooLEo'});
        `,
        }}
      />
      <Navbar hclass={'wpo-header-style-2'} />
      <PageTitle pageTitle={'Booking'} pageSub={'Booking'} />
      <CheckoutSection />
      <Footer ftClass={'wpo-site-footer-s2'} />
      <Scrollbar />
    </Fragment>
  );
};
export default CheckoutPage;
