import { useEffect, useState } from "react"
import { School } from "../../types/school"
import useDebounce from "../useDebounce"
import getSchoolListByName from "../../api/school/searchSchoolByName"

const useSchoolSearch = (query: string) => {
    const [schoolList, setSchoolList] = useState<School[]>([])
    const debouncedSearchQuery = useDebounce(query, 500)

    useEffect(() => {
        const fetchSchoolList = async () => {
            setSchoolList(await getSchoolListByName(debouncedSearchQuery))
        }
        fetchSchoolList()
    }, [debouncedSearchQuery])

    return schoolList
}

export default useSchoolSearch