// mengimport baseUrl dari constants.js
import { baseUrl } from '@/utils/constants';
// mengimport library yang diperlukan
import axios from 'axios';

// Membuat fungsi untuk fetch new data news
export const fetchNewsDatas = async endpoint => {
  const res = await axios.get(`${baseUrl}/${endpoint}`, {
    headers: { Accept: 'application/json' },
  });
  return res.data.data;
};
