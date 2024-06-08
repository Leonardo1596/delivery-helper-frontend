import React, { useEffect, useState } from 'react';
import * as C from './styles';

const Index = ({ userProfile, saveCostPerKmUpdate }) => {
    const [formValues, setFormValues] = useState({
        formattedOleoValue: '',
        oleoKm: '',
        formattedRelacaoValue: '',
        relacaoKm: '',
        formattedPneuDianteiroValue: '',
        pneuDianteiroKm: '',
        formattedPneuTraseiroValue: '',
        pneuTraseiroKm: '',
        formattedGasolinaValue: '',
        gasolinaKm: ''
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
        const { name, value } = event.target;
        const numericValue = parseFloat(value.replace(/[^\d]/g, '')) / 100;
        const formattedValue = formatCurrency(value);
        const formattedValueWithComma = formattedValue.replace('.', ',');

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: numericValue.toFixed(2),
            [`formatted${name.charAt(0).toUpperCase() + name.slice(1)}`]: formattedValueWithComma,
        }));
    };

    useEffect(() => {
        if (userProfile) {
            setFormValues({
                formattedOleoValue: userProfile.costPerKm[0].oleo.value ? formatCurrency((userProfile.costPerKm[0].oleo.value * 100).toString()) : '',
                oleoKm: userProfile.costPerKm[0].oleo.km || '',
                formattedRelacaoValue: userProfile.costPerKm[0].relacao.value ? formatCurrency((userProfile.costPerKm[0].relacao.value * 100).toString()) : '',
                relacaoKm: userProfile.costPerKm[0].relacao.km || '',
                formattedPneuDianteiroValue: userProfile.costPerKm[0].pneuDianteiro.value ? formatCurrency((userProfile.costPerKm[0].pneuDianteiro.value * 100).toString()) : '',
                pneuDianteiroKm: userProfile.costPerKm[0].pneuDianteiro.km || '',
                formattedPneuTraseiroValue: userProfile.costPerKm[0].pneuTraseiro.value ? formatCurrency((userProfile.costPerKm[0].pneuTraseiro.value * 100).toString()) : '',
                pneuTraseiroKm: userProfile.costPerKm[0].pneuTraseiro.km || '',
                formattedGasolinaValue: userProfile.costPerKm[0].gasolina.value ? formatCurrency((userProfile.costPerKm[0].gasolina.value * 100).toString()) : '',
                gasolinaKm: userProfile.costPerKm[0].gasolina.km || '',
            });
        }
    }, [userProfile]);

    function handleSaveButton() {
        saveCostPerKmUpdate(formValues);
    };

    return (
        <div>
            <C.Content>
                <C.Container>
                    <C.HeaderContainer>
                        <C.Header>Editar o custo por quilômetro</C.Header>
                    </C.HeaderContainer>
                    <C.Form>
                        <C.FormField>
                            <C.Label>Óleo</C.Label>
                            <C.FormField style={{
                                marginLeft: '20px',
                                marginTop: '10px',
                                marginBottom: '0'
                            }}>
                                <C.Label>Preço</C.Label>
                                <C.Input
                                    type='text'
                                    style={{ caretColor: 'transparent' }}
                                    autoComplete="off"
                                    placeholder='R$ 0,00'
                                    name='oleoValue'
                                    value={formValues.formattedOleoValue}
                                    onChange={handleValueChange}
                                />
                                <C.FormField style={{
                                    marginTop: '10px',
                                    marginBottom: '0'
                                }}>
                                    <C.Label>Km</C.Label>
                                    <C.Input
                                        type='number'
                                        id='oleoKm'
                                        value={formValues.oleoKm}
                                        onChange={handleChange}
                                    />
                                </C.FormField>
                            </C.FormField>
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Relacao</C.Label>
                            <C.FormField style={{
                                marginLeft: '20px',
                                marginTop: '10px',
                                marginBottom: '0'
                            }}>
                                <C.Label>Preço</C.Label>
                                <C.Input
                                    type='text'
                                    style={{ caretColor: 'transparent' }}
                                    autoComplete="off"
                                    placeholder='R$ 0,00'
                                    name='relacaoValue'
                                    value={formValues.formattedRelacaoValue}
                                    onChange={handleValueChange}
                                />
                                <C.FormField style={{
                                    marginTop: '10px',
                                    marginBottom: '0'
                                }}>
                                    <C.Label>Km</C.Label>
                                    <C.Input
                                        type='number'
                                        id='relacaoKm'
                                        value={formValues.relacaoKm}
                                        onChange={handleChange}
                                    />
                                </C.FormField>
                            </C.FormField>
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Pneu dianteiro</C.Label>
                            <C.FormField style={{
                                marginLeft: '20px',
                                marginTop: '10px',
                                marginBottom: '0'
                            }}>
                                <C.Label>Preço</C.Label>
                                <C.Input
                                    type='text'
                                    style={{ caretColor: 'transparent' }}
                                    autoComplete="off"
                                    placeholder='R$ 0,00'
                                    name='pneuDianteiroValue'
                                    value={formValues.formattedPneuDianteiroValue}
                                    onChange={handleValueChange}
                                />
                                <C.FormField style={{
                                    marginTop: '10px',
                                    marginBottom: '0'
                                }}>
                                    <C.Label>Km</C.Label>
                                    <C.Input
                                        type='number'
                                        id='pneuDianteiroKm'
                                        value={formValues.pneuDianteiroKm}
                                        onChange={handleChange}
                                    />
                                </C.FormField>
                            </C.FormField>
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Pneu traseiro</C.Label>
                            <C.FormField style={{
                                marginLeft: '20px',
                                marginTop: '10px',
                                marginBottom: '0'
                            }}>
                                <C.Label>Preço</C.Label>
                                <C.Input
                                    type='text'
                                    style={{ caretColor: 'transparent' }}
                                    autoComplete="off"
                                    placeholder='R$ 0,00'
                                    name='pneuTraseiroValue'
                                    value={formValues.formattedPneuTraseiroValue}
                                    onChange={handleValueChange}
                                />
                                <C.FormField style={{
                                    marginTop: '10px',
                                    marginBottom: '0'
                                }}>
                                    <C.Label>Km</C.Label>
                                    <C.Input
                                        type='number'
                                        id='pneuTraseiroKm'
                                        value={formValues.pneuTraseiroKm}
                                        onChange={handleChange}
                                    />
                                </C.FormField>
                            </C.FormField>
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Gasolina</C.Label>
                            <C.FormField style={{
                                marginLeft: '20px',
                                marginTop: '10px',
                                marginBottom: '0'
                            }}>
                                <C.Label>Preço</C.Label>
                                <C.Input
                                    type='text'
                                    style={{ caretColor: 'transparent' }}
                                    autoComplete="off"
                                    placeholder='R$ 0,00'
                                    name='gasolinaValue'
                                    value={formValues.formattedGasolinaValue}
                                    onChange={handleValueChange}
                                />
                                <C.FormField style={{
                                    marginTop: '10px',
                                    marginBottom: '0'
                                }}>
                                    <C.Label>Km</C.Label>
                                    <C.Input
                                        type='number'
                                        id='gasolinaKm'
                                        value={formValues.gasolinaKm}
                                        onChange={handleChange}
                                    />
                                </C.FormField>
                            </C.FormField>
                        </C.FormField>
                    </C.Form>
                    <C.ButtonContainer>
                        <C.Button onClick={handleSaveButton}>Salvar alterações</C.Button>
                    </C.ButtonContainer>
                </C.Container>
            </C.Content>
        </div>
    )
}

export default Index;
