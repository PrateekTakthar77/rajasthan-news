const baseUrl = 'https://news-so1v.onrender.com';

const getApiUrl = (endpoint) => baseUrl + endpoint;

export const GET_ARTICLES = getApiUrl('/api/article');



