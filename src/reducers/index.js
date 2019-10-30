const initialState = {
    sortCheapest: true,
    filterStopsOptions: {
        all: false,
        nonStop: true,
        oneStop: true,
        twoStops: true,
        threeStops: false
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SORT_CHANGE_CHEAPEST':
            return {
                ...state,
                sortCheapest: true
            };
        case 'SORT_CHANGE_FASTEST':
            return {
                ...state,
                sortCheapest: false
            };
        case 'FILTER_CHANGE_STATE_ALL': {
            const {filterStopsOptions: filter} = state;
            const stopValue = !filter.all;
            const newFilterStopsOptions = Object.keys(filter).reduce(
                (acc, key) => {
                    acc[key] = stopValue;
                    return acc;
                },
                {}
            );
            return {
                ...state,
                filterStopsOptions: newFilterStopsOptions
            };
        }
        case 'FILTER_CHANGE_STATE': {
            const stopValue = action.payload;
            return {
                ...state,
                filterStopsOptions: {
                    ...state.filterStopsOptions,
                    [stopValue]: !state.filterStopsOptions[stopValue]
                }
            };
        }
        default:
            return state;
    }
};

export default reducer;
