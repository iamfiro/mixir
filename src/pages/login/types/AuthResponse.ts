export interface AuthUrlResponse {
    data: {
        url: string;
    }
    message: string;
}

export interface AuthLoginResponse {
    message: string;
    data: {
        requestType: string;
        accessToken: string;
    }
}