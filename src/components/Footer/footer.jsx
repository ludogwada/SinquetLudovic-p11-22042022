import logo from '../../assets/logoFooter.png';
import '../../index.css';

function Footer() {
    return (
        <div>
            <footer className='footer'>
                <img src={logo} className='footer__logo'alt='logo'data-testid='logoFooter' />
                <h5 className='footer__copy'>© 2020 Kasa. All rights reserved</h5>
            </footer>
        </div>
    )
}

export default Footer