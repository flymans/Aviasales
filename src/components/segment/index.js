import React from 'react';
import PropTypes from 'prop-types';
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

    const renderDate = d => {
        const dateRender = dateInstance => {
            const hours = dateInstance.getHours();
            const minutes = dateInstance.getMinutes();
            return `${hours > 9 ? hours : `0${hours}`}:${
                minutes > 9 ? minutes : `0${minutes}`
            }`;
        };
        const departureDateInstance = new Date(d);
        const arrivalDateInstance = new Date(
            departureDateInstance.getTime() + duration * 60000
        );
        const departureTime = dateRender(departureDateInstance);
        const arrivalTime = dateRender(arrivalDateInstance);
        return `${departureTime} - ${arrivalTime}`;
    };

    const renderDuration = dur => `${Math.floor(dur / 60)}ч ${dur % 60}м`;

    return (
        <SegmentSection>
            <SegmentBlock>
                <SegmentHeader>
                    {origin} - {destination}
                </SegmentHeader>
                <SegmentContent>{renderDate(date)}</SegmentContent>
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
