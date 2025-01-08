import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 14px 0;

    &:active {
        opacity: 0.5;

        transform: scale(0.97);

        transition: all 0.1s;
    }
`

export const Title = styled.span`
    font-size: 20px;
    font-weight: 600;
`

export const Description = styled.span`
    color: var(--color-secondary);
`