import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [barsactive, setBarsActive] = useState(true);
  const [timesactive, setTimesActive] = useState(false);
  const [dropdownactive, setDropdownActive] = useState(false);
  const [hiddendropdown, setHiddenDropdown] = useState('d-none');

  const handleHamburgerClick = () => {
    setBarsActive((prevState) => !prevState);
    setTimesActive((prevState) => !prevState);
    setDropdownActive((prevState) => !prevState);
    setHiddenDropdown('');
    if (!barsactive) {
      window.setTimeout(() => {
        setHiddenDropdown('d-none');
      }, 500);
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/" className="main-logo">
            NF
          </Link>
        </div>
        <div className="navigation-links">
          <ul className="nav-items">
            <li>
              <a href="#main">proyectos</a>
            </li>
            <li>
              <a href="#footer">redes</a>
            </li>
          </ul>
          <div className="session-actions"></div>
        </div>
        <div
          className="hamburger"
          id="hamburger"
          onClick={handleHamburgerClick}
        >
          <i
            className={`fas fa-bars ${barsactive ? '' : 'd-none'}`}
            id="bars"
          ></i>
          <i
            className={`fas fa-times ${!timesactive ? 'd-none' : ''}`}
            id="close"
          ></i>
        </div>
      </nav>
      <div
        className={`dropdown-navigation-links ${
          !dropdownactive ? 'hideitem ' + hiddendropdown : 'showitem'
        } `}
      >
        <ul className="nav-items">
          <li>
            <a href="#main">proyectos</a>
          </li>
          <li>
            <a href="#footer">redes</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
