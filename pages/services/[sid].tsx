import Image from 'next/image';
import { useRouter } from 'next/router';
import Discuss from '../../components/discuss-form';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/PageTitle';
import RelatedService from '../../components/related-service';
import Scrollbar from '../../components/Scrollbar';
import ServiceSidebar from '../../components/sidebar';
import Services from '../api/service';
import ReactCompareImage from 'react-compare-image';
import before from '/public/images/service-single/before.jpg';
import after from '/public/images/service-single/after.jpg';

const ServicePage = () => {
  const router = useRouter();
  const { sid } = router.query;

  const serviceDetails =
    Services.find((service) => service.id === (sid as string)) || Services[0];

  return (
    <>
      <Navbar hclass='wpo-header-style-2' />
      <PageTitle pageTitle={serviceDetails.sTitle} pageSub={'Project'} />
      <div className='wpo-service-single-area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-12'>
              <div className='wpo-service-single-wrap'>
                <div className='wpo-service-single-item'>
                  <div className='wpo-service-single-main-img'>
                    {serviceDetails.id == 'virtual-staging' ? (
                      <ReactCompareImage
                        leftImage={before.src}
                        leftImageLabel="Before"
                        rightImage={after.src}
                        rightImageLabel="After"
                        sliderLineWidth={6}
                      />
                    ) : (
                      <Image
                        src={serviceDetails.sImg}
                        width={serviceDetails.sImg.width}
                        height={serviceDetails.sImg.height}
                        alt=''
                      />
                    )}
                  </div>
                  <div className='wpo-service-single-title'>
                    <h3>{serviceDetails.sTitle}</h3>
                  </div>
                  <p>{serviceDetails.description}</p>
                  <div className='row mt-4'>
                    <div className='col-md-6 col-sm-6 col-12'>
                      <div className='wpo-p-details-img'>
                        <img src='assets/images/service-single/2.jpg' alt='' />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-12'>
                      <div className='wpo-p-details-img'>
                        <img src='assets/images/service-single/3.jpg' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='wpo-service-single-item list-widget'>
                  <div className='wpo-service-single-title'>
                    <h3>Our Capabilities</h3>
                  </div>
                  <p>{serviceDetails.capabilitiesDes}</p>
                  <ul>
                    {serviceDetails.capabilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* <div className='wpo-service-single-item'>
                  <div className='wpo-service-single-title'>
                    <h3>Our approach</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consequat suspendisse aenean tellus augue morbi risus. Sit
                    morbi vitae morbi sed urna sed purus. Orci facilisi eros sed
                    pellentesque. Risus id sed tortor sed scelerisque.
                    Vestibulum elit elementum, magna id viverra non, velit.
                    Pretium, eros, porttitor fusce auctor vitae id. Phasellus
                    scelerisque nibh eleifend vel enim mauris purus. Rutrum vel
                    sem adipiscing nisi vulputate molestie scelerisque molestie
                    ultrices. Eu, fusce vulputate diam interdum morbi ac a.
                  </p>
                </div> */}
                <div className='wpo-service-single-item'>
                  <div className='wpo-service-single-title'>
                    <h3>Our Work Process</h3>
                  </div>
                  <p>{serviceDetails.workProcess}</p>
                </div>
                <RelatedService keyword={serviceDetails.keyword} />
                <Discuss />
              </div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </div>
      <Footer ftClass={'wpo-site-footer-s2'} />
      <Scrollbar />
    </>
  );
};

export default ServicePage;
