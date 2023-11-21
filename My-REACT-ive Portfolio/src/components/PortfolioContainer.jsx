import { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import Header from './Header';

export default function PortfolioContainer() {
const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'Home') {
        return <Home />;
    }
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <Contact />;
};

const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <Footer />
    </div>
  );
}