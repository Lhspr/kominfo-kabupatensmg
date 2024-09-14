import { baseUrl } from '@/utils/constants';
import axios from 'axios';

export const fetchNewsDatas = async endpoint => {
  const res = await axios.get(`${baseUrl}/${endpoint}`, {
    headers: { Accept: 'application/json' },
  });
  return res.data.data;
};
