import styled, { css, keyframes } from 'styled-components'
import { SkeletonProps } from './Skeleton'

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

export const SkeletonStyle = {
    Container: styled.div<SkeletonProps>`
        background-color: var(--color-gray-100);
        width: ${({ width }) =>
            typeof width === 'number' ? `${width}px` : width || '100%'};
        max-width: 100%;
        height: ${({ height }) =>
            typeof height === 'number' ? `${height}px` : height || '16px'};
        min-height: 8px;
        border-radius: ${({ borderRadius }) =>
            typeof borderRadius === 'number'
                ? `${borderRadius}px`
                : borderRadius || '4px'};

        ${({ animation }) =>
            animation &&
            css`
                background: linear-gradient(
                    90deg,
                    #f6f7f8 25%,
                    #edeef1 37%,
                    #f6f7f8 63%
                );
                background-size: 200% 100%;
                animation: ${shimmer} 1.2s infinite ease-in-out;
            `}
    `,
}
