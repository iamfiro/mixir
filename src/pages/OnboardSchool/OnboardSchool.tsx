import { useState } from 'react'

import { Input, Viewport } from '../../components/common'
import OnboardTitle from '../../components/onboard/OnboardTitle/OnboardTitle'

import { Container, SchoolListContainer, SearchValueTitle } from './OnboardSchool.style'
import { SchoolSearchSelect } from '../../components/School'
import useDebounce from '../../hooks/useDebounce'
import useSchoolSearch from '../../hooks/school/useSchoolSearch'

const OnboardSchool = () => {
    const [query, setQuery] = useState('')
    const [hasInputEverFocused, setHasInputEverFocused] = useState(false)
    const debouncedSearchQuery = useDebounce(query, 500)

    const schoolList = useSchoolSearch(debouncedSearchQuery)

    return (
        <Viewport>
            <Container>
                {!hasInputEverFocused && <OnboardTitle title="현재 다니시고 있는 학교를 알려주세요" />}
                <Input.Container>
                    <Input.Label label="학교명" />
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='학교명을 입력해주세요'
                        onFocus={() => {
                            setHasInputEverFocused(true)
                        }}
                    />
                </Input.Container>
                <SearchValueTitle>
                    {query ? `'${query}' 검색 결과` : '추천 학교'}
                </SearchValueTitle>
                <SchoolListContainer>
                    {schoolList.map((school) => (
                        <SchoolSearchSelect
                            key={school.schoolName}
                            schoolName={school.schoolName}
                            affiliated={school.affiliated}
                            onClick={() => console.log('click')}
                        />
                    ))}
                </SchoolListContainer>
            </Container>
        </Viewport>
    )
}

export default OnboardSchool