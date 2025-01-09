import styled from "styled-components";
import { BadgeProps } from "./Badge.types";

const variants = {
    primary: {
        backgroundColor: 'var(--color-primary-background)',
        color: 'var(--color-primary)',
    },
    secondary: {
        backgroundColor: 'var(--color-secondary-background)',
        color: 'var(--color-secondary)',
    },
    danger: {
        backgroundColor: 'var(--color-danger-background)',
        color: 'var(--color-danger)',
    }
}

export const StyledBadgeContainer = styled.div<BadgeProps>`
    display: flex;
    align-items: center;
    gap: 4px;

    ${({ variant = 'danger' }) => variants[variant]}

    padding: 3px 7px;

    border-radius: 999px;

    span {
        font-size: 12px;
    }
`