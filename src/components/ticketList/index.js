import React, {useState, useEffect} from 'react';
import {getSearchId, getTicketList} from 'Api';
import TicketCard from 'Components/ticketCard';

const ticketList = () => {
    const [ticketCatalog, setTicketList] = useState([]);

    useEffect(async () => {
        const {
            data: {searchId}
        } = await getSearchId();
        const {
            data: {tickets}
        } = await getTicketList(searchId);
        setTicketList(tickets);
    }, []);

    return (
        <ul>
            {ticketCatalog.slice(0, 5).map(ticket => {
                const {price, carrier, segments} = ticket;
                return (
                    <li>
                        <TicketCard
                            price={price}
                            carrier={carrier}
                            segments={segments}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ticketList;
