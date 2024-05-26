import React from 'react';
import * as C from './styles';
import LoginComponent from '../../components/Login/Index';

const Index = () => {
    return (
        <div>
            <C.Login>
                <LoginComponent />
            </C.Login>
        </div>
    )
}

export default Index;