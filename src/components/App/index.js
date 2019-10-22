import React from 'react';
import Logo from 'Components/logo';
import Filter from 'Components/filter';
import Sorting from 'Components/sorting';
import TicketList from 'Components/ticketList';
import {Wrapper, TicketView} from './styled';
import GlobalStyle from './globalStyle';

const App = () => (
    <Wrapper>
        <GlobalStyle />
        <Logo />
        <Filter />
        <TicketView>
            <Sorting />
            <TicketList />
        </TicketView>
    </Wrapper>
);

export default App;
