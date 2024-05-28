import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useSelector } from 'react-redux';
import { startOfWeek, endOfWeek, format, parseISO, isWithinInterval } from 'date-fns';
import Navbar from '../../components/Navbar/Index';
import Weeks from '../../components/Weeks/Index';
import Card from '../../components/home-components/Card/Index';
import SummaryBox from '../../components/home-components/SummaryBox/Index';
import MaintenanceBox from '../../components/home-components/MaintenanceBox/Index';

const Home = () => {
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


  // Get date and save
  const handleSelectWeek = (week) => {
    setSelectedWeek(week);
  };

  // Filter entries by date
  const filterEntriesByDate = (entries,  startDate, endDate) => {
    return entries.filter(entry => {
      const entryDate = parseISO(entry.date);
      return isWithinInterval(entryDate, { start: startDate, end: endDate });
    });
  }

  // Filters entries if a week is selected
  const filteredEntries = selectedWeek
    ? filterEntriesByDate(userProfile.entries, selectedWeek.startDate, selectedWeek.endDate)
    : userProfile.entries;

  const totalCostPerKm = filteredEntries[0] ? filteredEntries[0].costPerKm : '';
  const totalGrossGain = filteredEntries.reduce((total, obj) => total + obj.grossGain, 0);
  const kmTraveled = filteredEntries.reduce((total, obj) => total + (obj.finalKm - obj.initialKm), 0);
  const expense = kmTraveled * Number(totalCostPerKm);
  const totalLiquidGain = totalGrossGain - expense;

  return (
    <div>
      <Navbar />
      <C.Content>
        <C.CardContainer>
          <Weeks onSelectWeek={handleSelectWeek} />
          <C.GridCards>
            <Card title="Salário" value={totalLiquidGain.toFixed(2).replace('.', ',')} />
            <Card title="Playstation 5" value="0,00" />
            <Card title="Décimo" value="0,00" />
            <Card title="Restante" value="0,00" />
          </C.GridCards>
          <C.MainContainer>
            <SummaryBox totalGrossGain={totalGrossGain} kmTraveled={kmTraveled} expense={expense} totalLiquidGain={totalLiquidGain} />
            <MaintenanceBox costPerKm={userProfile.costPerKm[0]} kmTraveled={kmTraveled} />
          </C.MainContainer>
        </C.CardContainer>
      </C.Content>
    </div>
  )
}

export default Home