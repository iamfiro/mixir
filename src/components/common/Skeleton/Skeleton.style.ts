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
        height: ${({ height }) =>
            typeof height === 'number' ? `${height}px` : height || '16px'};
        border-radius: ${({ borderRadius }) =>
            typeof borderRadius === 'number'
                ? `${borderRadius}px`
                : borderRadius || '4px'};

        ${({ animation }) =>
            animation &&
            css`
                background: linear-gradient(
                    90deg,
                    var(--color-gray-100) 25%,
                    var(--color-gray-200) 37%,
                    var(--color-gray-100) 63%
                );
                background-size: 200% 100%;
                animation: ${shimmer} 1.5s infinite linear;
            `}
    `,
}
