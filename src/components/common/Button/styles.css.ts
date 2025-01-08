import styled, { keyframes, css } from 'styled-components'
import { ButtonProps } from './Button.types'
import { generateVariants } from './Button.utils'

export const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const sizes = {
    sm: css`
        height: 32px;
        padding: 0 12px;
        font-size: 14px;
        gap: 6px;
        border-radius: 8px;
    `,
    md: css`
        height: 46px;
        padding: 0 16px;
        font-size: 16px;
        gap: 8px;
        border-radius: 10px;
    `,
    lg: css`
        height: 56px;
        padding: 0 24px;
        font-size: 18px;
        gap: 10px;
        border-radius: 14px;
    `,
}

export const variants = {
    primary: generateVariants({
        backgroundColor: 'var(--color-primary)',
        hoverBackgroundColor: 'var(--color-primary-dark)',
        activeBackgroundColor: 'var(--color-primary-darker)',
    }),
    secondary: generateVariants({
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-secondary)',
        hoverBackgroundColor: 'var(--color-background-dark)',
        activeBackgroundColor: 'var(--color-background-darker)',
    }),
    danger: generateVariants({
        backgroundColor: 'var(--color-danger)',
        hoverBackgroundColor: 'var(--color-danger-dark)',
        activeBackgroundColor: 'var(--color-danger-darker)',
    }),
    background: generateVariants({
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-primary)',
        hoverBackgroundColor: 'var(--color-background-dark)',
        activeBackgroundColor: 'var(--color-background-darker)',
    })
}

export const StyledButton = styled.button<ButtonProps>`
    position: relative;
    display: inline-flex;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border: none;

    font-weight: 500;

    cursor: pointer;
    transition: all 0.1s ease-in-out;
    white-space: nowrap;

    width: fit-content;

    ${({ size = 'lg' }) => sizes[size]}
    ${({ variant = 'primary' }) => variants[variant]}
    ${({ fullWidth }) => fullWidth && 'width: 100%;'}

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .button-children {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: inherit;;
    }

    ${({ isLoading = false }) => isLoading && css`
        cursor: not-allowed;

        & > .button-children {
            opacity: 0;
        }
    `}
`

export const SpinnerWrapper = styled.div`
    position: absolute;

    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`