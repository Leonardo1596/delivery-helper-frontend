import React from 'react';
import * as C from './styles';
import { format, parseISO } from 'date-fns';

const Index = (props) => {
    // Format date
    function formatDate(dateString) {
        const date = parseISO(dateString);
        return format(date, 'dd/MM/yyyy');
    };

    return (
        <div>
            <C.Table>
                    <thead>
                        <tr>
                            <C.TableHeader>Dia</C.TableHeader>
                            <C.TableHeader>Data</C.TableHeader>
                            {/* <C.TableHeader>Km inicial</C.TableHeader>
                            <C.TableHeader>Km final</C.TableHeader> */}
                            <C.TableHeader>Km rodado</C.TableHeader>
                            <C.TableHeader>Valor bruto</C.TableHeader>
                            <C.TableHeader>Valor líquido</C.TableHeader>
                            <C.TableHeader>Gasto</C.TableHeader>
                            <C.TableHeader>Gasto em %</C.TableHeader>
                        </tr>
                    </thead>

                    <tbody>
                    {props.tableData.map((item, index) => (
                                <tr key={index}>
                                    <C.TableCell>{item.weekDay}</C.TableCell>
                                    <C.TableCell>{formatDate(item.date)}</C.TableCell>
                                    {/* <C.TableCell>{item.initialKm} km</C.TableCell>
                                    <C.TableCell>{item.finalKm} km</C.TableCell> */}
                                    <C.TableCell>{item.kmTraveled} km</C.TableCell>
                                    <C.TableCell>R$ {item.grossGain.toFixed(2).replace('.', ',')}</C.TableCell>
                                    <C.TableCell>R$ {item.liquidGain.toFixed(2).replace('.', ',')}</C.TableCell>
                                    <C.TableCell>R$ {item.spent.toFixed(2).replace('.', ',')}</C.TableCell>
                                    <C.TableCell>{(item.percentageSpent.toFixed(2).replace('.', ','))}%</C.TableCell>
                                </tr>
                            ))}

                            {/* <tr>
                                <C.TableCell colSpan="4"></C.TableCell>
                                <C.TableHeader>Valor bruto total</C.TableHeader>
                                <C.TableHeader>Valor líquido total</C.TableHeader>
                                <C.TableHeader>Gasto total</C.TableHeader>
                            </tr>

                            <tr>
                                <C.TableCell colSpan="4"></C.TableCell>
                                {props.totalGrossGain ? <C.TableCell>R$ {props.totalGrossGain.toFixed(2).replace('.', ',')}</C.TableCell> : ''}
                                {props.totalLiquidGain ? <C.TableCell>R$ {props.totalLiquidGain.toFixed(2).replace('.', ',')}</C.TableCell> : ''}
                                {props.totalSpent ? <C.TableCell>R$ {props.totalSpent.toFixed(2).replace('.', ',')}</C.TableCell> : ''}
                            </tr> */}
                    </tbody>
            </C.Table>
        </div>
    )
}

export default Index;