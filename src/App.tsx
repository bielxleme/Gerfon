import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Departments from '@/components/Departments';
import QuoteBuilder from '@/components/QuoteBuilder';
import TrustSection from '@/components/TrustSection';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-chumbo-deep">
      <Header />
      <main>
        <Hero />
        <Departments />
        <QuoteBuilder />
        <TrustSection />
        <LocationContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
