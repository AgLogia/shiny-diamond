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
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
         <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
         </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
         body {width: 600px;margin: 0 auto;}
         table {border-collapse: collapse;}
         table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
         img {-ms-interpolation-mode: bicubic;}
      </style>
      <![endif]-->
      <style type="text/css">
         body,
         p,
         div {
         font-family: inherit;
         font-size: 14px;
         }
         body {
         color: #000000;
         }
         body a {
         color: #1188E6;
         text-decoration: none;
         }
         p {
         margin: 0;
         padding: 0;
         }
         table.wrapper {
         width: 100% !important;
         table-layout: fixed;
         -webkit-font-smoothing: antialiased;
         -webkit-text-size-adjust: 100%;
         -moz-text-size-adjust: 100%;
         -ms-text-size-adjust: 100%;
         }
         img.max-width {
         max-width: 100% !important;
         }
         .column.of-2 {
         width: 50%;
         }
         .column.of-3 {
         width: 33.333%;
         }
         .column.of-4 {
         width: 25%;
         }
         ul ul ul ul {
         list-style-type: disc !important;
         }
         ol ol {
         list-style-type: lower-roman !important;
         }
         ol ol ol {
         list-style-type: lower-latin !important;
         }
         ol ol ol ol {
         list-style-type: decimal !important;
         }
         @media screen and (max-width:480px) {
         .preheader .rightColumnContent,
         .footer .rightColumnContent {
         text-align: left !important;
         }
         .preheader .rightColumnContent div,
         .preheader .rightColumnContent span,
         .footer .rightColumnContent div,
         .footer .rightColumnContent span {
         text-align: left !important;
         }
         .preheader .rightColumnContent,
         .preheader .leftColumnContent {
         font-size: 80% !important;
         padding: 5px 0;
         }
         table.wrapper-mobile {
         width: 100% !important;
         table-layout: fixed;
         }
         img.max-width {
         height: auto !important;
         max-width: 100% !important;
         }
         a.bulletproof-button {
         display: block !important;
         width: auto !important;
         font-size: 80%;
         padding-left: 0 !important;
         padding-right: 0 !important;
         }
         .columns {
         width: 100% !important;
         }
         .column {
         display: block !important;
         width: 100% !important;
         padding-left: 0 !important;
         padding-right: 0 !important;
         margin-left: 0 !important;
         margin-right: 0 !important;
         }
         .social-icon-column {
         display: inline-block !important;
         }
         }
      </style>
      <style>
         @media screen and (max-width:480px) {
         table {
         width: 480px !important;
         }
         }
      </style>
      <!--user entered Head Start-->
      <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
      <style>
         body {
         font-family: 'Poppins', sans-serif;
         }
      </style>
      <!--End Head user entered-->
   </head>
   <body>
      <center class="wrapper" data-link-color="#1188E6"
         data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#e5dcd2;">
         <div class="webkit">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#e5dcd2">
               <tr>
                  <td valign="top" bgcolor="#e5dcd2" width="100%">
                     <table width="100%" role="content-container" class="outer" align="center" cellpadding="0"
                        cellspacing="0" border="0">
                        <tr>
                           <td width="100%">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                 <tr>
                                    <td>
                                       <!--[if mso]>
                                       <center>
                                          <table>
                                             <tr>
                                                <td width="600">
                                                   <![endif]-->
                                                   <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                                      style="width:100%; max-width:600px;" align="center">
                                                      <tr>
                                                         <td role="modules-container"
                                                            style="padding:0px 0px 0px 0px; color:#000000; text-align:left;"
                                                            bgcolor="#FFFFFF" width="100%" align="left">
                                                            <table class="module preheader preheader-hide" role="module"
                                                               data-type="preheader" border="0" cellpadding="0" cellspacing="0"
                                                               width="100%"
                                                               style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                                               <tr>
                                                                  <td role="module-content">
                                                                     <p>appointment</p>
                                                                  </td>
                                                               </tr>
                                                            </table>
                                                            <table class="module" role="module" data-type="text" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="ecb815cc-87bc-4a3f-a334-040d110516dc"
                                                               data-mc-module-version="2019-10-22">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:5px 5px 5px 0px; line-height:20px; text-align:inherit; background-color:#e5dcd2;"
                                                                        height="100%" valign="top" bgcolor="#e5dcd2"
                                                                        role="module-content">
                                                                        <div>
                                                                           <div style="font-family: inherit; text-align: right"><a
                                                                              href="{{Weblink}}"><span
                                                                              style="font-size: 10px; color: #6f6860"><u>View
                                                                              this email in your browser.</u></span></a>
                                                                           </div>
                                                                           <div></div>
                                                                        </div>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="wrapper" role="module" data-type="image" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="fc0c631e-df6b-43ff-a453-2f5f98cd7258">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;"
                                                                        valign="top" align="center">
                                                                        <img class="max-width" border="0"
                                                                           style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;"
                                                                           width="600" alt="" data-proportionally-constrained="true"
                                                                           data-responsive="true"
                                                                           src="http://cdn.mcauto-images-production.sendgrid.net/523ba4781bfaee29/e5674e29-6716-496e-9bf4-901cd8825512/1915x936.jpg">
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="spacer" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="ef93b5f4-12f2-4253-95ae-b44a797d99ab">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:0px 0px 30px 0px;" role="module-content"
                                                                        bgcolor="">
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="divider" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="c614d8b1-248a-48ea-a30a-8dd0b2c65e10">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:0px 40px 0px 40px;" role="module-content"
                                                                        height="100%" valign="top" bgcolor="">
                                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                                           align="center" width="100%" height="2px"
                                                                           style="line-height:2px; font-size:2px;">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px 0px 2px 0px;"
                                                                                    bgcolor="#80817f"></td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0" align="center"
                                                               width="100%" role="module" data-type="columns"
                                                               style="padding:0px 40px 0px 40px;" bgcolor="#FFFFFF"
                                                               data-distribution="1,1,1">
                                                               <tbody>
                                                                  <tr role="module-content">
                                                                     <td height="100%" valign="top">
                                                                        <table width="173"
                                                                           style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;"
                                                                           cellpadding="0" cellspacing="0" align="left" border="0"
                                                                           bgcolor="" class="column column-0">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                    <table class="module" role="module"
                                                                                       data-type="text" border="0" cellpadding="0"
                                                                                       cellspacing="0" width="100%"
                                                                                       style="table-layout: fixed;"
                                                                                       data-muid="64573b96-209a-4822-93ec-5c5c732af15c"
                                                                                       data-mc-module-version="2019-10-22">
                                                                                       <tbody>
                                                                                          <tr>
                                                                                             <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;"
                                                                                                height="100%" valign="top" bgcolor=""
                                                                                                role="module-content">
                                                                                                <div>
                                                                                                   <div
                                                                                                      style="font-family: inherit; text-align: center">
                                                                                                      <span
                                                                                                         style="color: #80817f; font-size: 12px"><strong>SERVICE</strong></span>
                                                                                                   </div>
                                                                                                   <div></div>
                                                                                                </div>
                                                                                             </td>
                                                                                          </tr>
                                                                                       </tbody>
                                                                                    </table>
                                                                                 </td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                        <table width="173"
                                                                           style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;"
                                                                           cellpadding="0" cellspacing="0" align="left" border="0"
                                                                           bgcolor="" class="column column-1">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                    <table class="module" role="module"
                                                                                       data-type="text" border="0" cellpadding="0"
                                                                                       cellspacing="0" width="100%"
                                                                                       style="table-layout: fixed;"
                                                                                       data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1"
                                                                                       data-mc-module-version="2019-10-22">
                                                                                       <tbody>
                                                                                          <tr>
                                                                                             <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;"
                                                                                                height="100%" valign="top" bgcolor=""
                                                                                                role="module-content">
                                                                                                <div>
                                                                                                   <div
                                                                                                      style="font-family: inherit; text-align: center">
                                                                                                      <span
                                                                                                         style="color: #80817f; font-size: 12px"><strong>QTY</strong></span>
                                                                                                   </div>
                                                                                                   <div></div>
                                                                                                </div>
                                                                                             </td>
                                                                                          </tr>
                                                                                       </tbody>
                                                                                    </table>
                                                                                 </td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                        <table width="173"
                                                                           style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;"
                                                                           cellpadding="0" cellspacing="0" align="left" border="0"
                                                                           bgcolor="" class="column column-2">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                    <table class="module" role="module"
                                                                                       data-type="text" border="0" cellpadding="0"
                                                                                       cellspacing="0" width="100%"
                                                                                       style="table-layout: fixed;"
                                                                                       data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1.1"
                                                                                       data-mc-module-version="2019-10-22">
                                                                                       <tbody>
                                                                                          <tr>
                                                                                             <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;"
                                                                                                height="100%" valign="top" bgcolor=""
                                                                                                role="module-content">
                                                                                                <div>
                                                                                                   <div
                                                                                                      style="font-family: inherit; text-align: center">
                                                                                                      <span
                                                                                                         style="color: #80817f; font-size: 12px"><strong>PRICE</strong></span>
                                                                                                   </div>
                                                                                                   <div></div>
                                                                                                </div>
                                                                                             </td>
                                                                                          </tr>
                                                                                       </tbody>
                                                                                    </table>
                                                                                 </td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="divider" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="c614d8b1-248a-48ea-a30a-8dd0b2c65e10.1">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:0px 40px 0px 40px;" role="module-content"
                                                                        height="100%" valign="top" bgcolor="">
                                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                                           align="center" width="100%" height="2px"
                                                                           style="line-height:2px; font-size:2px;">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px 0px 2px 0px;"
                                                                                    bgcolor="#80817f"></td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            ${body.items.map((item: any) => (`
                                                            <table border="0" cellpadding="0" cellspacing="0" align="center"
                                                               width="100%" role="module" data-type="columns"
                                                               style="padding:0px 40px 0px 40px;" bgcolor="#FFFFFF"
                                                               data-distribution="1,1,1">
                                                               <tbody>
                                                                  <tr role="module-content">
                                                                     <td height="100%" valign="top">
                                                                        <table width="173"
                                                                           style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;"
                                                                           cellpadding="0" cellspacing="0" align="left" border="0"
                                                                           bgcolor="" class="column column-0">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                    <table class="module" role="module"
                                                                                       data-type="text" border="0" cellpadding="0"
                                                                                       cellspacing="0" width="100%"
                                                                                       style="table-layout: fixed;"
                                                                                       data-muid="64573b96-209a-4822-93ec-5c5c732af15c.2"
                                                                                       data-mc-module-version="2019-10-22">
                                                                                       <tbody>
                                                                                          <tr>
                                                                                             <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;"
                                                                                                height="100%" valign="top" bgcolor=""
                                                                                                role="module-content">
                                                                                                <div>
                                                                                                   <div
                                                                                                      style="font-family: inherit; text-align: center">
                                                                                                      <span
                                                                                                         style="color: #80817f; font-size: 12px">${item.desc}</span><br>
                                                                                                          <span style="color: #80817f; font-size: 10px">${item.size || ''}</span>
                                                                                                   </div>
                                                                                                   <div></div>
                                                                                                </div>
                                                                                             </td>
                                                                                          </tr>
                                                                                       </tbody>
                                                                                    </table>
                                                                                 </td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                        <table width="173"
                                                                           style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;"
                                                                           cellpadding="0" cellspacing="0" align="left" border="0"
                                                                           bgcolor="" class="column column-1">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                    <table class="module" role="module"
                                                                                       data-type="text" border="0" cellpadding="0"
                                                                                       cellspacing="0" width="100%"
                                                                                       style="table-layout: fixed;"
                                                                                       data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1.2"
                                                                                       data-mc-module-version="2019-10-22">
                                                                                       <tbody>
                                                                                          <tr>
                                                                                             <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;"
                                                                                                height="100%" valign="top" bgcolor=""
                                                                                                role="module-content">
                                                                                                <div>
                                                                                                   <div
                                                                                                      style="font-family: inherit; text-align: center">
                                                                                                      <span
                                                                                                         style="color: #80817f; font-size: 12px">${item.qnt}</span>
                                                                                                   </div>
                                                                                                   <div></div>
                                                                                                </div>
                                                                                             </td>
                                                                                          </tr>
                                                                                       </tbody>
                                                                                    </table>
                                                                                 </td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                        <table width="173"
                                                                           style="width:173px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;"
                                                                           cellpadding="0" cellspacing="0" align="left" border="0"
                                                                           bgcolor="" class="column column-2">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px;margin:0px;border-spacing:0;">
                                                                                    <table class="module" role="module"
                                                                                       data-type="text" border="0" cellpadding="0"
                                                                                       cellspacing="0" width="100%"
                                                                                       style="table-layout: fixed;"
                                                                                       data-muid="64573b96-209a-4822-93ec-5c5c732af15c.1.1.1"
                                                                                       data-mc-module-version="2019-10-22">
                                                                                       <tbody>
                                                                                          <tr>
                                                                                             <td style="padding:15px 0px 15px 0px; line-height:22px; text-align:inherit;"
                                                                                                height="100%" valign="top" bgcolor=""
                                                                                                role="module-content">
                                                                                                <div>
                                                                                                   <div
                                                                                                      style="font-family: inherit; text-align: center">
                                                                                                      <span
                                                                                                         style="color: #80817f; font-size: 12px">$${item.price}</span>
                                                                                                   </div>
                                                                                                   <div></div>
                                                                                                </div>
                                                                                             </td>
                                                                                          </tr>
                                                                                       </tbody>
                                                                                    </table>
                                                                                 </td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            `)).join('')}
                                                            <table class="module" role="module" data-type="divider" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="c614d8b1-248a-48ea-a30a-8dd0b2c65e10.1.2">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:0px 40px 0px 40px;" role="module-content"
                                                                        height="100%" valign="top" bgcolor="">
                                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                                           align="center" width="100%" height="1px"
                                                                           style="line-height:1px; font-size:1px;">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px 0px 1px 0px;"
                                                                                    bgcolor="#80817f"></td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="divider" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="c614d8b1-248a-48ea-a30a-8dd0b2c65e10.1.2.1">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:0px 40px 0px 40px;" role="module-content"
                                                                        height="100%" valign="top" bgcolor="">
                                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                                           align="center" width="100%" height="1px"
                                                                           style="line-height:1px; font-size:1px;">
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td style="padding:0px 0px 1px 0px;"
                                                                                    bgcolor="#80817f"></td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="text" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="dd385719-3fe2-4214-af8b-d3b34d725efe"
                                                               data-mc-module-version="2019-10-22">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:18px 20px 18px 40px; line-height:22px; text-align:inherit;"
                                                                        height="100%" valign="top" bgcolor="" role="module-content">
                                                                        <div>
                                                                           <div style="font-family: inherit; text-align: start"><br>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #80817f; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial">Subtotal:
                                                                              </span><span
                                                                                 style="color: #000000; font-family: Colfax, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">$${body.subTotal}</span>&nbsp;
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: start"><br>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #80817f; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial">Discount
                                                                              20% : </span><span
                                                                                 style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; background-color: rgb(255, 255, 255); float: none; display: inline">$${body.discount}</span>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: start"><br>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #80817f; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial">HST:
                                                                              </span>&nbsp;<span
                                                                                 style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-break: break-word">$${body.taxes}</span>&nbsp;
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: start"><br>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #80817f; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial">Total:</span>
                                                                              &nbsp;<span
                                                                                 style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-break: break-word">$${body.total}</span>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><br>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit">
                                                                              &nbsp;&nbsp;
                                                                           </div>
                                                                           <div></div>
                                                                        </div>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="text" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="dd385719-3fe2-4214-af8b-d3b34d725efe.1"
                                                               data-mc-module-version="2019-10-22">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:18px 20px 18px 40px; line-height:22px; text-align:inherit;"
                                                                        height="100%" valign="top" bgcolor="" role="module-content">
                                                                        <div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="color: #80817f"><strong>Client Name:
                                                                              </strong></span><span
                                                                                 style="color: #000000; font-family: Colfax, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">${body.info.name} ${body.info.lastName}</span>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="color: #80817f"><strong>Date:
                                                                              </strong></span><span
                                                                                 style="font-size: 16px; line-height: 24px; word-break: break-word">${body.info.appointmentDate}</span>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="color: #80817f; font-family: Colfax, Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 700; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">Time:</span>
                                                                              <span
                                                                                 style="font-size: 16px; line-height: 24px; word-break: break-word">${body.info.appointmentTime}</span>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="color: #80817f"><strong>Email:
                                                                              </strong></span>&nbsp;<span
                                                                                 style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-break: break-word">
                                                                              ${body.info.email}</span>&nbsp;
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="color: #80817f"><strong>Phone:
                                                                              </strong></span>&nbsp;<span
                                                                                 style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-break: break-word">
                                                                              ${body.info.phone}</span>&nbsp;
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="color: #80817f"><strong>Location:
                                                                              </strong></span><span
                                                                                 style="color: #000000; font-family: Colfax, Helvetica, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">${body.info.address}</span>&nbsp;
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="color: #80817f"><strong>Lockbox:
                                                                              </strong></span><span
                                                                                 style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: transparent; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-break: break-word">${body.info.lockbox}</span>
                                                                              &nbsp;
                                                                           </div>
                                                                           <div></div>
                                                                        </div>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="text" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="98117f70-e79e-4eab-aaad-4eed30282efb"
                                                               data-mc-module-version="2019-10-22">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;"
                                                                        height="100%" valign="top" bgcolor="" role="module-content">
                                                                        <div>
                                                                           <div style="font-family: inherit; text-align: center"><span
                                                                              style="color: #80817f; font-family: Colfax, Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 700; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;  widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">Term
                                                                              of Condition</span>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><br>
                                                                           </div>
                                                                           <div></div>
                                                                        </div>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="text" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="98117f70-e79e-4eab-aaad-4eed30282efb.1"
                                                               data-mc-module-version="2019-10-22">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:18px 18px 18px 18px; line-height:22px; text-align:inherit;"
                                                                        height="100%" valign="top" bgcolor="" role="module-content">
                                                                        <div>
                                                                           <div style="font-family: inherit; text-align: left"><span
                                                                              style="font-size: 16px; line-height: 24px; word-break: break-word; text-align: left; color: #5d77a9">Need
                                                                              to make changes on this appointment?</span>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: inherit"><span
                                                                              style="line-height: 24px; word-break: break-word; font-size: 16px">This
                                                                              is an automatically generated email to let you know
                                                                              that your appointment has been created. If you'd like
                                                                              to reschedule or any question please do not hesitate
                                                                              to contact us.</span>&nbsp;
                                                                           </div>
                                                                           <div></div>
                                                                        </div>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="wrapper" role="module" data-type="image" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="ed13b320-07cb-47f7-a9d2-ca1a520e4c63">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;"
                                                                        valign="top" align="center">
                                                                        <img class="max-width" border="0"
                                                                           style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;"
                                                                           width="600" alt="" data-proportionally-constrained="true"
                                                                           data-responsive="true"
                                                                           src="http://cdn.mcauto-images-production.sendgrid.net/523ba4781bfaee29/28cc9b1d-0ed2-4836-ba17-8e0b6d3f371f/3008x2008.jpg">
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="spacer" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="54da3428-feae-4c1a-a740-9c9fdb4e52d7">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:0px 0px 50px 0px;" role="module-content"
                                                                        bgcolor="">
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="spacer" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="9bbc393c-c337-4d1a-b9f9-f20c740a0d44">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:0px 0px 30px 0px;" role="module-content"
                                                                        bgcolor="">
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <table class="module" role="module" data-type="text" border="0"
                                                               cellpadding="0" cellspacing="0" width="100%"
                                                               style="table-layout: fixed;"
                                                               data-muid="20d6cd7f-4fad-4e9c-8fba-f36dba3278fc"
                                                               data-mc-module-version="2019-10-22">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="padding:40px 30px 40px 30px; line-height:22px; text-align:inherit; background-color:#80817f;"
                                                                        height="100%" valign="top" bgcolor="#80817f"
                                                                        role="module-content">
                                                                        <div>
                                                                           <div style="font-family: inherit; text-align: center"><span
                                                                              style="color: #ffffff; font-size: 12px"><strong>Thank
                                                                              you for booking at AG Logia
                                                                              Photography.</strong></span>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: center"><br>
                                                                           </div>
                                                                           <div style="font-family: inherit; text-align: center"><span
                                                                              style="color: #ffffff; font-size: 12px"><strong>We
                                                                              hope you enjoy our services!</strong></span>
                                                                           </div>
                                                                           <div></div>
                                                                        </div>
                                                                     </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <div data-role="module-unsubscribe" class="module" role="module"
                                                               data-type="unsubscribe"
                                                               style="background-color:#ffecea; color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;"
                                                               data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                                               <div class="Unsubscribe--addressLine">
                                                                  <p class="Unsubscribe--senderName"
                                                                     style="font-size:12px; line-height:20px;">AG LOGIA PHOTOGRAPHY</p>
                                                                  <p style="font-size:12px; line-height:20px;"><span
                                                                     class="Unsubscribe--senderAddress">Toronto</span>,
                                                                  </p>
                                                               </div>
                                                            </div>
                                                         </td>
                                                      </tr>
                                                   </table>
                                                   <!--[if mso]>
                                                </td>
                                             </tr>
                                          </table>
                                       </center>
                                       <![endif]-->
                                    </td>
                                 </tr>
                              </table>
                           </td>
                        </tr>
                     </table>
                  </td>
               </tr>
            </table>
         </div>
      </center>
   </body>
</html>
  
  `;

  const data = {
    to: 'info@aglogia.com',
    from: 'info@aglogia.com',
    subject: `New message from ${body.name}`,
    text: 'message',
    html: message,
  };
  
  await mail.send(data)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error: any) => {
      console.error(error)
    });
  
  res.status(200).json({ status: 'OK' });
};
