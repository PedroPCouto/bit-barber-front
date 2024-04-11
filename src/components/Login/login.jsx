import './login.css';

const Login = () => {
    return(
<>
<div class="container">
        <h2>Bem vindo a BitBarber!</h2>
        <p>Por favor entre com seu email e senha</p>
        <form>
            <div class="input-group">
                <label for="username">Email:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="input-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <a href="#" class="forgot-password">Esqueceu a senha?</a>
            <button type="submit">Entrar</button>
        </form>
        <p>Não está cadastrado ainda? <a href="#">Entre aqui</a></p>
    </div>
    </>
    );
}

export default Login;