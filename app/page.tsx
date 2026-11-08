import Contact from "@/components/Contact";
import Equipe from "@/components/Equipe";
import Footer from "@/components/Footer";
import Formations from "@/components/Formations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Formations />
        <Equipe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
