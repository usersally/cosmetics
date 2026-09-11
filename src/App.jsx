import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import Promos from "./components/Promos";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <BestSellers />
        <Promos />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
