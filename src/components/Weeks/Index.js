import React, { useState, useEffect } from 'react';
import * as C from './styles';
import { format, startOfWeek, endOfWeek, addWeeks, subWeeks } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Index = ({ onSelectWeek }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedWeek, setSelectedWeek] = useState(null);
    const [buttonText, setButtonText] = useState('Semana Atual');
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Function to generate weeks
    const generateWeeks = () => {
        const weeks = [];
        let startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
        for (let i = 0; i < 14; i++) { // Generate 14 weeks
            const endDate = endOfWeek(startDate, { weekStartsOn: 1 });
            weeks.push({ startDate, endDate });
            startDate = subWeeks(startDate, 1); // Subtract one week to go to the previous week
        }
        return weeks;
    };

    const weeks = generateWeeks(); // Generate weeks

    const handleChangeWeek = (index) => {
        const { startDate, endDate } = weeks[index];
        setSelectedWeek({ startDate, endDate });
        onSelectWeek({ startDate, endDate });

        // Change button name
        const weekText = formatWeekDate(startDate, endDate);
        setButtonText(weekText);

        setIsOpen(false);
    };

    useEffect(() => {
        if (!selectedWeek) {
            // Set the current week as the initial selection
            const currentWeekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
            const currentWeekEnd = endOfWeek(currentWeekStart, { weekStartsOn: 1 });
            setSelectedWeek({ startDate: currentWeekStart, endDate: currentWeekEnd });
            onSelectWeek({ startDate: currentWeekStart, endDate: currentWeekEnd });
        }
    }, [selectedWeek, onSelectWeek]);

    const formatWeekDate = (startDate, endDate) => {
        return `${format(startDate, 'd')} ${format(startDate, 'MMM', { locale: ptBR })} - ${format(endDate, 'd')} ${format(endDate, 'MMM', { locale: ptBR })}`;
    };

    return (
        <div>
            <C.WeekContainer>
                <C.WeekArea>
                    <C.DropdownContainer>
                        <C.DropdownButton onClick={toggleDropdown}>
                            {buttonText}
                            {isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
                        </C.DropdownButton>
                        <C.DropdownContent isOpen={isOpen}>
                            {weeks.map((week, index) => (
                                <C.DropdownItem key={index} onClick={() => handleChangeWeek(index)}>
                                    {formatWeekDate(week.startDate, week.endDate)}
                                </C.DropdownItem>
                            ))}
                        </C.DropdownContent>
                    </C.DropdownContainer>
                </C.WeekArea>
            </C.WeekContainer>
        </div>
    );
};

export default Index;