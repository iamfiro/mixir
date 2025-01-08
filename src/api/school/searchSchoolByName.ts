import axios from 'axios'
import { School } from '../../types/school'
import { NEIS_API_MAX_LENGTH } from '../../constants/school'

async function getSchoolListByName(name: string) {
    const NEIS_API_KEY = import.meta.env.VITE_NEIS_API_KEY as string

    const response = await axios.get(
        `https://open.neis.go.kr/hub/schoolInfo?KEY=${NEIS_API_KEY}&Type=json&pSize=${NEIS_API_MAX_LENGTH}&SCHUL_NM=${name}`
    )

    const schoolList: School[] = response.data.schoolInfo[1].row.map((school: any) => ({
        schoolName: school.SCHUL_NM,
        affiliated: school.ATPT_OFCDC_SC_NM,
    }));

    return schoolList
}

export default getSchoolListByName;