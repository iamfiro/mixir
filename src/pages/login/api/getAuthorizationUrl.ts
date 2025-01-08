import { client } from "../../../utils/api/axios";
import { AuthUrlResponse } from "../types/AuthResponse";

async function getAuthorizationUrl() {
    const response = await client.get<AuthUrlResponse>("/auth/authorization-url");
    const authUrl = response.data.data.url;

    if(!authUrl) {
        throw new Error("Failed to get authorization url");
    }

    return authUrl;
}

export default getAuthorizationUrl;