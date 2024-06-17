import axios, { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleError } from '@/Utils/common/handleError';
import { BASE_URL } from '@/Utils/baseUrl';

export const getUserDetails = async () => {
  try {
    // Get the token first
    let token = await AsyncStorage.getItem('x-auth-token');
    // If token is null set it (for first time user)
    if (!token) {
      await AsyncStorage.setItem('x-auth-token', '');
      token = '';
    }
    // Validate token authenticity
    const tokenRes = await axios.post(
      `${BASE_URL}/token-valid`,
      {},
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'x-auth-token': token,
        },
      }
    );
    // This response will be in boolean as set in server
    const response = tokenRes.data;
    // If token validation is genuine(true), we get the user data
    if (response === true) {
      const userRes = await axios.get(`${BASE_URL}/`, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'x-auth-token': token,
        },
      });
      return userRes.data;
    }
    return null;
  } catch (error) {
    handleError(error as AxiosError);
  }
};
