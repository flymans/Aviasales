import React from 'react';
import Logo from 'components/Logo';
import Filter from 'components/Filter';
import Sorting from 'components/Sorting';
import TicketList from 'components/TicketList';
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
