import styled from 'styled-components';

export const FilterSection = styled.div`
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 232px;
    height: 252px;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    &:hover {
        background: #f1fcff;
        cursor: url(../src/assets/images/cursor.svg), pointer;
    }
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const StyledCheckbox = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid #2196f3;
    box-sizing: border-box;
    border-radius: 2px;
    background: ${props =>
        props.checked
            ? 'url(../src/assets/images/checkboxMark.svg) center no-repeat'
            : ''};
`;
