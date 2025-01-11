import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;

    min-height: 64px;
    
    border-bottom: 1px solid var(--color-border);

    &:active {
        transform: scale(0.95);
        opacity: 0.4;

        transition: all 0.2s;
    }
`

export const TeamBuildName = styled.h1`
    font-size: 20px;
    font-weight: 500;
`

export const TeamBuildSecondaryText = styled.span`
    font-weight: 500;
    color: var(--color-secondary);
`