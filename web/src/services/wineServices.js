import axios from 'axios';
import { API_ENDPOINT } from '../constants/Properties';

const wineServices = axios.create({
  baseURL: API_ENDPOINT,
});

const getWines = async () => {
  const response = await wineServices.get('/wines');
  return response.data;
};

export { getWines };
