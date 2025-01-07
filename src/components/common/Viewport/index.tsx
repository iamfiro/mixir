import { CSSProperties, HTMLAttributes, ReactElement, ReactNode } from "react"
import { ViewportContainer, ViewportContent } from "./styles.css";

interface ViewportProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactElement | ReactNode;
    containerStyle?: CSSProperties;
    contentStyle?: CSSProperties;
}

export default function Viewport(props: ViewportProps) {
    const { children, containerStyle, contentStyle, ...rest } = props;

    return (
        <ViewportContainer style={containerStyle}>
            <ViewportContent style={contentStyle} {...rest}>
                {children}
            </ViewportContent>
        </ViewportContainer>
    )
}