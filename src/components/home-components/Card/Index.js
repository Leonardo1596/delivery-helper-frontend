import React from 'react';
import * as c from './styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Index = ({ userProfile, title, value }) => {
  return (
    <div>
      <c.Card>
        <c.Container>
          <c.Header>{title}</c.Header>
          <c.Value>
            {/* R$ {value} */}
            {userProfile ? `R$ ${value}` : <Skeleton width={100} height={23} />}
          </c.Value>
        </c.Container>
      </c.Card>
    </div>
  )
}

export default Index