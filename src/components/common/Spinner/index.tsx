import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div<{ color?: string; size?: number }>`
    width: ${({ size }) => (size ? `${size}px` : '16px')};
    height: ${({ size }) => (size ? `${size}px` : '16px')};

    border: 2px solid ${({ color }) => (color ? color : 'currentColor')};
    border-right-color: transparent;

    border-radius: 50%;

    animation: ${spin} 0.75s linear infinite;
`;

export default Spinner;
