import { Title, Viewport } from '../../components/common'
import { TeamBuildListPreview } from '../../components/TeamBuild'
import TemplateBottomBar from '../../template/BottomBar/BottomBar'
import { Container } from './style.css'

const PageHome = () => {
    return (
        <Viewport>
            <Container>
                <Title>
                    현재 만들어진
                    <br />
                    전체 팀 빌딩 목록이에요
                </Title>
                <TeamBuildListPreview teamName='좌호빈화이팅' className='1학년 4반' onClick={() => {}} memberCount={4}  />
                <TemplateBottomBar />
            </Container>
        </Viewport>
    )
}

export default PageHome
