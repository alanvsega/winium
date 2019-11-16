import axios from 'axios';
import {API_ENDPOINT} from '../constants/Properties';

const userService = axios.create({
  baseURL: `${API_ENDPOINT}/users`
});

const getWines = () =>{
    userService
}