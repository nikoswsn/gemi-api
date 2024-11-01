import { Company, CompanyDocumentSet, ErrorEntry } from '../types';
import api from '../api';
import { isAxiosError } from 'axios';

const path = "/health";

const healthService = {
    async healthCheck(): Promise<string> {
        try {
            const response = await api.get(`${path}`);
            return response.status === 200 ? 'API is healthy' : 'API is experiencing issues';
        } catch (error) {
            handleApiError(error);
        }
    },
};

function handleApiError(error: any): never {
    if (isAxiosError(error)) {
        const apiError = error.response;
        throw new Error(`API error ${apiError?.status}: ${apiError?.statusText}`);
    }
    throw new Error('An unexpected error occurred');
}

export default healthService;
