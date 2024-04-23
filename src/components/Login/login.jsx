import './login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }  
    return(
<>
<div class="container">
        <div className="header-form">
            <div id="seta" onClick={routeChange}></div>
        </div>
        <h2>Bem vindo a BitBarber!</h2>
        <p>Por favor entre com seu email e senha</p>
        <form className='form-login'>
            <div class="input-group-login">
                <label for="username">Email:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="input-group-login">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <a href="#" class="forgot-password">Esqueceu a senha?</a>
            <button type="submit">Entrar</button>
        </form>
        <p>Não está cadastrado ainda? <a href="/register">Entre aqui</a></p>
    </div>
    </>
    );
}

export default Login;