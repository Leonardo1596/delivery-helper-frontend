import React, { useRef } from 'react';
import * as C from './styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth, setUserId } from '../../redux/action';

const Index = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleLogin() {
    let body = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    axios.post('https://delivery-helper-backend.onrender.com/auth/sign-in', body)
      .then(response => {
        function showError() {
          const errorContainer = document.querySelector('.errorContainer');
          const error = document.querySelector('.error');
  
          if (response.data.token === undefined) {
            errorContainer.style.display = 'flex';
            error.innerText = response.data.message;
            return;
          }
          errorContainer.style.display = 'none';
        }

        showError();
        dispatch(setAuth(true));
        dispatch(setUserId(response.data.userInfo._id))
        window.location.href = '/inicio'
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div>
      <C.LoginContainer>
        <C.LoginHeader>
          <C.Brand>Delivery Helper</C.Brand>
          <C.LoginHeaderTitle>Entre na sua conta</C.LoginHeaderTitle>
        </C.LoginHeader>
        <C.LoginForm>
          <C.FormField>
            <C.FormLabel>Email</C.FormLabel>
            <C.FormInput type="email" placeholder='@mail.com' ref={emailRef} onKeyPress={handleKeyPress} />
          </C.FormField>
          <C.FormField style={{ marginBottom: '20px' }}>
            <C.FormLabel>Senha</C.FormLabel>
            <C.FormInput type="password" placeholder='senha' ref={passwordRef} onKeyPress={handleKeyPress} />
          </C.FormField>
          <C.Link href="#" style={{ textDecoration: 'none' }}>Esqueceu sua senha?</C.Link>
          <C.LoginButton onClick={handleLogin}>Entrar</C.LoginButton>
          <C.errorContainer className='errorContainer'>
            <span className='error'></span>
          </C.errorContainer>
        </C.LoginForm>
        <C.LoginInfo>
          <span>Ainda não tem conta?</span>
          <C.Link href="/cadastrar" style={{ textDecoration: 'underline' }}>Registre-se</C.Link>
        </C.LoginInfo>
      </C.LoginContainer>
    </div>
  )
}

export default Index;