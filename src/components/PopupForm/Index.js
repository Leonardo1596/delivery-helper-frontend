import React, { useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { FaXmark } from "react-icons/fa6";
import gifLoading from '../../assets/gif/loading-gif.gif';

const Index = ({ userProfile, setShowPopup, getUserInfo }) => {
    const [loading, setLoading] = useState(false);

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const [formValues, setFormValues] = useState({
        initialKm: '',
        finalKm: '',
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



    function addEntrie() {
        setLoading(true);
        let body = {
            userId: userProfile._id,
            date: formValues.date,
            initialKm: Number(formValues.initialKm),
            finalKm: Number(formValues.finalKm),
            grossGain: Number(formValues.value),
            costPerKm: calculateCostPerKmTotal(userProfile.costPerKm[0])
        };

        axios.post('https://delivery-helper-backend.onrender.com/entry/create', body)
            .then(response => {
                getUserInfo();
                handleClosePopup();
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
            });
    }

    function handleClosePopup() {
        setShowPopup(false)
    }

    return (
        <div>
            <C.Container>
                <C.Box>
                    <C.Header>
                        <C.Title>Novo lançamento</C.Title>
                        <C.CloseIcon>
                            <FaXmark onClick={handleClosePopup} />
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
                            <C.Button onClick={addEntrie} disabled={loading}>
                                {loading ? <img src={gifLoading} /> : 'Adicionar Lançamento'}
                            </C.Button>
                        </C.ButtonContainer>
                    </C.Form>
                </C.Box>
            </C.Container>
        </div>
    )
}

export default Index