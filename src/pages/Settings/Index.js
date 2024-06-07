import React, { useState, useEffect, useRef } from 'react';
import * as C from './styles'
import axios from 'axios';
import Navbar from '../../components/Navbar/Index';
import Profile from '../../components/settings-components/Profile/Index';
import Goals from '../../components/settings-components/Goals/Index';
import CostPerKm from '../../components/settings-components/CostPerKm/Index';
import { useSelector } from 'react-redux';

const Index = () => {
  const userId = useSelector((state) => state.handleSetUserId);
  const [userProfile, setUserProfile] = useState('');
  const [activeContent, setActiveContent] = useState('Perfil');
  const [highlighterStyle, setHighlighterStyle] = useState({});
  const menuHeaderRef = useRef(null);
  
  function getUserInfo() {
    axios.get(`https://delivery-helper-backend.onrender.com/get/user/${userId}`)
      .then(response => {
        console.log(response.data);
        setUserProfile(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (menuHeaderRef.current) {
      const activeButton = menuHeaderRef.current.querySelector('.selected');
      if (activeButton) {
        setHighlighterStyle({
          width: `${activeButton.offsetWidth}px`,
          left: `${activeButton.offsetLeft}px`
        });
      }
    }
  }, [activeContent]);

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  function saveProfileUpdate(update) {
    axios.put(`https://delivery-helper-backend.onrender.com/update/user/${userId}`, update)
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
              <C.MenuHeader ref={menuHeaderRef}>
              <C.Highlighter style={highlighterStyle} />
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
            {activeContent === 'Perfil' && <Profile userProfile={userProfile} saveProfileUpdate={saveProfileUpdate} />}
            {activeContent === 'Metas' && <Goals userProfile={userProfile} />}
            {activeContent === 'CustoPorKm' && <CostPerKm userProfile={userProfile} />}
          </C.Box>
        </C.Container>
      </C.Content>
    </div>
  )
}

export default Index;