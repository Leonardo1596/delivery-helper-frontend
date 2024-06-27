import React from 'react';
import * as C from './styles';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Index = ({ userProfile, filteredEntries, costPerKm, kmTraveled }) => {
    const calculateCost = (value, km) => (km !== 0 ? (kmTraveled * value / km) : 0)

    const oleo = userProfile ? calculateCost(costPerKm.oleo.value, costPerKm.oleo.km) : 0;
    const relacao = userProfile ? calculateCost(costPerKm.relacao.value, costPerKm.relacao.km) : 0;
    const pneuDianteiro = userProfile ? calculateCost(costPerKm.pneuDianteiro.value, costPerKm.pneuDianteiro.km) : 0;
    const pneuTraseiro = userProfile ? calculateCost(costPerKm.pneuTraseiro.value, costPerKm.pneuTraseiro.km) : 0;
    const gasolina = userProfile && filteredEntries.reduce((total, obj) => total + obj.gasolineExpense, 0);

    return (
        <div>
            <C.Box>
                <C.Container>
                    <C.Header>Gastos de manutenção</C.Header>
                    <C.List>
                        <C.Item>
                            <C.Title>Óleo</C.Title>
                            <C.Value>
                                {userProfile ? `R$ ${oleo.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Relação</C.Title>
                            <C.Value>
                                {userProfile ? `R$ ${relacao.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Pneu dianteiro</C.Title>
                            <C.Value>
                                {userProfile ? `R$ ${pneuDianteiro.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Pneu traseiro</C.Title>
                            <C.Value>
                                {userProfile ? `R$ ${pneuTraseiro.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Gasolina</C.Title>
                            <C.Value>
                                {userProfile ? `R$ ${gasolina.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                    </C.List>
                </C.Container>
            </C.Box>
        </div>
    )
}

export default Index;