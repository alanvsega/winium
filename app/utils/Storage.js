import { AsyncStorage } from 'react-native';

export default class Storage {
  static get = async (key) => {
    let item = await AsyncStorage.getItem('@'+key);
    return JSON.parse(item);
  }

  static set = async (key, data) => {
    await AsyncStorage.setItem('@'+key, JSON.stringify(data));
  }

  static unset = async (key) => {
    await AsyncStorage.removeItem('@'+key);
  }
}