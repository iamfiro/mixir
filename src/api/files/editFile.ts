import { authClient } from '../axios.ts'

async function createFile(sheetId: string, name: string): Promise<boolean> {
    return authClient
        .post(`/student/${ sheetId }/edit`, { name })
        .then(() => {
            return true
        })
        .catch(() => {
            return false
        })
}

export default createFile