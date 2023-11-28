import PropTypes from 'prop-types';


export default function Header() {
  return (
    <header className="container">
        
      {/* <div>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div> */}
    </header>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
