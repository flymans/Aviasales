const initialState = {
    sortCheapest: true,
    filterStopsOptions: {
        all: false,
        nonStop: true,
        oneStop: true,
        twoStops: true,
        threeStops: false
    },
    isFetching: false,
    isError: false,
    searchId: '',
    ticketList: []
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
        case 'FETCHING_SEARCHID': {
            return {
                ...state,
                isFetching: true
            };
        }
        case 'GET_SEARCHID_SUCCESS': {
            return {
                ...state,
                searchId: action.searchId
            };
        }
        case 'GET_SEARCHID_ERROR': {
            return {
                ...state,
                isError: true,
                isFetching: false
            };
        }
        case 'GET_TICKETLIST_SUCCESS': {
            return {
                ...state,
                ticketList: action.ticketList,
                isFetching: false
            };
        }
        case 'GET_TICKETLIST_ERROR': {
            return {
                ...state,
                isError: true,
                isFetching: false
            };
        }
        default:
            return state;
    }
};

export default reducer;
