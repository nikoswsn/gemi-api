import {
  Activity,
  Prefecture,
  Municipality,
  CompanyStatus,
  LegalType,
  GemiOffice,
  AssemblySubject,
} from "../types";
import api from "../api";
import { handleApiError } from "../utils/handleApiError";

const path = "/metadata";

const listActivities = async (): Promise<Activity[]> => {
  try {
    const response = await api.get<Activity[]>(`${path}/activities`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
const listPrefectures = async (): Promise<Prefecture[]> => {
  try {
    const response = await api.get<Prefecture[]>(`${path}/prefectures`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
const listMunicipalities = async (): Promise<Municipality[]> => {
  try {
    const response = await api.get<Municipality[]>(`${path}/municipalities`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
const listCompanyStatuses = async (): Promise<CompanyStatus[]> => {
  try {
    const response = await api.get<CompanyStatus[]>(`${path}/companyStatuses`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
const listLegalTypes = async (): Promise<LegalType[]> => {
  try {
    const response = await api.get<LegalType[]>(`${path}/legalTypes`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
const listGemiOffices = async (): Promise<GemiOffice[]> => {
  try {
    const response = await api.get<GemiOffice[]>(`${path}/gemiOffices`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
const listAssemblySubjects = async (): Promise<AssemblySubject[]> => {
  try {
    const response = await api.get<AssemblySubject[]>(
      `${path}/assemblySubjects`
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export default {
  listActivities,
  listPrefectures,
  listMunicipalities,
  listCompanyStatuses,
  listLegalTypes,
  listGemiOffices,
  listAssemblySubjects,
};
