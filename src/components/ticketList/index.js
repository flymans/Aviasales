import React, {useState, useEffect} from 'react';
import uniqueId from 'lodash.uniqueid';
import {getSearchId, getTicketList} from 'api';
import TicketCard from 'components/ticketCard';
import Spinner from 'components/spinner';

const ticketList = () => {
    const [ticketCatalog, setTicketList] = useState([]);
    const [searchId, setSearchId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const sortCheapest = true; // TODO : replace sortCheapest to REDUX store
    const filterStopsOptions = [0]; // TODO : replace filterOptions to REDUX store

    useEffect(() => {
        const searchIdGetter = async () => {
            const {
                data: {searchId: test}
            } = await getSearchId();
            setSearchId(test);
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
        const sortFn = (ticketA, ticketB) => {
            if (sortCheapest) {
                return ticketA.price - ticketB.price;
            }

            const {segments: segmentsA} = ticketA;
            const {segments: segmentsB} = ticketB;
            const durA = segmentsA.reduce(
                (acc, {duration}) => acc + duration,
                0
            );
            const durB = segmentsB.reduce(
                (acc, {duration}) => acc + duration,
                0
            );
            return durA - durB;
        };

        const filterFn = ({segments}) => {
            const maxStopsLength = Math.max(
                ...segments.map(({stops}) => stops.length)
            );
            return filterStopsOptions.includes(maxStopsLength);
        };

        const renderedCatalog = ticketCatalog
            .sort(sortFn)
            .filter(filterFn)
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
