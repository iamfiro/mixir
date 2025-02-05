import { useNavigate } from 'react-router';
import { Container, Title, Viewport } from '../../components/common'
import FloatingButton from '../../components/common/FloatingButton/FloatingButton'
import { TeamBuildListPreview, TeamBuildListSkeleton } from '../../components/TeamBuild'
import useTeamBuildingList from '../../hooks/teamBuilding/useTeamBuildingList';
import TemplateBottomBar from '../../template/BottomBar/BottomBar'
import { IoAdd } from "react-icons/io5";
import { useEffect } from 'react';

const PageHome = () => {
    const navigate = useNavigate();
    const {data, isFetching} = useTeamBuildingList()

    useEffect(() => {
        console.log(isFetching)
    }, [isFetching])

    const handleTeamBuildingClick = (id: string) => {
        navigate(`/team-build/${id}`);
    };

    const handleCreateTeamBuilding = () => {
        navigate('/team-build/create');
    }

    console.log(data)
    return (
        <Viewport>
            <Container>
                <Title>
                    현재 만들어진
                    <br />
                    전체 팀 빌딩 목록이에요
                </Title>
                {data.map((team) => (
                    <TeamBuildListPreview
                        key={team.groupId}
                        teamName={team.name}
                        onClick={() => handleTeamBuildingClick(team.groupId)}
                    />
                ))}
                {isFetching && <TeamBuildListSkeleton />}
                <TemplateBottomBar />
                <FloatingButton
                    variant="primary"
                    position="bottom-right"
                    offset={32}
                    onClick={() => handleCreateTeamBuilding()}
                >
                    <IoAdd />
                </FloatingButton>
            </Container>
        </Viewport>
    )
}

export default PageHome
