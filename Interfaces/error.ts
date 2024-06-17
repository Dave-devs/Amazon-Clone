export interface ErrorResponse {
    message: string;
}

export interface AxiosErrorResponse {
    response: {
        status: number;
        data: ErrorResponse;
    };
}