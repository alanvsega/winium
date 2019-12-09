import { create } from 'axios';

import Storage from './Storage';

import { API_ENDPOINT } from '../constants/Properties';

const axios = create({
  timeout: 30000,
});

export default class Requester {
  static make = async (method, uri, data = {}, headers = {}) => {
    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    let url = API_ENDPOINT + uri;
    let requestData = {
      method,
      url,
      headers,
    };

    if (method !== 'get') {
      requestData.data = data;
    }

    console.log('Requesting: ', url);
    let response = await axios(requestData);

    return response;
  }

  static get = async (uri) => {
    return Requester.make('get', uri);
  }

  static post = async (uri, data) => {
    return Requester.make('post', uri, data);
  }

  static headerWithAuthorization = async (header = {}) => {
    let token = await Storage.get('token');

    if (token) {
      header.Authorization = 'Bearer ' + token;
    }

    return header;
  }

  static getAuthenticated = async (uri, header) => {
    header = await Requester.headerWithAuthorization(header);
    return Requester.make('get', uri, {}, header);
  }

  static postAuthenticated = async (uri, data, header) => {
    header = await Requester.headerWithAuthorization(header);
    return Requester.make('post', uri, data, header);
  }

  static patchAuthenticated = async (uri, data, header) => {
    header = await Requester.headerWithAuthorization(header);
    return Requester.make('patch', uri, data, header);
  }
}
