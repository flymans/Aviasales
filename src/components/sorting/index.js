import React from 'react';
import {useDispatch} from 'react-redux';
import {sortChangeCheapest, sortChangeFastest} from 'actions';
import {SortingContainer, SortingButton} from './styled';

const Sorting = () => {
    const dispatch = useDispatch();
    return (
        <SortingContainer>
            <SortingButton onClick={() => dispatch(sortChangeCheapest())}>
                Самый дешевый
            </SortingButton>
            <SortingButton onClick={() => dispatch(sortChangeFastest())}>
                Самый быстрый
            </SortingButton>
        </SortingContainer>
    );
};

export default Sorting;
