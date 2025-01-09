import { StyledBadgeContainer } from "./Badge.style"
import { BadgeProps } from "./Badge.types"

const Badge = (props: BadgeProps) => {
    const {variant, icon, children, ...rest} = props;
    return (
        <StyledBadgeContainer variant={variant} {...rest}>
            {icon}
            <span>{children}</span>
        </StyledBadgeContainer>
    )
}

export default Badge