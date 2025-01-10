import axios from 'axios'
import { School } from '../../types/school'
import { NEIS_API_MAX_LENGTH } from '../../constants/school'

interface NEIS_API_SCHOOL {
    SCHUL_NM: string;
    ATPT_OFCDC_SC_NM: string;
    SD_SCHUL_CODE: string;
}

async function getSchoolListByName(name: string) {
    const NEIS_API_KEY = import.meta.env.VITE_NEIS_API_KEY as string

    const response = await axios.get(
        `https://open.neis.go.kr/hub/schoolInfo?KEY=${NEIS_API_KEY}&Type=json&pSize=${NEIS_API_MAX_LENGTH}&SCHUL_NM=${name}`
    )

    if(response.data.schoolInfo) {
        console.log(response.data.schoolInfo[1].row)
        const schoolList: School[] = response.data.schoolInfo[1].row.map((school: NEIS_API_SCHOOL) => ({
            schoolName: school.SCHUL_NM,
            affiliated: school.ATPT_OFCDC_SC_NM,
            schoolId: school.SD_SCHUL_CODE
        }));

        return schoolList
    }

    return []
}

export default getSchoolListByName;