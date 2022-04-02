import About2 from '../../components/About2';
import Footer from '../../components/Footer';
import FunFact from '../../components/FunFact';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/PageTitle';
import Scrollbar from '../../components/Scrollbar';
import Testimonial from '../../components/Testimonial';

const AboutPage = () => {
  return (
    <>
      <Navbar hclass={'wpo-header-style-2'} />
      <PageTitle pageTitle='About Us' pageSub='About' />
      <About2 />
      {/* <ProjectSection /> */}
      {/* <ServiceSection /> */}
      <FunFact fnClass={'wpo-fun-fact-section-s2'} />
      {/* <Pricing /> */}
      {/* <TeamSection /> */}
      <Testimonial />
      <Footer ftClass={'wpo-site-footer-s2'} />
      <Scrollbar />
    </>
  );
};
export default AboutPage;
