import React, { useState } from 'react';
import * as C from './styles';
import { FaXmark } from "react-icons/fa6";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/action';

const Index = ({ userProfile, setShowGasolineForm }) => {
    const dispatch = useDispatch();

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

    function updateGasolineValue() {
        const cost = (Number(formValues.value) / 35).toFixed(3);

        if (formValues.value === 0) {
            return;
        }

        axios.put(`https://delivery-helper-backend.onrender.com/cost_per_km/update/${userProfile._id}/${userProfile.costPerKm[0]._id}`, { gasolina: Number(cost) })
            .then(response => {
                console.log(response.data);

                function setUpdatedUser() {
                    dispatch(setUser(''));
                    dispatch(setUser(updatedUser));
                }

                // Copy userProfile
                const updatedUser = userProfile;

                updatedUser.costPerKm[0].gasolina = response.data.gasolina
                setUpdatedUser();
                handleClosePopup();
            })
            .catch(error => {
                console.log(error);
            });
    };

    function handleClosePopup() {
        setShowGasolineForm(false);
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
                            />
                        </C.FormField>
                        <C.ButtonContainer>
                            <C.Button onClick={updateGasolineValue}>Alterar valor da gasolina</C.Button>
                        </C.ButtonContainer>
                    </C.Form>
                </C.Box>
            </C.Container>
        </div>
    )
}

export default Index