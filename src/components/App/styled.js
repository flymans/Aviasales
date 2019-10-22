import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #f3f7fa;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
