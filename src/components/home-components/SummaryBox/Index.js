import React from 'react';
import * as C from './styles';

const Index = ({ totalGrossGain, kmTraveled, expense, totalLiquidGain }) => {
    return (
        <div>
            <C.Box>
                <C.Container>
                    <C.Header>Resumo</C.Header>
                    <C.List>
                        <C.Item>
                            <C.Title>Salário bruto</C.Title>
                            <C.Value>R$ {totalGrossGain.toFixed(2).replace('.', ',')}</C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Salário liquido</C.Title>
                            <C.Value>R$ {totalLiquidGain.toFixed(2).replace('.', ',')}</C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Km rodado</C.Title>
                            <C.Value>{kmTraveled}km</C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Gasto</C.Title>
                            <C.Value>R$ {expense.toFixed(2).replace('.', ',')}</C.Value>
                        </C.Item>

                    </C.List>
                </C.Container>
            </C.Box>
        </div>
    )
}

export default Index;