import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #e5e5e5;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(160px, auto);
    grid-template-areas:
        'hd hd hd'
        'sd main main';
`;

export const TicketView = styled.div`
    grid-area: main;
`;

export const TestWrapper2 = styled.div`
    grid-area: sd;
`;
