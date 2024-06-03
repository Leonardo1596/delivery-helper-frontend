import React from 'react';
import * as C from './styles';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Index = ({ userProfile, totalGrossGain, kmTraveled, expense, totalLiquidGain }) => {
    return (
        <div>
            <C.Box>
                <C.Container>
                    <C.Header>Resumo</C.Header>
                    <C.List>
                        <C.Item>
                            <C.Title>Salário bruto</C.Title>
                            <C.Value>
                                {/* {`R$ ${userProfile && totalGrossGain.toFixed(2).replace('.', ',')}`} */}
                                {userProfile ? `R$ ${totalGrossGain.toFixed(2).replace('.', ',')}` : <Skeleton width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Salário liquido</C.Title>
                            <C.Value>
                                {/* R$ {totalLiquidGain.toFixed(2).replace('.', ',')} */}
                                {userProfile ? `R$ ${totalLiquidGain.toFixed(2).replace('.', ',')}` : <Skeleton width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Km rodado</C.Title>
                            <C.Value>
                                {/* {kmTraveled}km */}
                                {userProfile ? `${kmTraveled}km` : <Skeleton width={100} />}
                            </C.Value>
                        </C.Item>
                        <C.Item>
                            <C.Title>Gasto</C.Title>
                            <C.Value>
                                {/* R$ {expense.toFixed(2).replace('.', ',')} */}
                                {userProfile ? `R$ ${expense.toFixed(2).replace('.', ',')}` : <Skeleton width={100} />}
                            </C.Value>
                        </C.Item>

                    </C.List>
                </C.Container>
            </C.Box>
        </div>
    )
}

export default Index;