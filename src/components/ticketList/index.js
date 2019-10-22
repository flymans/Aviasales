import React, {useState, useEffect} from 'react';
import uniqueId from 'lodash.uniqueid';
import {getSearchId, getTicketList} from 'api';
import TicketCard from 'components/ticketCard';
import Spinner from 'components/spinner';

const ticketList = () => {
    const [ticketCatalog, setTicketList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const {
            data: {searchId}
        } = await getSearchId();
        const {
            data: {tickets}
        } = await getTicketList(searchId);
        setTicketList(tickets);
        setLoading(false);
    }, []);

    const renderTicketCatalog = () =>
        ticketCatalog
            .slice(0, 5)
            .map(ticket => <TicketCard key={uniqueId()} ticket={ticket} />);

    return (
        <div className="ticketList">
            {loading ? <Spinner /> : renderTicketCatalog()}
        </div>
    );
};

export default ticketList;
