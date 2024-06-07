import React, { useEffect, useState } from 'react';
import * as C from './styles';

const Index = ({ userProfile }) => {
    const [formValues, setFormValues] = useState({
        formattedSalary: '',
        formattedGoal1: '',
        formattedGoal2: ''
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
                formattedSalary: userProfile.goals[0].salaryLimit || '',
                formattedGoal1: userProfile.goals[0].goal1Limit || '',
                formattedGoal2: userProfile.goals[0].goal2Limit || ''
            });
        }
    }, [userProfile]);

    return (
        <div>
            <C.Content>
                <C.Container>
                    <C.HeaderContainer>
                        <C.Header>Editar suas metas</C.Header>
                    </C.HeaderContainer>
                    <C.Form>
                        <C.FormField>
                            <C.Label>Salário</C.Label>
                            <C.Input
                                type='text'
                                style={{ caretColor: 'transparent' }}
                                autoComplete="off"
                                placeholder='R$ 0,00'
                                name='salary'
                                value={formValues.formattedSalary}
                                onChange={handleValueChange}
                            />
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Meta 1</C.Label>
                            <C.Input
                                type='text'
                                style={{ caretColor: 'transparent' }}
                                autoComplete="off"
                                placeholder='R$ 0,00'
                                name='goal1'
                                value={formValues.formattedGoal1}
                                onChange={handleValueChange}
                            />
                        </C.FormField>
                        <C.FormField>
                            <C.Label>Meta 2</C.Label>
                            <C.Input
                                type='text'
                                style={{ caretColor: 'transparent' }}
                                autoComplete="off"
                                placeholder='R$ 0,00'
                                name='goal2'
                                value={formValues.formattedGoal2}
                                onChange={handleValueChange}
                            />
                        </C.FormField>
                    </C.Form>
                </C.Container>
            </C.Content>
        </div>
    )
}

export default Index;