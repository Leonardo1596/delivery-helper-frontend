import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { FaCirclePlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { startOfWeek, endOfWeek, format, parseISO, isWithinInterval } from 'date-fns';
import PopupForm from '../../components/PopupForm/Index';
import Navbar from '../../components/Navbar/Index';
import Table from '../../components/entries-components/Table/Index';
import Weeks from '../../components/Weeks/Index';
import PopUpGasoline from '../../components/PopUpGasoline/Index';
import ConfirmPopup from '../../components/ConfirmPopup/Index';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);
  const userProfile = useSelector((state) => state.handleSetUser);
  const [showGasolineForm, setShowGasolineForm] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  useEffect(() => {
    if (userProfile.firstLoginOfWeek) {
      setShowGasolineForm(true);
    }
  }, []);


  // Get current date
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 });
  const endOfCurrentWeek = endOfWeek(today, { weekStartsOn: 1 });

  const [selectedWeek, setSelectedWeek] = useState({
    startDate: startOfCurrentWeek,
    endDate: endOfCurrentWeek,
    label: `${format(startOfCurrentWeek, 'dd/MM/yyyy')} - ${format(endOfCurrentWeek, 'dd/MM/yyyy')}`
  });


  // Get date and save state
  const handleSelectWeek = (week) => {
    setSelectedWeek(week);
  };

  // Filter entries by date
  const filterEntriesByDate = (entries, startDate, endDate) => {
    return entries.filter(entry => {
      const entryDate = parseISO(entry.date);
      return isWithinInterval(entryDate, { start: startDate, end: endDate });
    });
  }

  // Filters entries if a week is selected
  const filteredEntries = selectedWeek
    ? filterEntriesByDate(userProfile.entries, selectedWeek.startDate, selectedWeek.endDate)
    : userProfile.entries;

  function handleOpenPopup() {
    setShowPopup(true);
  }

  function handlePopupGasoline() {
    setShowGasolineForm(true);
  }

  const hanleDeleteEntry = (item) => {
        // axios.delete(`https://delivery-helper-backend.onrender.com/entry/delete/${props.userProfile._id}/${item._id}`)
        //     .then(response => {
        //         const updatedEntries = props.userProfile.entries.filter(entry => entry._id !== item._id);
        //         const updatedUserProfile = { ...props.userProfile, entries: updatedEntries };
                
        //         dispatch(setUser(updatedUserProfile));
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        console.log(item);
    };

  return (
    <div>
      {showGasolineForm && <C.Overlay><PopUpGasoline userProfile={userProfile} setShowGasolineForm={setShowGasolineForm} /></C.Overlay>}
      {showPopup && <C.Overlay><PopupForm setShowPopup={setShowPopup} userProfile={userProfile} /></C.Overlay>}
      {showConfirmPopup && <C.Overlay><ConfirmPopup setShowConfirmPopup={setShowConfirmPopup} message="Tem certeza que deseja excluir o lançamento?" hanleDeleteEntry={hanleDeleteEntry} /></C.Overlay>}
      <Navbar />
      <C.Content>
        <Weeks onSelectWeek={handleSelectWeek} />
        <C.Container>
          <C.Box>
            <C.HeaderContainer>
              <C.Header>Lançamentos diários</C.Header>
              <C.ButtonsContainer>
                <C.ButtonContainer>
                  <C.Button onClick={handlePopupGasoline}>Atualizar valor da gasolina</C.Button>
                </C.ButtonContainer>
                <C.AddIcon>
                  <FaCirclePlus onClick={handleOpenPopup} />
                </C.AddIcon>
              </C.ButtonsContainer>
            </C.HeaderContainer>
            <Table userProfile={userProfile} tableData={filteredEntries} setShowConfirmPopup={setShowConfirmPopup} />
          </C.Box>
        </C.Container>
      </C.Content>
    </div>
  )
}

export default Index;