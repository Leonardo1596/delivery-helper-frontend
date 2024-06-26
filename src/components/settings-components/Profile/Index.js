import React, { useEffect, useState } from 'react';
import * as C from './styles';

const Index = ({ userProfile, saveProfileUpdate }) => {
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const [formValues, setFormValues] = useState({
        email: '',
        username: '',
        password: '',
    });

    useEffect(() => {
      if (userProfile) {
        setFormValues({
            email: userProfile.email || '',
            username: userProfile.username || '',
            password: '',
        });
      }
    }, [userProfile]);
    

    function handleSaveButton() {
        saveProfileUpdate(formValues);
    };
    return (
        <div>
            <C.Content>
                <C.Container>
                    <C.HeaderContainer>
                        <C.Header>Editar seu perfil</C.Header>
                    </C.HeaderContainer>
                    <C.Form>
                        <C.FormField>
                            <C.Label>Email</C.Label>
                            {!userProfile ? <C.Input type="email" disabled={true} /> : <C.Input type="email" id="email" value={formValues.email} onChange={handleChange} />}                  
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Nome de usuário</C.Label>
                            {!userProfile ? <C.Input type="text" disabled={true} /> :<C.Input type="text" id="username" value={formValues.username} onChange={handleChange} />}
                        </C.FormField>
                        {/* <C.FormField>
                            <C.Label>Senha</C.Label>
                            <C.Input type="password" id="password" value={formValues.password} onChange={handleChange} />
                        </C.FormField> */}
                    </C.Form>
                    <C.ButtonContainer>
                        <C.Button onClick={handleSaveButton}>Salvar alterações</C.Button>
                    </C.ButtonContainer>
                </C.Container>
            </C.Content>
        </div>
    )
}

export default Index;