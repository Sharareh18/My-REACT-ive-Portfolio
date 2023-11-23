import { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
   
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
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="container">{renderPage()}</main>
      <Footer />
    </div>
  );
}