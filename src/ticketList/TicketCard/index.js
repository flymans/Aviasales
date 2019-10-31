import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import Segment from 'components/TicketList/TicketCard/Segment';
import {
    Header,
    CardContainer,
    StyledPrice,
    CarrierImg,
    SegmentsSection
} from './styled';

const TicketCard = ({ticket: {price, carrier, segments}}) => (
    <CardContainer>
        <Header>
            <StyledPrice>{price} Р</StyledPrice>
            <CarrierImg
                src={`//pics.avs.io/99/36/${carrier}.png`}
                alt={`${carrier} logo`}
            />
        </Header>
        <SegmentsSection>
            {segments.map(segment => (
                <Segment key={uniqueId()} segment={segment} />
            ))}
        </SegmentsSection>
    </CardContainer>
);

TicketCard.propTypes = {
    ticket: PropTypes.shape({
        price: PropTypes.number.isRequired,
        carrier: PropTypes.string.isRequired,
        segments: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired
};

export default TicketCard;
