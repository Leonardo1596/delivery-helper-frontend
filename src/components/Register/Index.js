import React, { useRef } from 'react';
import * as C from './styles';
import axios from 'axios';

const Index = (props) => {
  const emailRef = useRef(null);
  const usernameRef = useRef(null)
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // Validate form

  function handleRegister() {
    let body = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      confirmPasswordRef: confirmPasswordRef.current.value
    };

    axios.post('http://10.147.17.98:8000/auth/sign-up', body)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
        <C.RegisterContainer>
          <C.RegisterHeader>
            <C.RegisterHeaderTitle>Crie sua conta</C.RegisterHeaderTitle>
          </C.RegisterHeader>
          <C.RegisterForm>
            <C.FormField>
              <C.FormLabel>Email</C.FormLabel>
              <C.FormInput type="text" placeholder='@mail.com' ref={emailRef} />
            </C.FormField>
            <C.FormField>
              <C.FormLabel>Usuário</C.FormLabel>
              <C.FormInput type="text" placeholder='nome do usuário' ref={usernameRef} />
            </C.FormField>
            <C.FormField>
              <C.FormLabel>Senha</C.FormLabel>
              <C.FormInput type="password" placeholder='senha' ref={passwordRef} />
            </C.FormField>
            <C.FormField style={{ marginBottom: '30px' }}>
              <C.FormLabel>Confirmar senha</C.FormLabel>
              <C.FormInput type="password" placeholder='confirmar senha' ref={confirmPasswordRef} />
            </C.FormField>
            <C.RegisterButton onClick={handleRegister}>Cadastrar</C.RegisterButton>
            <C.errorContainer className='errorContainer'>
              <span className='error'></span>
            </C.errorContainer>
          </C.RegisterForm>
          <C.RegisterInfo>
            <span>Já tem uma conta?</span>
            <C.Link href="/entrar" style={{ textDecoration: 'underline' }}>Faça login</C.Link>
          </C.RegisterInfo>
        </C.RegisterContainer>
    </div>
  )
}

export default Index;