import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../index.css';



function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo" data-testid="logo" />
            <nav className='nav'>
                <NavLink className='nav__li' to='/'>
                    <h6>Accueil</h6>
                </NavLink>
                <NavLink className='nav__li' to="/about">
                    <h6>A propos</h6>
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
