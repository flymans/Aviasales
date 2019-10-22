import React from 'react';
import Logo from 'components/logo';
import Filter from 'components/filter';
import Sorting from 'components/sorting';
import TicketList from 'components/ticketList';
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
