import { DeleteAccountPage } from './components/legal/DeleteAccountPage';
import { TermsPage } from './components/legal/TermsPage';
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
  // Simple path routing: the legal pages are linked from the app and the stores.
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/termos' || path === '/privacidade') return <TermsPage />;
  if (path === '/excluir-conta') return <DeleteAccountPage />;

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
