import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {filterChangeStateAll, filterChangeState} from 'actions';
import {
    FilterSection,
    CheckboxContainer,
    HiddenCheckbox,
    StyledCheckbox
} from './styled';

const Filter = () => {
    const filterStopsOptions = useSelector(state => state.filterStopsOptions);
    const dispatch = useDispatch();
    return (
        <FilterSection>
            Количество пересадок
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__all" />
                    <StyledCheckbox
                        checked={filterStopsOptions.all}
                        onClick={() => dispatch(filterChangeStateAll())}
                    />
                    Все
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__nonstop" />
                    <StyledCheckbox
                        checked={filterStopsOptions.nonStop}
                        onClick={() => dispatch(filterChangeState('nonStop'))}
                    />
                    Без пересадок
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__one" />
                    <StyledCheckbox
                        checked={filterStopsOptions.oneStop}
                        onClick={() => dispatch(filterChangeState('oneStop'))}
                    />
                    1 пересадка
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__two" />
                    <StyledCheckbox
                        checked={filterStopsOptions.twoStops}
                        onClick={() => dispatch(filterChangeState('twoStops'))}
                    />
                    2 пересадки
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__three" />
                    <StyledCheckbox
                        checked={filterStopsOptions.threeStops}
                        onClick={() =>
                            dispatch(filterChangeState('threeStops'))
                        }
                    />
                    3 пересадки
                </CheckboxContainer>
            </label>
        </FilterSection>
    );
};

export default Filter;
