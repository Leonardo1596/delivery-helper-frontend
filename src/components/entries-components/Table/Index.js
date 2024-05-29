import React from 'react';
import * as C from './styles';
import axios from 'axios';
import { setUser } from '../../../redux/action';
import { format, parseISO } from 'date-fns';
import { FaRegTrashCan, FaPencil } from "react-icons/fa6";
import { useDispatch } from 'react-redux';

const Index = (props) => {    
    const dispatch = useDispatch();

    // Format date
    function formatDate(dateString) {
        const date = parseISO(dateString);
        return format(date, 'dd/MM/yyyy');
    };

    const hanleUpdateEntry = (item) => {
        console.log(item);
    }

    const hanleDeleteEntry = (item) => {
        axios.delete(`https://delivery-helper-backend.onrender.com/entry/delete/${props.userProfile._id}/${item._id}`)
            .then(response => {
                const updatedEntries = props.userProfile.entries.filter(entry => entry._id !== item._id);
                const updatedUserProfile = { ...props.userProfile, entries: updatedEntries };
                
                dispatch(setUser(updatedUserProfile));
            })
            .catch(error => {
                console.log(error);
            });
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
                    {props.tableData.map((item, index) => (
                        <tr key={index}>
                            <C.TableCell>{item.weekDay}</C.TableCell>
                            <C.TableCell>{formatDate(item.date)}</C.TableCell>
                            <C.TableCell>{item.kmTraveled} km</C.TableCell>
                            <C.TableCell>R$ {item.grossGain.toFixed(2).replace('.', ',')}</C.TableCell>
                            <C.TableCell>R$ {item.liquidGain.toFixed(2).replace('.', ',')}</C.TableCell>
                            <C.TableCell>R$ {item.spent.toFixed(2).replace('.', ',')}</C.TableCell>
                            <C.TableCell>{(item.percentageSpent.toFixed(2).replace('.', ','))}%</C.TableCell>
                            <C.TableCell>
                                <FaPencil id="update-icon" style={{ marginRight: '10px' }} onClick={() => hanleUpdateEntry(item)} />
                                <FaRegTrashCan id="delete-icon" onClick={() => hanleDeleteEntry(item)} />
                            </C.TableCell>
                        </tr>
                    ))}
                </tbody>
            </C.Table>
        </div>
    )
}

export default Index;