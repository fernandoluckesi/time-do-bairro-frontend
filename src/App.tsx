import { About } from './components/sections/About';
import { DownloadCta } from './components/sections/DownloadCta';
import { Footer } from './components/sections/Footer';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Navbar } from './components/sections/Navbar';
import { Partners } from './components/sections/Partners';
import { Testimonials } from './components/sections/Testimonials';
import { WhyUs } from './components/sections/WhyUs';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
