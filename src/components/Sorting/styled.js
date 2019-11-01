import styled from 'styled-components';

export const SortingContainer = styled.div`
    display: inline-flex;
`;

export const SortingButton = styled.button`
    width: 252px;
    height: 50px;
    background: ${props => (props.active ? '#2196F3' : '#FFFFFF')};
    border: 1px solid #dfe5ec;
    border-radius: 5px;
    color: ${props => (props.active ? '#FFFFFF' : '#4A4A4A')};

    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    font-size: inherit;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;

    &:hover {
        background: ${props => (props.active ? '#2196F3' : '#f1fcff')};
        cursor: url(../src/assets/images/cursor.svg), pointer;
    }
`;
