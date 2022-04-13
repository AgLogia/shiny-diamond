import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/PageTitle';
import Scrollbar from '../../components/Scrollbar';

const ContactPage = () => {
  return (
    <>
      <Navbar hclass={'wpo-header-style-2'} />
      <PageTitle pageTitle={'Contact Us'} pageSub={'Contact'} />
      <ContactSection />
      <Footer ftClass={'wpo-site-footer-s2'} />
      <Scrollbar />
    </>
  );
};
export default ContactPage;
