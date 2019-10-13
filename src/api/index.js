import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru'
});

export const getSearchId = () => instance.get('/search');

export const getTicketList = id => instance.get(`/tickets?searchId=${id}`);
