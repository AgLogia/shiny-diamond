import Image from 'next/image';
import Logo from '../../public/images/logo.svg';
import Projects from '../../pages/api/project';
import Link from 'next/link';

interface IProps {
  ftClass: string;
}

const Footer = (props: IProps) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className={`wpo-site-footer ${props.ftClass}`}>
      <div className='wpo-upper-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='widget about-widget'>
                <div className='logo widget-title'>
                  <Link href='/'>
                    <a className='logo'>
                      <Logo height='50px'/>
                    </a>
                    {/* <Image src={Logo} width={200} height={200} alt='' /> */}
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                  Viverra laoreet ultrices donec placerat commodo elementum
                  justo, consequat.
                </p>
                <ul>
                  <li>
                    <Link href='/'>
                      <i className='ti-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <i className='ti-twitter-alt'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <i className='ti-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <i className='ti-google'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='widget link-widget'>
                <div className='widget-title'>
                  <h3>Our Services</h3>
                </div>
                <ul>
                  <li>
                    <Link href='/service-single'>
                      Perfect Planning
                    </Link>
                  </li>
                  <li>
                    <Link href='/service-single'>
                      Profesional Design
                    </Link>
                  </li>
                  <li>
                    <Link href='/service-single'>
                      Best Interior
                    </Link>
                  </li>
                  <li>
                    <Link href='/service-single'>
                      Modern Furniture
                    </Link>
                  </li>
                  <li>
                    <Link href='/service-single'>
                      Complete Decoration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='widget wpo-service-link-widget'>
                <div className='widget-title'>
                  <h3>Contact </h3>
                </div>
                <div className='contact-ft'>
                  <ul>
                    <li>
                      <i className='fi flaticon-location'></i>Toronto, ON, Canada
                    </li>
                    <li>
                      <i className='fi flaticon-telephone'></i>+ 1 (416) 433 3684
                    </li>
                    <li>
                      <i className='fi flaticon-email'></i>info@aglogia.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='widget instagram'>
                <div className='widget-title'>
                  <h3>Our Gallery</h3>
                </div>
                <ul className='d-flex'>
                  {Projects.slice(0, 6).map((project, pot) => (
                    <li key={pot}>
                      <Link
                        href={`/project-single/${project.id}`}
                      >
                        <Image src={project.pImg.src} width={project.pImg.width} height={project.pImg.height} alt='' />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wpo-lower-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col col-xs-12'>
              <ul>
                <li>
                  &copy; 2022 Arkio Template. Design By{' '}
                  <Link href='/'>
                    wpOceans
                  </Link>
                  . All Rights Reserved.
                </li>
                <li>
                  <Link href='/'>
                    Terms of use |
                  </Link>{' '}
                  <Link href='/'>
                    Privacy Environmental Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
