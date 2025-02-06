import { useQuery } from "@tanstack/react-query";
import getStudentManageList from "../../api/studentManage/getStudentManageList";

const useStudentManageList = (sheetId: string) => {
    const {data, isError, error, isFetching} = useQuery({
        queryKey: ['studentManageList'],
        queryFn: () => getStudentManageList(sheetId),
        initialData: [],
    })

    return {data, isError, error, isFetching}
}

export default useStudentManageList;