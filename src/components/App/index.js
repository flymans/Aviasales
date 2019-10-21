import React from 'react';
import Logo from 'Components/logo';
import Filter from 'Components/filter';
import Sorting from 'Components/sorting';
import TicketList from 'Components/ticketList';
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
