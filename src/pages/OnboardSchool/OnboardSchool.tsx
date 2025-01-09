import { useState } from 'react'

import { Button, Input, Viewport } from '../../components/common'
import OnboardTitle from '../../components/onboard/OnboardTitle/OnboardTitle'

import { Container, SchoolListContainer, SearchValueTitle } from './OnboardSchool.style'
import { SchoolSearchSelect } from '../../components/School'
import useDebounce from '../../hooks/useDebounce'
import useSchoolSearch from '../../hooks/school/useSchoolSearch'
import Dialog from '../../components/common/Dialog/Dialog'
import useModal from '../../hooks/useDialog'

const OnboardSchool = () => {
    const [query, setQuery] = useState('')
    const [hasInputEverFocused, setHasInputEverFocused] = useState(false)
    const debouncedSearchQuery = useDebounce(query, 500)

    const schoolList = useSchoolSearch(debouncedSearchQuery)

    const {
        isOpen: isSelectSchoolModalOpen,
        open: openSelectSchoolModal,
        close: closeSelectSchoolModal,
    } = useModal()

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
                <SearchValueTitle onClick={openSelectSchoolModal}>
                    {query ? `'${query}' 검색 결과` : '추천 학교'}
                </SearchValueTitle>
                {/* <SchoolListContainer>
                    {schoolList.map((school) => (
                        <SchoolSearchSelect
                            key={school.schoolName}
                            schoolName={school.schoolName}
                            affiliated={school.affiliated}
                            schoolId='1D'
                            onClick={() => console.log('click')}
                        />
                    ))}
                </SchoolListContainer> */}
                <Dialog isOpen={isSelectSchoolModalOpen} onClose={closeSelectSchoolModal}>
                    <Dialog.Backdrop />
                    <Dialog.Content>
                        <Dialog.Title>선린인터넷고등학교(이)가 맞나요?</Dialog.Title>
                        <Dialog.Description>
                            선린인터넷고등학교는 서울특별시 강남구에 위치한 고등학교입니다.
                        </Dialog.Description>
                        <Button fullWidth onClick={closeSelectSchoolModal}>신청하기</Button>
                    </Dialog.Content>
                </Dialog>
            </Container>
        </Viewport>
    )
}

export default OnboardSchool