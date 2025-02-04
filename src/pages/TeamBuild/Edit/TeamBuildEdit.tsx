import {
    BackButton,
    Button,
    Container,
    Input,
    Title,
    Viewport,
} from '../../../components/common'
import { useState } from 'react'

const PageTeamBuildCreate = () => {
    const [teamName, setTeamName] = useState('')

    return (
        <Viewport>
            <Container>
                <BackButton />
                <Title>
                    정보를 기입하여
                    <br />팀 빌딩을 수정해주세요
                </Title>
                <div style={{ height: 30 }} />
                <Input.Container>
                    <Input.Label label={'팀 이름'} />
                    <Input
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        placeholder="팀 이름을 입력해주세요"
                    />
                </Input.Container>
                <div style={{ height: '100%' }} />
                <Button variant={'primary'} fullWidth size={'lg'}>
                    팀 빌딩 추가하기
                </Button>
            </Container>
        </Viewport>
    )
}

export default PageTeamBuildCreate
