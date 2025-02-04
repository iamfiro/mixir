import { authClient } from "../axios";

interface TeamBuildingList {
    groupId: string;
    name: string;
}

async function getTeamBuildingList(): Promise<TeamBuildingList[]> {
    const response = await authClient.get(`/student/list`);

    return response.data.data.groups;
}

export default getTeamBuildingList;