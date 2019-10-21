import React from 'react';
import Logo from 'Components/logo';
import Filter from 'Components/filter';
import Sorting from 'Components/sorting';
import Spinner from 'Components/spinner';
import TicketList from 'Components/ticketList';
import Wrapper from './styled';

const App = () => (
    <Wrapper>
        <Logo />
        <Filter />
        <Sorting />
        <Spinner />
        <TicketList />
    </Wrapper>
);

export default App;
