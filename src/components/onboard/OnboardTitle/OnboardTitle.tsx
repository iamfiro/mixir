import { CSSProperties } from "styled-components";
import { Container, Title } from "./OnboardTitle.style";

interface OnboardTitleProps {
    title: string;
    titleStyle?: CSSProperties;
    containerStyle?: CSSProperties;
}

const OnboardTitle = (props: OnboardTitleProps) => {
    const {title, titleStyle, containerStyle} = props;

    return (
        <Container style={containerStyle}>
            <Title style={titleStyle}>{title}</Title>
        </Container>
    )
}

export default OnboardTitle;