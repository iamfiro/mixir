import styled from 'styled-components'

export const Input = styled.input`
    height: 50px;

    border: 0;
    border-bottom: 2px solid var(--color-background);

    font-size: 22px;
    font-weight: 500;

    &::placeholder {
        color: var(--color-secondary);

        font-weight: 500;
    }

    &:focus {
        outline: none;

        border-bottom: 2px solid var(--color-primary);
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`