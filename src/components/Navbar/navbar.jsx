

import './navbar.css';

const Navbar = () => {

    return(
    <nav className='navigator-container'>
        <ul>
            <a href='#'className='navbar-list-item'>Home</a>
            <a href='#'className='navbar-list-item'>Serviços</a>
            <a href='#'className='navbar-list-item'>Locais</a>
            <a href='#'className='navbar-list-item'>Profissionais</a>
        </ul>
        <span>
            <a className='navbar-list-item login-button' href='/login'>Entrar</a>
            <a className='navbar-list-item login-button' href='/register'>Registrar</a>
        </span>
    </nav>
    );
}

export default Navbar;