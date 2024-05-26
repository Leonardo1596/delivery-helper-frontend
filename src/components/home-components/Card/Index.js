import React from 'react';
import * as c from './styles';

const Index = ({ title, value }) => {
  return (
    <div>
        <c.Card>
            <c.Container>
                <c.Header>{title}</c.Header>
                <c.Value>R$ {value}</c.Value>
            </c.Container>
        </c.Card>
    </div>
  )
}

export default Index