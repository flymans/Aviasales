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

    const renderTicketCatalog = () =>
        ticketCatalog
            .slice(0, 5)
            .map(ticket => <TicketCard key={uniqueId()} ticket={ticket} />);

    return (
        <div className="ticketList">
            {isError && <span>Что-то пошло не так...</span>}
            {isLoading ? <Spinner /> : renderTicketCatalog()}
        </div>
    );
};

export default ticketList;
