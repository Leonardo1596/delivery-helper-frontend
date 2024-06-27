import React, { useState } from 'react';
import * as C from './styles';
import { FaXmark } from "react-icons/fa6";
import axios from 'axios';
import gifLoading from '../../assets/gif/loading-gif.gif';

const Index = ({ updateGasolineValue, handleClosePopup, loading, setLoading }) => {
    const [formValues, setFormValues] = useState({
        value: 0,
    });

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

    async function handleButton() {
        setLoading(true);
        if (formValues.value === 0) {
            return;
        }
        
        updateGasolineValue(formValues.value)
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleButton();
        }
    };
    return (
        <div>
            <C.Container>
                <C.Box>
                    <C.Header>
                        <C.Title>Atualize o valor da gasolina</C.Title>
                        <C.CloseIcon>
                            <FaXmark onClick={handleClosePopup} />
                        </C.CloseIcon>
                    </C.Header>
                    <C.Form>
                        <C.FormField>
                            <C.Label>Gasolina</C.Label>
                            <C.Input
                                type='text'
                                style={{ caretColor: 'transparent' }}
                                autoComplete="off"
                                placeholder='R$ 0,00'
                                id='value'
                                value={formValues.formattedValue}
                                onChange={handleValueChange}
                                onKeyPress={handleKeyPress}
                            />
                        </C.FormField>
                        <C.ButtonContainer>
                            <C.Button onClick={handleButton} disabled={loading} >
                                {loading ? <img src={gifLoading} /> : 'Alterar valor da gasolina'}
                            </C.Button>
                        </C.ButtonContainer>
                    </C.Form>
                </C.Box>
            </C.Container>
        </div>
    )
}

export default Index