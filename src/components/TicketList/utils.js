export const sortFn = sortCheapest => (ticketA, ticketB) => {
    if (sortCheapest) {
        return ticketA.price - ticketB.price;
    }

    const {segments: segmentsA} = ticketA;
    const {segments: segmentsB} = ticketB;
    const durA = segmentsA.reduce((acc, {duration}) => acc + duration, 0);
    const durB = segmentsB.reduce((acc, {duration}) => acc + duration, 0);
    return durA - durB;
};

const filterConverter = options => {
    const mapping = {
        nonStop: 0,
        oneStop: 1,
        twoStops: 2,
        threeStops: 3
    };
    const filteredOptions = Object.keys(options).filter(key => options[key]);
    const mappedOptions = filteredOptions.map(option => mapping[option]);
    return mappedOptions;
};

export const filterFn = filterOptions => ({segments}) => {
    const maxStopsLength = Math.max(...segments.map(({stops}) => stops.length));
    return filterConverter(filterOptions).includes(maxStopsLength);
};
