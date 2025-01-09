import { client } from "../axios";

async function getSchoolClientKeyAvailable(schoolId: string) {
    const response = await client.get(`${schoolId}`);

    return response.data;
}

export default getSchoolClientKeyAvailable;