import React from 'react';
import * as C from './styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Index = ({ userProfile, title, value }) => {
  return (
    <div>
      <C.Card>
        <C.Container>
          <C.Header>{title}</C.Header>
          <C.Value>
            {/* R$ {value} */}
            {userProfile ? `R$ ${value}` : <Skeleton style={{ borderRadius: '5px' }} width={100} height={23} />}
          </C.Value>
        </C.Container>
      </C.Card>
    </div>
  )
}

export default Index