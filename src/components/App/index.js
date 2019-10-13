import React from 'react';
import Logo from '../logo';
import Filter from '../filter';
import Sorting from '../sorting';
import TicketList from '../ticketList';
import Wrapper from './styled';

const App = () => (
    <Wrapper>
        <Logo />
        <Filter />
        <Sorting />
        <TicketList />
    </Wrapper>
);

export default App;
