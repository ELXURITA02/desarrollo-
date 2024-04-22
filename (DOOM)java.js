document.addEventListener('DOMContentLoaded', function() {
    // Crear elementos HTML
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);

    const form = document.createElement('form');
    form.classList.add('login-form');
    container.appendChild(form);

    const heading = document.createElement('h2');
    heading.textContent = '¡Bienvenido de vuelta!';
    form.appendChild(heading);

    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('placeholder', 'Tu nombre de usuario');
    usernameInput.setAttribute('required', true);
    form.appendChild(usernameInput);

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Tu contraseña secreta');
    passwordInput.setAttribute('required', true);
    form.appendChild(passwordInput);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Iniciar Sesión';
    form.appendChild(submitButton);

    const forgotPasswordButton = document.createElement('button');
    forgotPasswordButton.setAttribute('type', 'button');
    forgotPasswordButton.textContent = '¿Olvidaste tu contraseña?';
    form.appendChild(forgotPasswordButton);

    // Establecer imagen de fondo
    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1533572700227-792369f37a2d')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";

    // Estilos CSS
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: 'Poppins', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #1f1f1f;
            color: #ffffff;
        }

        .container {
            width: 400px;
            padding: 50px;
            border-radius: 20px;
            background-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.2);
            animation: fadeIn 1s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .login-form {
            animation: slideInFromLeft 1s ease;
        }

        @keyframes slideInFromLeft {
            from {
                opacity: 0;
                transform: translateX(-100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .login-form h2 {
            text-align: center;
            margin-bottom: 40px;
            font-weight: bold;
            font-size: 32px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .login-form input {
            padding: 15px;
            margin-bottom: 30px;
            border: none;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.1);
            font-size: 18px;
            color: #ffffff;
            transition: all 0.3s ease;
        }

        .login-form input::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        .login-form input:focus {
            outline: none;
            background-color: rgba(255, 255, 255, 0.2);
        }

        .login-form button {
            padding: 15px;
            margin-top: 20px;
            border: none;
            border-radius: 10px;
            background-color: #007bff;
            color: #ffffff;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .login-form button:hover {
            background-color: #0056b3;
        }

        .login-form button:focus {
            outline: none;
        }

        .login-form button:active {
            transform: translateY(2px);
        }

        .login-form button:last-child {
            margin-top: 10px;
            background-color: transparent;
            color: #ffffff;
            font-weight: bold;
            text-align: center;
            cursor: pointer;
            font-size: 16px;
        }

        .login-form button:last-child:hover {
            color: #cccccc;
        }
    `;
    body.appendChild(style);
});
