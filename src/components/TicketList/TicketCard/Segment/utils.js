import moment from 'moment';

export const renderDate = (date, duration) => {
    const departureTime = moment(date).format('HH:mm');
    const arrivalTime = moment(date)
        .add(duration, 'm')
        .format('HH:mm');
    return `${departureTime} - ${arrivalTime}`;
};

export const renderDuration = dur => {
    const momentDuration = moment.duration(dur, 'm');
    return `${Math.floor(
        momentDuration.asHours()
    )}ч ${momentDuration.minutes()}м`;
};
