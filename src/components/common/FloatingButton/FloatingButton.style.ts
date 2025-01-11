import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/Button.style';
import { FloatingButtonProps } from './FloatingButton.types';
import { variants } from '../Button/Button.style';

const getPositionStyles = (position: FloatingButtonProps['position'], offset: number) => {
    const bottomOffset = 90; // 60px for BottomBar + 20px padding

    switch (position) {
        case 'bottom-right':
            return css`
                bottom: ${bottomOffset}px;
                right: calc((100vw - min(100vw, 500px)) / 2 + 20px);
            `;
        case 'bottom-left':
            return css`
                bottom: ${bottomOffset}px;
                left: calc((100vw - min(100vw, 500px)) / 2 + 20px);
            `;
        case 'top-right':
            return css`
                top: ${offset}px;
                right: calc((100vw - min(100vw, 500px)) / 2 + 20px);
            `;
        case 'top-left':
            return css`
                top: ${offset}px;
                left: calc((100vw - min(100vw, 500px)) / 2 + 20px);
            `;
        default:
            return css`
                bottom: ${bottomOffset}px;
                left: calc((100vw - min(100vw, 500px)) / 2 + 20px);
            `;
    }
};

export const StyledFloatingButton = styled(StyledButton)<FloatingButtonProps>`
    position: fixed;
    min-width: 64px;
    height: 74px;
    padding: 20px;
    border-radius: 9999px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;

    ${({ position, offset = 24 }) => getPositionStyles(position, offset)}

    .button-children {
        svg {
            width: 34px;
            height: 34px;
        }
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(0);
    }

    ${({ variant = 'primary' }) => variants[variant]}
`;