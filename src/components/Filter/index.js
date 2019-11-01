import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {filterChangeStateAll, filterChangeState} from 'actions';
import {
    FilterSection,
    FilterHeader,
    CheckboxContainer,
    HiddenCheckbox,
    StyledCheckbox
} from './styled';

const Filter = () => {
    const filterStopsOptions = useSelector(state => state.filterStopsOptions);
    const dispatch = useDispatch();
    return (
        <FilterSection>
            <FilterHeader>Количество пересадок</FilterHeader>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox
                        onClick={() => dispatch(filterChangeStateAll())}
                        name="stops-count__all"
                    />
                    <StyledCheckbox checked={filterStopsOptions.all} />
                    Все
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox
                        onClick={() => dispatch(filterChangeState('nonStop'))}
                        name="stops-count__nonstop"
                    />
                    <StyledCheckbox checked={filterStopsOptions.nonStop} />
                    Без пересадок
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox
                        onClick={() => dispatch(filterChangeState('oneStop'))}
                        name="stops-count__one"
                    />
                    <StyledCheckbox checked={filterStopsOptions.oneStop} />1
                    пересадка
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox
                        onClick={() => dispatch(filterChangeState('twoStops'))}
                        name="stops-count__two"
                    />
                    <StyledCheckbox checked={filterStopsOptions.twoStops} />2
                    пересадки
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox
                        onClick={() =>
                            dispatch(filterChangeState('threeStops'))
                        }
                        name="stops-count__three"
                    />
                    <StyledCheckbox checked={filterStopsOptions.threeStops} />3
                    пересадки
                </CheckboxContainer>
            </label>
        </FilterSection>
    );
};

export default Filter;
