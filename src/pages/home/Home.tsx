import { MdPlusOne } from 'react-icons/md'
import { Title, Viewport } from '../../components/common'
import FloatingButton from '../../components/common/FloatingButton/FloatingButton'
import { TeamBuildListPreview } from '../../components/TeamBuild'
import TemplateBottomBar from '../../template/BottomBar/BottomBar'
import { Container } from './style.css'
import { IoAdd } from "react-icons/io5";

const PageHome = () => {
    return (
        <Viewport>
            <Container>
                <Title>
                    현재 만들어진
                    <br />
                    전체 팀 빌딩 목록이에요
                </Title>
                <TeamBuildListPreview
                    teamName="좌호빈화이팅"
                    className="1학년 4반"
                    onClick={() => {}}
                    memberCount={4}
                />
                <TemplateBottomBar />
                <FloatingButton
                    variant="primary"
                    position="bottom-right"
                    offset={32}
                    onClick={() => console.log('clicked')}
                >
                    <IoAdd />
                </FloatingButton>
            </Container>
        </Viewport>
    )
}

export default PageHome
