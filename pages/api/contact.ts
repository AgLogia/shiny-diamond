import { NextApiRequest, NextApiResponse } from 'next';

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
  status: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const body = JSON.parse(req.body);
  console.log(body)
  const message = `
    Name: ${body.name}\r\n
    Last Name: ${body.lastName}\r\n
    Email: ${body.email}\r\n
    Service: ${body.service}\r\n
    Message: ${body.message}
  `;
  
  const data = {
    to: 'info@aglogia.com',
    from: 'info@aglogia.com',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };
  
  await mail.send(data);
  
  res.status(200).json({ status: 'OK' });
};
