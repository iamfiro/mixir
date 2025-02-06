import { IoAdd } from 'react-icons/io5'
import {
    BackButton,
    Container,
    FloatingButton,
    Title,
    Viewport,
} from '../../components/common'
import {
    TeamBuildListPreview,
    TeamBuildListSkeleton,
} from '../../components/TeamBuild'
import useStudentManageList from '../../hooks/studentManage/useStudentManageList'
import { useSearchParams } from 'react-router'
import { NotingToShow } from './StudentManage.style'
import TemplateBottomBar from '../../template/BottomBar/BottomBar'

const StudentManage = () => {
    const [searchParams] = useSearchParams()
    const groupId = searchParams.get('id') || ''
    const teamName = searchParams.get('name') || ''

    const { data, isFetching } = useStudentManageList(groupId)

    return (
        <Viewport>
            <Container>
                <BackButton />
                <Title>
                    현재 추가된 <br />
                    {teamName}의 팀 목록이에요
                </Title>
                {(data.length === 0 && !isFetching) && (
                    <NotingToShow>
                        아직 만들어진 팀이 없어요! <br /> 지금 바로 만들어보세요
                    </NotingToShow>
                )}
                {data.map((team) => (
                    <TeamBuildListPreview
                        key={team.groupId}
                        teamName={team.name}
                        onClick={() => {}}
                    />
                ))}
                {isFetching && <TeamBuildListSkeleton />}
                <TemplateBottomBar />
                <FloatingButton
                    variant="primary"
                    position="bottom-right"
                    offset={32}
                    onClick={() => {}}
                >
                    <IoAdd />
                </FloatingButton>
            </Container>
        </Viewport>
    )
}

export default StudentManage
