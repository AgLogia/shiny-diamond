import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const FAQItems = [
  {
    title:
      'What are some of the benefits of using a drone to take pictures of a house?',
    desc: 'Drones can be used for various purposes such as photography, videography, surveying, mapping and inspection. Drones can be used to take pictures of a house and provide a new perspective. They can also be used to measure the size of the house or even help find structural defects.',
  },
  {
    title: 'Who should I contact about billing information?',
    desc: 'If you have any billing queries, please contact our customer service team. They are available to answer your questions Monday to Friday, 11am-6pm (GMT) and Saturday 10am-3pm. You can also email us at info@aglogia.com',
  },
  {
    title: 'Do I need to enter my billing information to use this site?',
    desc: 'No, you do not need to enter your billing information to use this site. We only need your address for….',
  },
  {
    title: 'What are the benefits of bundle plans?',
    desc: 'Bundle plans offer customers the opportunity to enjoy a discounted price for products or services when they purchase more than one item. Among the benefits of bundle plans is that they allow consumers to save money.',
  },
  {
    title: 'Do I need to be at home when the photography session begins?',
    desc: "No, you don't need to be at home when the photography session begins. You can either do it remotely or in person. This way of doing things is beneficial for people who live in remote areas or have a busy schedule. It's also good for those who want to feel more comfortable and be able to have the photographer move around freely without feeling self-conscious about their surroundings.",
  },
  {
    title: 'How long does the photography session last?',
    desc: 'The photography session usually lasts for up to 3-4 hours.',
  },
  {
    title: 'What are the payment options for the single photography service?',
    desc: 'There are a number of payment options for the single photography service. You can pay for the service in full or you can pay a deposit and make monthly payments. may offer different payment options to suit your needs.',
  },
];

const FaqSection = () => (
  <div className='section-padding'>
    <div className='container'>
      {FAQItems.map((item) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
            <h4>{item.title}</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  </div>
);

export default FaqSection;
