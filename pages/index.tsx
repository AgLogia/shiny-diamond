import type { NextPage } from 'next';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import ProjectSection from '../components/Projects';
import Scrollbar from '../components/Scrollbar';
import Testimonial from '../components/Testimonial';

const Home: NextPage = () => {
  return (
    <>
      <Navbar hclass={'wpo-header-style-3'} />
      <Hero />
      <About />
      <ProjectSection />
      <Pricing pClass={''} />
      <Testimonial />
      <Footer ftClass={'wpo-site-footer-s2'} />
      <Scrollbar />
      {/* 
      <ServiceSection3 ptClass={'pt-0'} />
      <ProjectSectionS4 />
      <Pricing pClass={'wpo-pricing-section-s2'} />
      <BlogSectionS2 />
       */}
    </>
  );
};

export default Home;
