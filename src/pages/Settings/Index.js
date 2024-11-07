import React, { useState, useEffect, useRef } from 'react';
import * as C from './styles'
import axios from 'axios';
import Navbar from '../../components/Navbar/Index';
import Profile from '../../components/settings-components/Profile/Index';
import Goals from '../../components/settings-components/Goals/Index';
import CostPerKm from '../../components/settings-components/CostPerKm/Index';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
  const userId = useSelector((state) => state.handleSetUserId);
  const [userProfile, setUserProfile] = useState('');
  const [activeContent, setActiveContent] = useState('Perfil');
  const [highlighterStyle, setHighlighterStyle] = useState({});
  const menuHeaderRef = useRef(null);

  function getUserInfo() {
    axios.get(`http://localhost:8000/get/user/${userId}`)
      .then(response => {
        // console.log(response.data);
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

  function saveProfileUpdate(data) {
    const id = toast.loading("Por favor espere...")
    axios.put(`http://localhost:8000/update/user/${userId}`, data)
      .then(response => {
        // console.log(response.data);
        // window.location.href = '/configuracoes'
        toast.update(id, { render: "Salvo com sucesso", type: "success", isLoading: false, autoClose: 1500 });
      })
      .catch(error => {
        console.error(error);
      });
  }

  function saveGoalsUpdate(data) {
    const convertCurrencyToNumber = (currency) => {
      // Remove 'R$', spaces, and dots, and replace comma with a dot
      const numericString = currency.replace(/[^0-9,]/g, '').replace(',', '.');
      return parseFloat(numericString);
    };

    const salaryLimit = data.formattedSalary ? convertCurrencyToNumber(data.formattedSalary) : 0;
    const goal1Limit = data.formattedGoal1 ? convertCurrencyToNumber(data.formattedGoal1) : 0;
    const goal2Limit = data.formattedGoal2 ? convertCurrencyToNumber(data.formattedGoal2) : 0;

    let body = {
      salaryLimit,
      goal1Limit,
      goal2Limit
    }

    const id = toast.loading("Por favor espere...")
    axios.put(`http://localhost:8000/goal/update/${userId}/${userProfile.goals[0]._id}`, body)
      .then(response => {
        // console.log(response.data);
        // window.location.href = '/configuracoes'
        toast.update(id, { render: "Salvo com sucesso", type: "success", isLoading: false, autoClose: 1500 });
      })
      .catch(error => {
        console.error(error);
      });
  };

  function saveCostPerKmUpdate(data) {
    const convertCurrencyToNumber = (currency) => {
      // Remove 'R$', spaces, and dots, and replace comma with a dot
      const numericString = currency.replace(/[^0-9,]/g, '').replace(',', '.');
      return parseFloat(numericString);
    };

    let body = {
      oleo: {
        value: data.formattedOleoValue ? convertCurrencyToNumber(data.formattedOleoValue) : 0,
        km: data.oleoKm ? Number(data.oleoKm) : 0
      },
      relacao: {
        value: data.formattedRelacaoValue ? convertCurrencyToNumber(data.formattedRelacaoValue) : 0,
        km: data.relacaoKm ? Number(data.relacaoKm) : 0
      },
      pneuDianteiro: {
        value: data.formattedPneuDianteiroValue ? convertCurrencyToNumber(data.formattedPneuDianteiroValue) : 0,
        km: data.pneuDianteiroKm ? Number(data.pneuDianteiroKm) : 0
      },
      pneuTraseiro: {
        value: data.formattedPneuTraseiroValue ? convertCurrencyToNumber(data.formattedPneuTraseiroValue) : 0,
        km: data.pneuTraseiroKm ? Number(data.pneuTraseiroKm) : 0
      },
      gasolina: {
        value: data.formattedGasolinaValue ? convertCurrencyToNumber(data.formattedGasolinaValue) : 0,
        km: data.gasolinaKm ? Number(data.gasolinaKm) : 0
      }
    };

    const costPerKm = {
      oleo: body.oleo.km !== 0 ? body.oleo.value / body.oleo.km : 0,
      relacao: body.relacao.km !== 0 ? body.relacao.value / body.relacao.km : 0,
      pneuDianteiro: body.pneuDianteiro.km !== 0 ? body.pneuDianteiro.value / body.pneuDianteiro.km : 0,
      pneuTraseiro: body.pneuTraseiro.km !== 0 ? body.pneuTraseiro.value / body.pneuTraseiro.km : 0,
      gasolina: body.gasolina.km !== 0 ? body.gasolina.value / body.gasolina.km : 0
    };

    // Calculate costPerKm total
    function calculateCostPerKmTotal(obj) {
      const fields = ['oleo', 'relacao', 'pneuDianteiro', 'pneuTraseiro', 'gasolina'];
      let total = 0;

      fields.forEach(field => {
        if (obj[field] !== undefined) {
          total += obj[field];
        }
      });

      return total;
    };

    const totalCostPerKm = calculateCostPerKmTotal(costPerKm);

    // Update user
    axios.put(`http://localhost:8000/update/user/${userId}`, { totalCostPerKm: Number(totalCostPerKm.toFixed(4)) });

    const id = toast.loading("Por favor espere...")
    axios.put(`http://localhost:8000/cost_per_km/update/${userId}/${userProfile.costPerKm[0]._id}`, body)
      .then(response => {
        // console.log(response.data);
        // window.location.href = '/configuracoes'
        toast.update(id, { render: "Salvo com sucesso", type: "success", isLoading: false, autoClose: 1500 });
      })
      .catch(error => {
        console.error(error);
      });

  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
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
            {activeContent === 'Metas' && <Goals userProfile={userProfile} saveGoalsUpdate={saveGoalsUpdate} />}
            {activeContent === 'CustoPorKm' && <CostPerKm userProfile={userProfile} saveCostPerKmUpdate={saveCostPerKmUpdate} />}
          </C.Box>
        </C.Container>
      </C.Content>
    </div>
  )
}

export default Index;