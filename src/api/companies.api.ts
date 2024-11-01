import { Company, CompanyDocumentSet, ErrorEntry } from '../types';
import api from '../api';
import { isAxiosError } from 'axios';

const path = "/companies"

const companiesService = {

    async getByArGemi(arGemi: string): Promise<Company> {
        try {
            const response = await api.get<Company>(`${path}/${arGemi}`);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    async getByCriteria(criteria: {
        arGemi?: string;
        afm?: string;
        legalTypes?: number[];
        gemiOffices?: string[];
        municipalities?: string[];
        prefectures?: number[];
        statuses?: number[];
        isActive?: boolean;
        activities?: string[];
        resultsSortBy?: string;
        resultsOffset?: number;
        resultsSize?: number;
    }): Promise<{ searchMetadata: { totalCount: number; resultsOffset: number; resultsSize: number }; searchResults: Company[] }> {
        try {
            const response = await api.get<{ searchMetadata: { totalCount: number; resultsOffset: number; resultsSize: number }; searchResults: Company[] }>(`${path}`, { params: criteria });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    async getDocumentsByArGemi(arGemi: string): Promise<CompanyDocumentSet> {
        try {
            const response = await api.get<CompanyDocumentSet>(`${path}/${arGemi}/documents`);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    }
};

function handleApiError(error: any): never {
    if (isAxiosError(error)) {
        const apiError = error.response;
        throw new Error(`API error ${apiError?.status}: ${apiError?.statusText}`);
    }
    throw new Error('An unexpected error occurred');
}

export default companiesService;