import Script from 'next/script'
import '../styles/globals.sass'
import 'i18n'
// react-scroll-parallax
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
  return  <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>

}

export default MyApp
