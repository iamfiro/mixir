import { authClient } from '../axios.ts'

async function createFile(name: string): Promise<Boolean> {
    return authClient
        .post('/students/create', { name })
        .then(() => {
            return true
        })
        .catch(() => {
            return false
        })
}

export default createFile