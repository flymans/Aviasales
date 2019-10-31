import React from 'react';
import PropTypes from 'prop-types';
import {renderDate, renderDuration} from './utils';
import {
    SegmentSection,
    SegmentBlock,
    SegmentHeader,
    SegmentContent
} from './styled';

const Segment = ({segment: {origin, destination, date, duration, stops}}) => {
    const countStops = () => {
        switch (stops.length) {
            case 0:
                return (
                    <SegmentBlock>
                        <SegmentHeader>пересадки</SegmentHeader>
                        <SegmentContent>Прямой</SegmentContent>
                    </SegmentBlock>
                );
            case 1:
                return (
                    <SegmentBlock>
                        <SegmentHeader>1 пересадка</SegmentHeader>
                        <SegmentContent>{stops.join(', ')}</SegmentContent>
                    </SegmentBlock>
                );
            default:
                return (
                    <SegmentBlock>
                        <SegmentHeader>{`${stops.length} пересадки`}</SegmentHeader>
                        <SegmentContent>{stops.join(', ')}</SegmentContent>
                    </SegmentBlock>
                );
        }
    };

    return (
        <SegmentSection>
            <SegmentBlock>
                <SegmentHeader>
                    {origin} - {destination}
                </SegmentHeader>
                <SegmentContent>{renderDate(date, duration)}</SegmentContent>
            </SegmentBlock>
            <SegmentBlock>
                <SegmentHeader>В пути</SegmentHeader>
                <SegmentContent>{renderDuration(duration)}</SegmentContent>
            </SegmentBlock>
            {countStops()}
        </SegmentSection>
    );
};

Segment.propTypes = {
    segment: PropTypes.shape({
        origin: PropTypes.string,
        destination: PropTypes.string,
        date: PropTypes.string,
        stops: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.number
    }).isRequired
};
export default Segment;
