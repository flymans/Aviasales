const initialState = {
    sortCheapest: true,
    filterStopsOptions: [0, 1, 2]
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
        default:
            return state;
    }
};

export default reducer;
