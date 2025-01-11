import { Flex } from '@creative-kit/react'
import { Container, Description, Title } from './SchoolSearchSelect.style'
import { SchoolAvailableBadge } from '../index'
import useSchoolAvailable from '../../../hooks/school/useSchoolAvailable'
import { School } from '../../../types/school'
import Dialog from '../../common/Dialog/Dialog'
import { Button } from '../../common'
import useDialog from '../../../hooks/useDialog'
import GoogleLogo from '../../../assets/icon/GoogleLoginIcon'
import getAuthorizationUrl from '../../../api/login/getAuthorizationUrl'

interface SchoolSearchSelectProps extends School {
    schoolId: string
}

const SchoolSearchSelect = ({
    schoolName,
    affiliated,
    schoolId,
}: SchoolSearchSelectProps) => {
    const { data } = useSchoolAvailable(schoolName)

    const {
        isOpen: isSelectSchoolModalOpen,
        open: openSelectSchoolModal,
        close: closeSelectSchoolModal,
    } = useDialog()

    async function handleGoogleLogin() {
        const authUrl = await getAuthorizationUrl()

        location.href = authUrl
    }

    function handleConfirm() {
        handleGoogleLogin()
        closeSelectSchoolModal()
    }

    return (
        <>
            <Container onClick={() => openSelectSchoolModal()}>
                <Flex gap={8} align="center">
                    <Title>{schoolName}</Title>
                    <SchoolAvailableBadge available={data} />
                </Flex>
                <Description>{affiliated}</Description>
            </Container>
            <Dialog
                isOpen={isSelectSchoolModalOpen}
                onClose={closeSelectSchoolModal}
            >
                <Dialog.Backdrop />
                <Dialog.Content>
                    <Dialog.Title>
                        {schoolName}(이)가 맞나요?
                    </Dialog.Title>
                    <Dialog.Description>
                        한번 선택하시면 로그인 전까지 학교를 변경할 수 없습니다.
                    </Dialog.Description>
                    <Button
                        fullWidth
                        onClick={handleConfirm}
                        leadingIcon={<GoogleLogo color='white' />}
                    >
                        학교 계정으로 로그인 하기
                    </Button>
                </Dialog.Content>
            </Dialog>
        </>
    )
}

export default SchoolSearchSelect
