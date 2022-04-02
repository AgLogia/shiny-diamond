import React, { Fragment } from 'react';
import CheckoutSection from '../../components/CheckoutSection';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/PageTitle';
import Scrollbar from '../../components/Scrollbar';

const CheckoutPage = () => {
  return (
    <Fragment>
      <Navbar hclass={'wpo-header-style-2'} />
      <PageTitle pageTitle={'Booking'} pageSub={'Booking'} />
      <CheckoutSection />
      <Footer ftClass={'wpo-site-footer-s2'} />
      <Scrollbar />
    </Fragment>
  );
};
export default CheckoutPage;
