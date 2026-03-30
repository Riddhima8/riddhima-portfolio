import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}


