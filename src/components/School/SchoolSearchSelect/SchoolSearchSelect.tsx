import { Container, Description, Title } from "./SchoolSearchSelect.style";

interface SchoolSearchSelectProps {
    schoolName: string;
    affiliated: string; // ex: 경기도교육청청
    onClick: () => void;
}

const SchoolSearchSelect = ({ schoolName, affiliated, onClick }: SchoolSearchSelectProps) => {
    return (
        <Container onClick={onClick}>
            <Title>{schoolName}</Title>
            <Description>{affiliated}</Description>
        </Container>
    )
}

export default SchoolSearchSelect