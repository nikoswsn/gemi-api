import { Company, CompanyDocumentSet } from "../types";
import api from "../api";
import { handleApiError } from '../utils/handleApiError';

const path = "/companies"

const getByArGemi = async (arGemi: string): Promise<Company> => {
  try {
      const response = await api.get<Company>(`${path}/${arGemi}`);
      return response.data;
  } catch (error) {
      return handleApiError(error);
  }
}

const getByCriteria = async (criteria: {
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
}): Promise<{ searchMetadata: { totalCount: number; resultsOffset: number; resultsSize: number }; searchResults: Company[] }> => {
  try {
      const response = await api.get<{ searchMetadata: { totalCount: number; resultsOffset: number; resultsSize: number }; searchResults: Company[] }>(`${path}`, { params: criteria });
      return response.data;
  } catch (error) {
      return handleApiError(error);
  }
}

const getDocumentsByArGemi = async (arGemi: string): Promise<CompanyDocumentSet> => {
try {
      const response = await api.get<CompanyDocumentSet>(`${path}/${arGemi}/documents`);
      return response.data;
  } catch (error) {
      return handleApiError(error);
  }
}

export default { getByArGemi, getByCriteria, getDocumentsByArGemi };
