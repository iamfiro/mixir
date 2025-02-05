import { useQueryClient } from '@tanstack/react-query'
import { authClient } from '../../../api/axios'
import {
    BackButton,
    Button,
    Container,
    Flex,
    Input,
    Title,
    Viewport,
} from '../../../components/common'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const PageTeamBuildCreate = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const [teamName, setTeamName] = useState('')
    const [loading, setIsLoading] = useState(false)

    const handleSubmit = () => {
        setIsLoading(true)
        authClient
            .post('/student/create', {
                name: teamName,
            }).then(() => {
                queryClient.invalidateQueries({
                    queryKey: ['teamBuildingList'],
                })

                navigate('/')
            }).finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <Viewport>
            <Container>
                <BackButton />
                <Title>
                    정보를 기입하여
                    <br />팀 빌딩을 완료해주세요
                </Title>
                <div style={{ height: 30 }} />
                <Flex direction={'column'} gap={30}>
                    <Input.Container>
                        <Input.Label label={'그룹 이름'} />
                        <Input
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            placeholder="그룹 이름을 입력해주세요"
                        />
                    </Input.Container>
                </Flex>
                <div style={{ height: '100%' }} />
                <Button
                    variant={'primary'}
                    fullWidth
                    size={'lg'}
                    disabled={teamName.length === 0}
                    isLoading={loading}
                    onClick={handleSubmit}
                >
                    저장하기
                </Button>
            </Container>
        </Viewport>
    )
}

export default PageTeamBuildCreate
