import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru'
});

export const searchIdApi = () => instance.get('/search');

export const ticketListApi = id => instance.get(`/tickets?searchId=${id}`);
