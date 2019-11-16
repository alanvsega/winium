import axios from 'axios';
import {
  API_ENDPOINT
} from '../constants/Properties';

const wineServices = axios.create({
  baseURL: API_ENDPOINT
});

const getWines = async () => {
  try {
    const response = await wineServices.get('/wines');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export {
    getWines
}