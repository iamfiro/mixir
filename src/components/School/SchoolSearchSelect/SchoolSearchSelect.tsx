import { Flex } from '@creative-kit/react'
import { Container, Description, Title } from './SchoolSearchSelect.style'
import {SchoolAvailableBadge} from '../index'
import { schoolClientKeyAvailable } from '../../../types/school/schoolAvailable'

interface SchoolSearchSelectProps {
    schoolName: string
    affiliated: string // ex: 경기도교육청청
    onClick: () => void
    isClientKeyAvailable: schoolClientKeyAvailable
}

const SchoolSearchSelect = ({
    schoolName,
    affiliated,
    onClick,
    isClientKeyAvailable,
}: SchoolSearchSelectProps) => {
    return (
        <Container onClick={onClick}>
            <Flex gap={8} align='center'>
                <Title>{schoolName}</Title>
                <SchoolAvailableBadge available={null} />
            </Flex>
            <Description>{affiliated}</Description>
        </Container>
    )
}

export default SchoolSearchSelect
