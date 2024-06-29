import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { startOfWeek, endOfWeek, format, parseISO, isWithinInterval } from 'date-fns';
import Navbar from '../../components/Navbar/Index';
import Weeks from '../../components/Weeks/Index';
import Card from '../../components/home-components/Card/Index';
import SummaryBox from '../../components/home-components/SummaryBox/Index';
import MaintenanceBox from '../../components/home-components/MaintenanceBox/Index';
import PersonalExpense from '../../components/home-components/PersonalExpense/Index';

const Home = () => {
  const userId = useSelector((state) => state.handleSetUserId);
  const [userProfile, setUserProfile] = useState('');

  function getUserInfo() {
    axios.get(`https://delivery-helper-backend.onrender.com/get/user/${userId}`)
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
  const filterEntriesByDate = (entries, startDate, endDate) => {
    return entries.filter(entry => {
      const entryDate = parseISO(entry.date);
      return isWithinInterval(entryDate, { start: startDate, end: endDate });
    });
  }

  // Filters entries if a week is selected
  const filteredEntries = userProfile && (selectedWeek
    ? filterEntriesByDate(userProfile.entries, selectedWeek.startDate, selectedWeek.endDate)
    : userProfile.entries);

    function calculateTotalExpense() {
      return userProfile && filteredEntries.reduce((total, obj) => {
        return total + (obj.kmTraveled * obj.costPerKm);
      }, 0);
    }
  
    const expense = calculateTotalExpense();

  const totalGrossGain = userProfile && filteredEntries.reduce((total, obj) => total + obj.grossGain, 0);
  const kmTraveled = userProfile && filteredEntries.reduce((total, obj) => total + (obj.finalKm - obj.initialKm), 0);
  const totalLiquidGain = totalGrossGain - expense;

  // Filters personal expenses if a week is selected
  const filteredPersonalExpenses = userProfile && (selectedWeek ? filterEntriesByDate(userProfile.personalExpense, selectedWeek.startDate, selectedWeek.endDate) : userProfile.personalExpense);
  const personalDistanceTravelled = userProfile && filteredPersonalExpenses.reduce((total, obj) => total + obj.distance, 0);


  let salary = userProfile && Math.min(totalLiquidGain, userProfile.goals[0].salaryLimit);
  let remaining = totalLiquidGain - salary;

  let goal1 = userProfile && Math.min(remaining, userProfile.goals[0].goal1Limit);
  remaining -= goal1;

  let goal2 = userProfile && Math.min(remaining, userProfile.goals[0].goal2Limit);
  remaining -= goal2;

  return (
    <div>
      <Navbar />
      <C.Content>
        <C.CardContainer>
          <Weeks onSelectWeek={handleSelectWeek} />
          <C.GridCards>
            <Card userProfile={userProfile} title="Salário" value={userProfile && salary.toFixed(2).replace('.', ',')} />
            <Card userProfile={userProfile} title="Meta 1" value={userProfile && goal1.toFixed(2).replace('.', ',')} />
            <Card userProfile={userProfile} title="Meta 2" value={userProfile && goal2.toFixed(2).replace('.', ',')} />
            <Card userProfile={userProfile} title="Restante" value={userProfile && remaining.toFixed(2).replace('.', ',')} />
          </C.GridCards>
          <C.MainContainer>
            <SummaryBox userProfile={userProfile} totalGrossGain={userProfile && totalGrossGain} kmTraveled={kmTraveled} expense={expense} totalLiquidGain={totalLiquidGain} />
            <MaintenanceBox userProfile={userProfile} filteredEntries={filteredEntries} costPerKm={userProfile && userProfile.costPerKm[0]} kmTraveled={kmTraveled} />
            <PersonalExpense userProfile={userProfile} personalDistanceTravelled={personalDistanceTravelled} filteredPersonalExpenses={filteredPersonalExpenses} costPerKm={userProfile && userProfile.costPerKm[0]} />
          </C.MainContainer>
        </C.CardContainer>
      </C.Content>
    </div>
  )
}

export default Home