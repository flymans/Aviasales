import React from 'react';
import {
    FilterSection,
    CheckboxContainer,
    HiddenCheckbox,
    StyledCheckbox
} from './styled';

export default () => {
    return (
        <FilterSection>
            Количество пересадок
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__all" />
                    <StyledCheckbox checked />
                    Все
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__nonstop" />
                    <StyledCheckbox />
                    Без пересадок
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__one" />
                    <StyledCheckbox />1 пересадка
                </CheckboxContainer>
            </label>
            <label>
                <CheckboxContainer>
                    <HiddenCheckbox name="stops-count__two" />
                    <StyledCheckbox />2 пересадки
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
