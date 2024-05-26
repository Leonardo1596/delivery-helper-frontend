import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { startOfWeek, endOfWeek, format } from 'date-fns';
import PopupForm from '../../components/PopupForm/Index';
import Navbar from '../../components/Navbar/Index';
import Table from '../../components/entries-components/Table/Index';
import Weeks from '../../components/Weeks/Index';

const Index = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const userProfile = useSelector((state) => state.handleSetUser);


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
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= endDate;
    });
  }

  // Filters entries if a week is selected
  const filteredEntries = selectedWeek
    ? filterEntriesByDate(userProfile.entries, selectedWeek.startDate, selectedWeek.endDate)
    : userProfile.entries;

    function handleOpenPopup() {
      setShowPopup(true);
  }

  return (
    <div>
      {showPopup && <PopupForm setShowPopup={setShowPopup} userProfile={userProfile} />}
      <Navbar />
      <C.Content>
        <Weeks onSelectWeek={handleSelectWeek} />
        <C.Container>
          <C.Box>
            <C.HeaderContainer>
              <C.Header>Lançamentos diários</C.Header>
              <C.AddIcon>
                <FaCirclePlus onClick={handleOpenPopup} />
              </C.AddIcon>
            </C.HeaderContainer>
            <Table tableData={filteredEntries} />
          </C.Box>
        </C.Container>
      </C.Content>
    </div>
  )
}

export default Index;