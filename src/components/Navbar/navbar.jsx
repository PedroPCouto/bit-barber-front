

import './navbar.css';

const Navbar = () => {

    return(
    <nav className='navigator-container'>
        <ul>
            <li className='navbar-list-item'>Home</li>
            <li className='navbar-list-item'>Serviços</li>
            <li className='navbar-list-item'>Locais</li>
            <li className='navbar-list-item'>Profissionais</li>
        </ul>
        <li className='navbar-list-item login-button'>Login</li>
    </nav>
    );
}

export default Navbar;