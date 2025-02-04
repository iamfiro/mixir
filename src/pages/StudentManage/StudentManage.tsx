import { Container, Title, Viewport } from '../../components/common'

const StudentManage = () => {
    const teamName = '좌호빈'
    return (
        <Viewport>
            <Container>
                <Title>
                    현재 추가된 <br />
                    {teamName}의 팀 목록이에요
                </Title>
            </Container>
        </Viewport>
    )
}

export default StudentManage
