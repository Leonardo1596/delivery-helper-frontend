import React from 'react';
import * as C from './styles';
import Navbar from '../../components/Navbar/Index';

const Index = () => {
    const user = {
        email: 'leonardoemanuel156@gmail.com',
        goals: ['Salário', 'Playstation 5', 'Décimo', 'Restante']
    }

  return (
    <div>
        <Navbar />
    </div>
  )
}

export default Index;