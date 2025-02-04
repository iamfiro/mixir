import { useQuery } from "@tanstack/react-query";
import getTeamBuildingList from "../../api/teamBuilding/getTeamBuildingList";

const useTeamBuildingList = () => {
    const {data, isError, error, isFetching} = useQuery({
        queryKey: ['teamBuildingList'],
        queryFn: () => getTeamBuildingList(),
        initialData: [],
    })

    return {data, isError, error, isFetching}
}

export default useTeamBuildingList;