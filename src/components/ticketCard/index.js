import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

const TicketCard = ({price, carrier, segments}) => {
    return (
        <div className="ticket">
            {price}, {carrier}
            <ul>
                {segments.map(({origin, destination, date, duration}) => (
                    <li key={uniqueId()}>
                        {origin}, {destination}, {date}, {duration}
                    </li>
                ))}
            </ul>
        </div>
    );
};

TicketCard.propTypes = {
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TicketCard;
