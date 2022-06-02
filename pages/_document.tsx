import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>Expert Real Estate Photography Services in Ontario</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=AW-10840716317'
          ></script>
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-ZXLCMMQS2T'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-ZXLCMMQS2T');
            gtag('config', 'AW-10840716317');
            `,
            }}
          />

          <meta name='theme-color' content='#000000' />
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
            crossOrigin='anonymous'
          ></link>

          <link
            href='https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
            type='text/css'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=Jost:wght@300&family=Secular+One&display=swap'
            rel='stylesheet'
            type='text/css'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=Mukta&display=swap'
            rel='stylesheet'
            type='text/css'
          />

          <link rel='apple-touch-icon' href='logo192.png' />

          <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
          <meta
            name='description'
            content='We offer professional photography for real estate agents, real estate marketing companies and corporations. Our images will help your listings stand out among the competition.'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
