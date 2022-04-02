import { useRouter } from 'next/router';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import PageTitle from '../../../components/PageTitle';
import Scrollbar from '../../../components/Scrollbar';
import ShopDrone from '../../../components/Shop/Drone';
import ShopFeatureSheets from '../../../components/Shop/FeatureSheets';
import ShopPortrait from '../../../components/Shop/Portrait';
import ShopRealEstatePhotography from '../../../components/Shop/RealEstatePhotography';
import ShopVideoTour from '../../../components/Shop/VideoTour';
import ShopVirtualStaging from '../../../components/Shop/VirtualStaging';
import ShopVirtualTour from '../../../components/Shop/VirtualTour';
import ShopWebsite from '../../../components/Shop/Website';

const ServicePage = () => {
  const router = useRouter();
  const { sid } = router.query;

  const renderSection = () => {
    switch (sid) {
      case 'agent-portrait': 
        return <ShopPortrait />
      case 'virtual-tour': 
        return <ShopVirtualTour />
      case 'virtual-staging': 
        return <ShopVirtualStaging />
      case 'drone-photos-videos': 
        return <ShopDrone />
      case '4k-video-tour':
        return <ShopVideoTour />
      case 'brochures-feature-sheets':
        return <ShopFeatureSheets />
      case 'website-development':
        return <ShopWebsite />
      default:
        return <ShopRealEstatePhotography />;
    }
  }

  return (
    <>
      <Navbar hclass='wpo-header-style-2' />
      <PageTitle pageTitle={sid?.toString() || ''} pageSub={'Shop'} />
      {renderSection()}
      <Footer ftClass={'wpo-site-footer-s2'} />
      <Scrollbar />
    </>
  );
};

export default ServicePage;
