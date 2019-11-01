import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
        'hd hd hd'
        'sd main main';
`;

export const TicketView = styled.div`
    grid-area: main;
`;
