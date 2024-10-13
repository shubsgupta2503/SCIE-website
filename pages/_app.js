import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import StickySocials from '../components/main/Contact/StickySocials'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <StickySocials/>
    <Footer />
  </>
}
