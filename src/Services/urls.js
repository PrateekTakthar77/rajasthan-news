// const baseUrl = 'https://news-so1v.onrender.com';
const baseUrl = 'https://news-so1v.onrender.com';

const getApiUrl = (endpoint) => baseUrl + endpoint;

export const GET_ARTICLES = getApiUrl('/api/article/news/latest');
export const GET_ARTICLE_BY_ID = getApiUrl('/api/article/seotitle');


