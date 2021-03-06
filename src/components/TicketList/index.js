import React, {useEffect} from 'react';
import uniqueId from 'lodash.uniqueid';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSearchIdIfNeeded, fetchTicketListIfNeeded} from 'actions';
import {sortFn, filterFn} from 'components/TicketList/utils';
import TicketCard from 'components/TicketList/TicketCard';
import Spinner from 'components/TicketList/Spinner';
import TicketListContainer from './styled';

const ticketList = () => {
    const sortCheapest = useSelector(state => state.sortCheapest);
    const filterStopsOptions = useSelector(state => state.filterStopsOptions);
    const isFetching = useSelector(state => state.isFetching);
    const isError = useSelector(state => state.isError);
    const searchId = useSelector(state => state.searchId);
    const ticketCatalog = useSelector(state => state.ticketList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSearchIdIfNeeded());
    }, []);

    useEffect(() => {
        dispatch(fetchTicketListIfNeeded());
    }, [searchId]);

    const renderTicketList = () => {
        const renderedTicketList = ticketCatalog
            .sort(sortFn(sortCheapest))
            .filter(filterFn(filterStopsOptions))
            .slice(0, 5);

        return renderedTicketList.length > 0 ? (
            renderedTicketList.map(ticket => (
                <TicketCard key={uniqueId()} ticket={ticket} />
            ))
        ) : (
            <span>Билеты не найдены</span>
        );
    };

    return (
        <TicketListContainer>
            {isError && <span>Что-то пошло не так...</span>}
            {isFetching ? <Spinner /> : renderTicketList()}
        </TicketListContainer>
    );
};

export default ticketList;
