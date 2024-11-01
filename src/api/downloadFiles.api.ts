import { Company, CompanyDocumentSet, ErrorEntry } from '../types';
import api from '../api';
import { isAxiosError } from 'axios';

const path = "/downloadFiles";

const downloadFilesService = {
    async downloadFile(key: string, elementId: number): Promise<Blob> {
        try {
            const response = await api.get(`${path}/downloadFile`, {
                params: { key, elementId },
                responseType: 'blob' // Set response type to 'blob' for file downloads
            });
            return response.data;
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

export default downloadFilesService;
