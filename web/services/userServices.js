import axios from 'axios';
import {API_ENDPOINT} from '../constants/Properties';

const SolicitacoesServices = axios.create({
  baseURL: `${API_ENDPOINT}/wines`,
  withCredentials: true
});

const getWines = () =>{
    SolicitacoesServices
}