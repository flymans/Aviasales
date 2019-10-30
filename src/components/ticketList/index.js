import React, {useState, useEffect} from 'react';
import uniqueId from 'lodash.uniqueid';
import {useSelector} from 'react-redux';
import {getSearchId, getTicketList} from 'api';
import {sortFn, filterFn} from 'components/ticketList/utils';
import TicketCard from 'components/ticketCard';
import Spinner from 'components/spinner';

const ticketList = () => {
    const [ticketCatalog, setTicketList] = useState([]);
    const [searchId, setSearchId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const sortCheapest = useSelector(state => state.sortCheapest);
    const filterStopsOptions = useSelector(state => state.filterStopsOptions);

    useEffect(() => {
        const searchIdGetter = async () => {
            const {
                data: {searchId: id}
            } = await getSearchId();
            setSearchId(id);
        };
        searchIdGetter();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const {
                    data: {tickets, stop}
                } = await getTicketList(searchId);
                if (stop) {
                    setTicketList(tickets);
                    setIsLoading(false);
                } else {
                    fetchData();
                }
            } catch (error) {
                if (error.response.status === 500) {
                    fetchData();
                } else setIsError(true);
            }
        };
        fetchData();
    }, [searchId]);

    const renderTicketCatalog = () => {
        const renderedCatalog = ticketCatalog
            .sort(sortFn(sortCheapest))
            .filter(filterFn(filterStopsOptions))
            .slice(0, 5);

        return renderedCatalog.length > 0 ? (
            renderedCatalog.map(ticket => (
                <TicketCard key={uniqueId()} ticket={ticket} />
            ))
        ) : (
            <span>Билеты не найдены</span>
        );
    };

    return (
        <div className="ticketList">
            {isError && <span>Что-то пошло не так...</span>}
            {isLoading ? <Spinner /> : renderTicketCatalog()}
        </div>
    );
};

export default ticketList;
