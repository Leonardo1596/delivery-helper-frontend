import React, { useState } from 'react';
import * as C from './styles';
import { FaXmark } from "react-icons/fa6";
import gifLoading from '../../assets/gif/loading-gif.gif';

const Index = ({ addEntrie, handleClosePopupForm, loading, setLoading }) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const [formValues, setFormValues] = useState({
        initialKm: '',
        finalKm: '',
        valueFoodExpense: 0,
        valueOtherExpenses: 0,
        value: 0,
        date: formattedDate
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const formatCurrency = (value) => {
        const numericValue = value.replace(/[^\d]/g, '');
        const formatted = Number(numericValue / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return formatted;
    };

    const handleValueChange = (event) => {
        const { value } = event.target;
        const numericValue = parseFloat(value.replace(/[^\d]/g, '')) / 100;
        const formattedValue = formatCurrency(value);
        const formattedValueWithComma = formattedValue.replace('.', ',');

        setFormValues((prevValues) => ({
            ...prevValues,
            value: numericValue.toFixed(2),
            formattedValue: formattedValueWithComma,
        }));
    };

    const handleFoodExpenseChange = (event) => {
        const valueFoodExpense = event.target.value;
        const numericValue = parseFloat(valueFoodExpense.replace(/[^\d]/g, '')) / 100;
        const formattedValue = formatCurrency(valueFoodExpense);
        const formattedValueWithComma = formattedValue.replace('.', ',');

        setFormValues((prevValues) => ({
            ...prevValues,
            valueFoodExpense: numericValue.toFixed(2),
            formattedValueFoodExpense: formattedValueWithComma,
        }));
    };

    const handleOtherExpensesChange = (event) => {
        const valueOtherExpenses = event.target.value;
        const numericValue = parseFloat(valueOtherExpenses.replace(/[^\d]/g, '')) / 100;
        const formattedValue = formatCurrency(valueOtherExpenses);
        const formattedValueWithComma = formattedValue.replace('.', ',');

        setFormValues((prevValues) => ({
            ...prevValues,
            valueOtherExpenses: numericValue.toFixed(2),
            formattedValueOtherExpenses: formattedValueWithComma,
        }));
    };

    function handleButton() {
        setLoading(true);
        addEntrie(formValues);
    };

    return (
        <div>
            <C.Container>
                <C.Box>
                    <C.Header>
                        <C.Title>Novo lançamento</C.Title>
                        <C.CloseIcon>
                            <FaXmark onClick={handleClosePopupForm} />
                        </C.CloseIcon>
                    </C.Header>
                    <C.Form>
                        <C.FormField>
                            <C.Label>Data</C.Label>
                            <C.Input type='date' id="date" value={formValues.date} onChange={handleChange} />
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Km inicial</C.Label>
                            <C.Input type='number' id='initialKm' value={formValues.initialKm} onChange={handleChange} />
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Km final</C.Label>
                            <C.Input type='number' id='finalKm' value={formValues.finalKm} onChange={handleChange} />
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Gasto com lanche</C.Label>
                            <C.Input
                                type='text'
                                style={{ caretColor: 'transparent' }}
                                autoComplete="off"
                                placeholder='R$ 0,00'
                                id='valueFoodExpense'
                                value={formValues.formattedValueFoodExpense}
                                onChange={handleFoodExpenseChange}
                            />
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Outros gastos</C.Label>
                            <C.Input
                                type='text'
                                style={{ caretColor: 'transparent' }}
                                autoComplete="off"
                                placeholder='R$ 0,00'
                                id='valueOtherExpenses'
                                value={formValues.formattedValueOtherExpenses}
                                onChange={handleOtherExpensesChange}
                            />
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Ganho</C.Label>
                            <C.Input
                                type='text'
                                style={{ caretColor: 'transparent' }}
                                autoComplete="off"
                                placeholder='R$ 0,00'
                                id='value'
                                value={formValues.formattedValue}
                                onChange={handleValueChange}
                            />
                        </C.FormField>
                        <C.ButtonContainer>
                            <C.Button onClick={handleButton} disabled={loading}>
                                {loading ? <img src={gifLoading} /> : 'Adicionar Lançamento'}
                            </C.Button>
                        </C.ButtonContainer>
                    </C.Form>
                </C.Box>
            </C.Container>
        </div>
    )
}

export default Index;
