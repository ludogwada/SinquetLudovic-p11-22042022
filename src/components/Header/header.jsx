import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../index.css';



function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" data-testid="logo" />
        <div className='nav'>
              <NavLink className='nav__li' to='/'>
                <h6>Accueil</h6>
              </NavLink>
              <NavLink className='nav__li' to="/about">
                <h6>A propos</h6>
              </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
