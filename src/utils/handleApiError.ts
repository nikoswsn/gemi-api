import { isAxiosError } from "axios";

export const  handleApiError = (error: any): never => {
    if (isAxiosError(error)) {
        const apiError = error.response;
        throw new Error(`API error ${apiError?.status}: ${apiError?.statusText}`);
    }
    throw new Error('An unexpected error occurred');
}