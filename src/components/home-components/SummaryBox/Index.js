import React from 'react';
import * as C from './styles';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Index = ({ userProfile, totalGrossGain, kmTraveled, foodExpense, expense, totalLiquidGain }) => {
    console.log(kmTraveled);
    return (
        <div>
            <C.Box>
                <C.Container>
                    <C.Header>Resumo</C.Header>
                    <C.List>
                        <C.Item>
                            <C.Title>Salário bruto</C.Title>
                            <C.Value>
                                {userProfile ? `R$ ${totalGrossGain.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Salário liquido</C.Title>
                            <C.Value>
                                {userProfile ? `R$ ${totalLiquidGain.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Km rodado</C.Title>
                            <C.Value>
                                {userProfile ? (kmTraveled !== 0 ? `${kmTraveled.toFixed(1)}km` : '0km') : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Gasto com lanche</C.Title>
                            <C.Value>
                                {userProfile ? `R$ ${foodExpense.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Gasto total</C.Title>
                            <C.Value>
                                {userProfile ? `R$ ${expense.toFixed(2).replace('.', ',')}` : <Skeleton style={{ borderRadius: '5px' }} width={100} />}
                            </C.Value>
                        </C.Item>

                    </C.List>
                </C.Container>
            </C.Box>
        </div>
    )
}

export default Index;