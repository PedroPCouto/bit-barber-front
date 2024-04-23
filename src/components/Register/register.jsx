import './register.css';
import { useNavigate } from "react-router-dom";



const Register = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }  

    return (
<>
<div class="container">
        <div className="header-form">
        <div id="seta" onClick={routeChange}></div>
        </div>
        <h2>Bem vindo a BitBarber!</h2>
        <p>Por favor se registre</p>
        <form className="form-register">
            <div class="input-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required/>
            </div>
            <div class="input-group">
                <label for="username">Email:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="input-group">
                <label for="birthDate">Data de nascimento:</label>
                <input type="date" id="birthDate" name="birthDate" className='date__input' required/>
            </div>
            <div class="input-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="input-group">
                <label for="repeatPassword">Repita a senha:</label>
                <input type="password" id="repeatPassword" name="repeatPassword" required/>
            </div>
            <button type="submit">Registrar</button>
        </form>
        <p>Já está cadastrado? <a href="/login">Entre aqui</a></p>
    </div>
    </>
    );
}

export default Register;