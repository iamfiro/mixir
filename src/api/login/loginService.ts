import { authClient, client } from '../axios'
import { AuthLoginResponse } from '../../types/api/AuthResponse'

async function loginService(code: string) {
    const response = await client.post<AuthLoginResponse>('/auth/login', {
        code,
    })

    authClient.defaults.headers.common['Authorization'] =
        `Bearer ${response.data.data.accessToken}`

    return response.data
}

export default loginService
