import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {sortChangeCheapest, sortChangeFastest} from 'actions';
import {SortingContainer, SortingButton} from './styled';

const Sorting = () => {
    const sortCheapest = useSelector(state => state.sortCheapest);
    const dispatch = useDispatch();
    return (
        <SortingContainer>
            <SortingButton
                active={sortCheapest}
                onClick={() => dispatch(sortChangeCheapest())}
            >
                Самый дешевый
            </SortingButton>
            <SortingButton
                active={!sortCheapest}
                onClick={() => dispatch(sortChangeFastest())}
            >
                Самый быстрый
            </SortingButton>
        </SortingContainer>
    );
};

export default Sorting;
