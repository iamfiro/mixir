import styled, { keyframes } from 'styled-components'

export const showAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const hideAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

export const slideUpAnimation = keyframes`
    from {
        bottom: -300px;
    }
    to {
        bottom: 15px;
    }
`

export const slideDownAnimation = keyframes`
    from {
        bottom: 15px;
    }

    to {
        bottom: -300px;
    }
`

export const BackdropContainer = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    padding: 30px;

    max-width: var(--max-width);

    background-color: rgba(0, 0, 0, 0.4);

    animation: ${showAnimation} 0.5s ease;

    &.hide {
        opacity: 0;
        animation: ${hideAnimation} 0.5s ease;
    }
`

export const DialogContentContainer = styled.div`
    width: min(calc(var(--max-width) - 30px), calc(100% - 30px));
    height: auto;

    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);

    border-radius: 28px;

    padding: 20px;

    max-width: var(--max-width);

    background-color: white;

    animation: ${slideUpAnimation} 0.5s ease;

    &.hide {
        bottom: 300px;
        animation: ${slideDownAnimation} 0.5s ease;
    }
`

export const DialogTitleStyle = styled.h1`
    font-size: 22px;
    font-weight: 600;

    margin: 0 0 20px 0;
`

export const DialogDescriptionStyle = styled.p`
    font-size: 18px;
    font-weight: 500;

    margin: 0 0 24px 0;

    color: var(--color-secondary);
`