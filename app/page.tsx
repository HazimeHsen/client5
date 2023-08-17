import Banner from "./components/Banner/index";
import Companies from "./components/Companies/index";
import Work from "./components/Work/index";
import Table from "./components/Table/index";
import Features from "./components/Features/index";
import Simple from "./components/Simple/index";
import Trade from "./components/Trade/index";
import Faq from "./components/Faq/index";
import ScrollToTopButton from "./components/ScrollToTopButton";
import About from "./components/about";
export default function Home() {
  return (
    <main className="z-40">
      <Banner />
      <Work />
      <ScrollToTopButton />
      <Features />
      <Faq />
      <About />
      <Simple />
    </main>
  );
}
