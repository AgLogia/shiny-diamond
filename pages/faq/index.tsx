import {
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import FaqSection from '../../components/FaqSection';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/PageTitle';
import Scrollbar from '../../components/Scrollbar';

const FaqPage = () => (
  <>
    <Navbar hclass={'wpo-header-style-2'} />
    <PageTitle pageTitle={'FAQ'} pageSub={'FAQ'} />
    <FaqSection />
    <Footer ftClass={'wpo-site-footer-s2'} />
    <Scrollbar />
  </>
);

export default FaqPage;
