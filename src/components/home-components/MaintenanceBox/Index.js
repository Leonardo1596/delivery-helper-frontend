import React from 'react';
import * as C from './styles';

const Index = ({ costPerKm, kmTraveled }) => {
    const oleo = kmTraveled * costPerKm.oleo;
    const relacao = kmTraveled * costPerKm.relacao;
    const pneuDianteiro = kmTraveled * costPerKm.pneuDianteiro;
    const pneuTraseiro = kmTraveled * costPerKm.pneuTraseiro;
    const gasolina = kmTraveled * costPerKm.gasolina;

    return (
        <div>
            <C.Box>
                <C.Container>
                    <C.Header>Gastos de manutenção</C.Header>
                    <C.List>
                        <C.Item>
                            <C.Title>Óleo</C.Title>
                            <C.Value>R$ {oleo.toFixed(2).replace('.', ',')}</C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Relação</C.Title>
                            <C.Value>R$ {relacao.toFixed(2).replace('.', ',')}</C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Pneu dianteiro</C.Title>
                            <C.Value>R$ {pneuDianteiro.toFixed(2).replace('.', ',')}</C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Pneu traseiro</C.Title>
                            <C.Value>R$ {pneuTraseiro.toFixed(2).replace('.', ',')}</C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Gasolina</C.Title>
                            <C.Value>R$ {gasolina.toFixed(2).replace('.', ',')}</C.Value>
                        </C.Item>
                    </C.List>
                </C.Container>
            </C.Box>
        </div>
    )
}

export default Index;