import {searchIdApi, ticketListApi} from 'api';

export const sortChangeCheapest = () => {
    return {
        type: 'SORT_CHANGE_CHEAPEST'
    };
};
export const sortChangeFastest = () => {
    return {
        type: 'SORT_CHANGE_FASTEST'
    };
};

export const filterChangeStateAll = () => {
    return {
        type: 'FILTER_CHANGE_STATE_ALL'
    };
};

export const filterChangeState = stopValue => {
    return {
        type: 'FILTER_CHANGE_STATE',
        payload: stopValue
    };
};

export const getSearchId = () => {
    return {
        type: 'FETCHING_SEARCHID'
    };
};

export const getSearchIdSuccess = searchId => {
    return {
        type: 'GET_SEARCHID_SUCCESS',
        searchId
    };
};

export const getSearchIdFailure = () => {
    return {
        type: 'GET_SEARCHID_ERROR'
    };
};

const fetchSearchId = () => {
    return async dispatch => {
        try {
            dispatch(getSearchId());
            const {
                data: {searchId}
            } = await searchIdApi();
            dispatch(getSearchIdSuccess(searchId));
        } catch {
            dispatch(getSearchIdFailure());
        }
    };
};

export const fetchSearchIdIfNeeded = () => {
    return dispatch => dispatch(fetchSearchId());
};

export const getTicketListSuccess = ticketList => {
    return {
        type: 'GET_TICKETLIST_SUCCESS',
        ticketList
    };
};

export const getTicketListFailure = () => {
    return {
        type: 'GET_TICKETLIST_ERROR'
    };
};

const fetchTicketList = state => {
    return async dispatch => {
        try {
            const {
                data: {tickets, stop}
            } = await ticketListApi(state.searchId);
            if (stop) {
                dispatch(getTicketListSuccess(tickets));
            } else {
                dispatch(fetchTicketList(state));
            }
        } catch (error) {
            if (error.response.status === 500) {
                dispatch(fetchTicketList(state));
            }
        }
    };
};

export const fetchTicketListIfNeeded = () => {
    return (dispatch, getState) => dispatch(fetchTicketList(getState()));
};
