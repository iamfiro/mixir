import { Flex } from '@creative-kit/react'
import {
    Container,
    TeamBuildName,
    TeamBuildSecondaryText,
} from './TeamBuildListPreview.css'
import { IoIosArrowForward } from 'react-icons/io'

interface TeamBuildListPreviewProps {
    teamName: string
    className: string
    memberCount: number
    onClick?: () => void
}

const TeamBuildListPreview = ({
    teamName,
    className,
    memberCount,
    onClick,
}: TeamBuildListPreviewProps) => {
    return (
        <Container onClick={onClick}>
            <Flex align="center" gap={8}>
                <TeamBuildName>{teamName}</TeamBuildName>
                <TeamBuildSecondaryText>{className}</TeamBuildSecondaryText>
            </Flex>
            <Flex align="center" gap={8}>
                <TeamBuildSecondaryText>({memberCount}명)</TeamBuildSecondaryText>
                <IoIosArrowForward size={20} color="var(--color-secondary)" />
            </Flex>
        </Container>
    )
}

export default TeamBuildListPreview
