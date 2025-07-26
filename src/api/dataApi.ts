import axios from 'axios';
import type { UserResponse } from '../model/user';

const API_KEY = '90fdf950';
const BASE_URL = 'https://my.api.mockaroo.com/users.json';


export const fetchData = async (): Promise<UserResponse[]> => {
  try {
    const res = await axios.get<UserResponse[]>(`${BASE_URL}?key=${API_KEY}`);
    console.log('Axios response:', res.data);
    return res.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
