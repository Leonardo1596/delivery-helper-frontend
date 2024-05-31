import React, { useState } from 'react';
import * as C from './styles'
import axios from 'axios';
import Navbar from '../../components/Navbar/Index';
import Goals from '../../components/settings-components/Goals/Index';
import { useSelector } from 'react-redux';

const Index = () => {
  const userProfile = useSelector((state) => state.handleSetUser);
  const [activeContent, setActiveContent] = useState('Perfil');

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  const ContentMetas = () => {
    return <div>Conteúdo de metas</div>;
  };

  const ContentCustoPorKm = () => {
    return <div>Conteúdo de custo por km</div>;
  };

  function saveUpdate(update) {
    axios.put(`https://delivery-helper-backend.onrender.com//update/user/${userProfile._id}`, update)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <Navbar />
      <C.Content>
        <C.Container>
          <C.Box>
            <C.HeaderContainer>
              <C.Header>Configurações</C.Header>
            </C.HeaderContainer>
            <C.MenuHeaderContainer>
              <C.MenuHeader>
                <C.HeaderButton
                  onClick={() => handleContentChange('Perfil')}
                  className={activeContent === 'Perfil' ? 'selected' : ''}
                >
                  Perfil
                </C.HeaderButton>
                <C.HeaderButton
                  onClick={() => handleContentChange('Metas')}
                  className={activeContent === 'Metas' ? 'selected' : ''}
                >
                  Metas
                </C.HeaderButton>
                <C.HeaderButton
                  onClick={() => handleContentChange('CustoPorKm')}
                  className={activeContent === 'CustoPorKm' ? 'selected' : ''}
                >
                  Custo por Km
                </C.HeaderButton>
              </C.MenuHeader>
            </C.MenuHeaderContainer>
            {activeContent === 'Perfil' && <Goals userProfile={userProfile} saveUpdate={saveUpdate} />}
            {activeContent === 'Metas' && <ContentMetas />}
            {activeContent === 'CustoPorKm' && <ContentCustoPorKm />}
          </C.Box>
        </C.Container>
      </C.Content>
    </div>
  )
}

export default Index;