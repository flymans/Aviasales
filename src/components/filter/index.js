import React from 'react';

import {
    FilterSection,
    CheckboxContainer,
    HiddenCheckbox,
    StyledCheckbox
} from './styled';

const Filter = () => {
    return (
        <FilterSection>
            Количество пересадок
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__all" />
                    <StyledCheckbox />
                    Все
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__nonstop" />
                    <StyledCheckbox checked />
                    Без пересадок
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__one" />
                    <StyledCheckbox checked />1 пересадка
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__two" />
                    <StyledCheckbox checked />2 пересадки
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__three" />
                    <StyledCheckbox />3 пересадки
                </CheckboxContainer>
            </label>
        </FilterSection>
    );
};

export default Filter;
