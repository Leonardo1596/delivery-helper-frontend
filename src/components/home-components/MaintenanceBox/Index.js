import React from 'react';
import * as C from './styles';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Index = ({ userProfile, costPerKm, kmTraveled }) => {
    const oleo = userProfile && kmTraveled * costPerKm.oleo.value / costPerKm.oleo.km;
    const relacao = userProfile && kmTraveled * costPerKm.relacao.value  / costPerKm.relacao.km;
    const pneuDianteiro = userProfile && kmTraveled * costPerKm.pneuDianteiro.value  / costPerKm.pneuDianteiro.km;
    const pneuTraseiro = userProfile && kmTraveled * costPerKm.pneuTraseiro.value  / costPerKm.pneuTraseiro.km;
    const gasolina = userProfile && kmTraveled * costPerKm.gasolina.value  / costPerKm.gasolina.km;

    console.log(oleo);

    return (
        <div>
            <C.Box>
                <C.Container>
                    <C.Header>Gastos de manutenção</C.Header>
                    <C.List>
                        <C.Item>
                            <C.Title>Óleo</C.Title>
                            <C.Value>
                                {/* R$ {oleo.toFixed(2).replace('.', ',')} */}
                                {userProfile ? `R$ ${oleo.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Relação</C.Title>
                            <C.Value>
                                {/* R$ {relacao.toFixed(2).replace('.', ',')} */}
                                {userProfile ? `R$ ${relacao.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Pneu dianteiro</C.Title>
                            <C.Value>
                                {/* R$ {pneuDianteiro.toFixed(2).replace('.', ',')} */}
                                {userProfile ? `R$ ${pneuDianteiro.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Pneu traseiro</C.Title>
                            <C.Value>
                                {/* R$ {pneuTraseiro.toFixed(2).replace('.', ',')} */}
                                {userProfile ? `R$ ${pneuTraseiro.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Gasolina</C.Title>
                            <C.Value>
                                {/* R$ {gasolina.toFixed(2).replace('.', ',')} */}
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