const MenuItems = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/about',
    title: 'About',
  },
  {
    link: '/services',
    title: 'Services and Pricing',
    children: [
      {
        link: '/services/real-estate-photography',
        title: 'Real Estate Photography',
      },
      {
        link: '/services/virtual-tour',
        title: 'Virtual Tour',
      },
      {
        link: '/services/virtual-staging',
        title: 'Virtual Staging',
      },
      {
        link: '/services/4k-video-tour',
        title: '4K Video Tour',
      },
      {
        link: '/services/brochures-feature-sheets',
        title: 'Brochures and Feature Sheets',
      },
      {
        link: '/services/drone-photos-videos',
        title: 'Drone Photos and Videos',
      },
      {
        link: '/services/agent-portrait',
        title: 'Agent Portrait',
      },
      {
        link: '/services/website-development',
        title: 'Website Development',
      },
    ],
  },
  {
    link: '/shop',
    title: 'Shop'
  },
  {
    link: '/faq',
    title: 'FAQ',
  },
  {
    link: '/contact',
    title: 'Contact',
  },
];

export default MenuItems;
