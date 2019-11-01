import styled from 'styled-components';

export const FilterSection = styled.div`
    grid-area: sd;
    justify-self: end;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 232px;
    height: 252px;
    margin-right: 20px;
`;

export const FilterHeader = styled.span`
    display: flex;
    margin: 20px 20px 10px 20px;
    line-height: 12px;
    align-items: flex-end;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;

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
    margin: 0 10px 0 20px;
    background: ${props =>
        props.checked
            ? 'url(../src/assets/images/checkboxMark.svg) center no-repeat'
            : ''};
`;
