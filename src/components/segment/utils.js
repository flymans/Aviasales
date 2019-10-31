import moment from 'moment';

export const renderDate = (date, duration) => {
    const departureTime = moment(date).format('HH:mm');
    const arrivalTime = moment(date)
        .add(duration, 'm')
        .format('HH:mm');
    return `${departureTime} - ${arrivalTime}`;
};

export const renderDuration = duration =>
    `${Math.floor(duration / 60)}ч ${duration % 60}м`;

// export const renderDuration = dur => {
//     momentDuration = moment.duration(dur, 'm')
//     return `${momentDuration.hours()}ч ${momentDuration.minutes()}м`
// }
