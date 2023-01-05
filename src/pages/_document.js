import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="shortcut icon" href="/assets/images/favicon.png" /> */}
        <meta property="og:title" content="Agreement" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agreement.xifraglobal.com/" />
        <meta property="og:image" content="https://agreement.xifraglobal.com/assets/images/city-login-dark.png" />
        <link rel="icon" href="/favicon.ico" />
				<link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}