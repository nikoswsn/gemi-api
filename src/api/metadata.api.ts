import { Activity, Company, CompanyDocumentSet, ErrorEntry, Prefecture, Municipality, CompanyStatus, LegalType, GemiOffice, AssemblySubject } from '../types';
import api from '../api';
import { isAxiosError } from 'axios';

const path = "/metadata";

const metadataService = {
    async listActivities(): Promise<Activity[]> {
        try {
            const response = await api.get<Activity[]>(`${path}/activities`);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
    async listPrefectures(): Promise<Prefecture[]> {
        try {
            const response = await api.get<Prefecture[]>(`${path}/prefectures`);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
    async listMunicipalities(): Promise<Municipality[]> {
        try {
            const response = await api.get<Municipality[]>(`${path}/municipalities`);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
    async listCompanyStatuses(): Promise<CompanyStatus[]> {
        try {
            const response = await api.get<CompanyStatus[]>(`${path}/companyStatuses`);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
    async listLegalTypes(): Promise<LegalType[]> {
        try {
            const response = await api.get<LegalType[]>(`${path}/legalTypes`);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
    async listGemiOffices(): Promise<GemiOffice[]> {
        try {
            const response = await api.get<GemiOffice[]>(`${path}/gemiOffices`);
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
    async listAssemblySubjects(): Promise<AssemblySubject[]> {
        try {
            const response = await api.get<AssemblySubject[]>(`${path}/assemblySubjects`);
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

export default metadataService;
