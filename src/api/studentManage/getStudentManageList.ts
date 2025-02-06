import { authClient } from "../axios";

interface TeamBuildingList {
    groupId: string;
    name: string;
}

async function getStudentManageList(sheetId: string): Promise<TeamBuildingList[]> {
    const response = await authClient.get(`/student/${sheetId}/groups`);

    return response.data.data.groups;
}

export default getStudentManageList;