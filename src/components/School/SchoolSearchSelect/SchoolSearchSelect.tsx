import { Flex } from '@creative-kit/react'
import { Container, Description, Title } from './SchoolSearchSelect.style'
import {SchoolAvailableBadge} from '../index'
import useSchoolAvailable from '../../../hooks/school/useSchoolAvailable'
import { School } from '../../../types/school'

interface SchoolSearchSelectProps extends School {
    schoolId: string
    onClick: () => void
}

const SchoolSearchSelect = ({
    schoolName,
    affiliated,
    onClick,
}: SchoolSearchSelectProps) => {
    const {data} = useSchoolAvailable(schoolName)
    return (
        <Container onClick={onClick}>
            <Flex gap={8} align='center'>
                <Title>{schoolName}</Title>
                <SchoolAvailableBadge available={data} />
            </Flex>
            <Description>{affiliated}</Description>
        </Container>
    )
}

export default SchoolSearchSelect
