import React, {useState, useEffect} from 'react';
import uniqueId from 'lodash.uniqueid';
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
        <div className="ticketList">
            {ticketCatalog.slice(0, 5).map(ticket => {
                const {price, carrier, segments} = ticket;
                return (
                    <TicketCard
                        key={uniqueId()}
                        price={price}
                        carrier={carrier}
                        segments={segments}
                    />
                );
            })}
        </div>
    );
};

export default ticketList;
