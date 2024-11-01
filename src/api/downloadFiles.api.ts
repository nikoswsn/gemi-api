import api from "../api";
import { handleApiError } from "../utils/handleApiError";

const path = "/downloadFiles";

const downloadFile = async (key: string, elementId: number): Promise<Blob> => {
  try {
    const response = await api.get(`${path}/downloadFile`, {
      params: { key, elementId },
      responseType: "blob", // Set response type to 'blob' for file downloads
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};


export default { downloadFile };
