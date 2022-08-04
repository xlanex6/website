import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full min-h-screen bg-slate-100 text-slate-100'>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp
