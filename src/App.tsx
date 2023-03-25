import { useRef } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const topRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col text-slate-50">
      <div ref={topRef}>
        <Header />
      </div>
      <Footer onLogoClick={scrollToTop} />
    </div>
  );
}

export default App;
