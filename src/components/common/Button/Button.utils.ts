import { css } from "styled-components"

interface ButtonVariants {
    backgroundColor: string
    color?: string

    hoverBackgroundColor: string

    activeBackgroundColor: string
}
export function generateVariants(props: ButtonVariants) {
    const {
        backgroundColor,
        color = 'white',
        hoverBackgroundColor,
        activeBackgroundColor,
    } = props

    return css`
        background-color: ${backgroundColor};
        color: ${color};

        &:hover:not(:disabled) {
            background-color: ${hoverBackgroundColor};
        }

        &:active:not(:disabled) {
            background-color: ${activeBackgroundColor};

            transform: scale(0.96);
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `
}