import PropTypes from 'prop-types';
import Nav from './Nav';

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="flex-row px-1">
      <div>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
