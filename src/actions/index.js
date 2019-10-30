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
