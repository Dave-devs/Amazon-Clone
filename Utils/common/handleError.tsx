import { Alert } from 'react-native';
import { AxiosError } from 'axios';
import { AxiosErrorResponse } from '@/Interfaces/error';

export const handleError = (error: AxiosError): void => {
    if (!error.response) {
        Alert.alert('Error', 'Network error, please try again later.');
        return;
    }

    const { status, data } = error.response as AxiosErrorResponse['response'];

    switch (status) {
        case 400:
            Alert.alert('Error', data.message || 'Bad Request');
            break;
        case 401:
            Alert.alert('Unauthorized', data.message || 'Unauthorized access');
            break;
        case 403:
            Alert.alert('Forbidden', data.message || 'Access forbidden');
            break;
        case 404:
            Alert.alert('Not Found', data.message || 'Resource not found');
            break;
        case 500:
            Alert.alert('Server Error', data.message || 'Internal Server Error');
            break;
        default:
            Alert.alert('Error', data.message || 'Something went wrong');
    }
};