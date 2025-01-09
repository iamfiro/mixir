import { useQuery } from "@tanstack/react-query"
import getSchoolClientKeyAvailable from "../../api/school/getSchoolClientKeyAvailable"

const useSchoolAvailable = (schoolId: string) => {
    const {data, isError, error, isPending} = useQuery({
        queryKey: ['schoolAvailable', schoolId],
        queryFn: () => getSchoolClientKeyAvailable(schoolId),
    });

    return {data, isError, error, isPending}
}

export default useSchoolAvailable