import api from '../api';
import { handleApiError } from '../utils/handleApiError';

const path = "/health";

const healthService = {
    async healthCheck(): Promise<string> {
        try {
            const response = await api.get(`${path}`);
            return response.status === 200 ? 'API is healthy' : 'API is experiencing issues';
        } catch (error) {
            return handleApiError(error);
        }
    },
};



export default healthService;
