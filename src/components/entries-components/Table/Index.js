import React from 'react';
import * as C from './styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { format, parseISO } from 'date-fns';
import { FaRegTrashCan, FaPencil } from "react-icons/fa6";

const Index = ({ userProfile, tableData, handleShowConfirmPopup }) => {
    // Format date
    function formatDate(dateString) {
        const date = parseISO(dateString);
        return format(date, 'dd/MM/yyyy');
    };

    const hanleUpdateEntry = (item) => {
        console.log(item);
    }

    const handleDeleteButton = (item) => {
        handleShowConfirmPopup(item);
    };

    return (
        <div>
            <C.Table>
                <thead>
                    <tr>
                        <C.TableHeader>Dia</C.TableHeader>
                        <C.TableHeader>Data</C.TableHeader>
                        <C.TableHeader>Km rodado</C.TableHeader>
                        <C.TableHeader>Valor bruto</C.TableHeader>
                        <C.TableHeader>Valor líquido</C.TableHeader>
                        <C.TableHeader>Gasto</C.TableHeader>
                        <C.TableHeader>Gasto em %</C.TableHeader>
                        <C.TableHeader>Ações</C.TableHeader>
                    </tr>
                </thead>

                <tbody>
                    {userProfile ? tableData.map((item, index) => (
                        <tr key={index}>
                            <C.TableCell>{item.weekDay}</C.TableCell>
                            <C.TableCell>{formatDate(item.date)}</C.TableCell>
                            <C.TableCell>{item.kmTraveled.toFixed(1)} km</C.TableCell>
                            <C.TableCell>R$ {item.grossGain.toFixed(2).replace('.', ',')}</C.TableCell>
                            <C.TableCell>R$ {item.liquidGain.toFixed(2).replace('.', ',')}</C.TableCell>
                            <C.TableCell>R$ {item.spent.toFixed(2).replace('.', ',')}</C.TableCell>
                            <C.TableCell>{(item.percentageSpent.toFixed(2).replace('.', ','))}%</C.TableCell>
                            <C.TableCell>
                                <FaPencil id="update-icon" style={{ marginRight: '10px' }} onClick={() => hanleUpdateEntry(item)} />
                                <FaRegTrashCan id="delete-icon" onClick={() => handleDeleteButton(item)} />
                            </C.TableCell>
                        </tr>
                    )) : (
                        Array.from({ length: 4 }).map((_, index) => (
                        <tr key={index}>
                            <C.TableCell><Skeleton style={{ borderRadius: '5px' }} width={90} /></C.TableCell>
                            <C.TableCell><Skeleton style={{ borderRadius: '5px' }} width={90} /></C.TableCell>
                            <C.TableCell><Skeleton style={{ borderRadius: '5px' }} width={90} /></C.TableCell>
                            <C.TableCell><Skeleton style={{ borderRadius: '5px' }} width={90} /></C.TableCell>
                            <C.TableCell><Skeleton style={{ borderRadius: '5px' }} width={90} /></C.TableCell>
                            <C.TableCell><Skeleton style={{ borderRadius: '5px' }} width={90} /></C.TableCell>
                            <C.TableCell><Skeleton style={{ borderRadius: '5px' }} width={90} /></C.TableCell>
                            <C.TableCell><Skeleton style={{ borderRadius: '5px' }} width={90} /></C.TableCell>
                        </tr>
                        ))
                    )}
                </tbody>
            </C.Table>
        </div>
    )
}

export default Index;