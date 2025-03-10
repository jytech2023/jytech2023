import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import Services from './components/Home/Services';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Services />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
