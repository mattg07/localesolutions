import Header from "./components/header/Header";
import Info from "./components/info/Info";
import { Footer } from "./components/footer/Footer";
import { useState, useEffect } from 'react';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Header />
      <Info />
            {showScrollButton && (
        <button className="scrollToTopBtn" onClick={scrollToTop} title="Go to top">
          ↑
        </button>
      )}
      <Footer />

    </div>
  );
}

export default App;
