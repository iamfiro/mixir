import styled from "styled-components";

export const Container = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding: 30px;

    background-color: var(--color-primary);
`

export const Title = styled.h1`
    color: #fff;

    font-weight: 600;

    margin: 30px 0 16px 0;
`

export const Description = styled.p`
    color: #fff;
    opacity: 0.7;

    font-size: 1.2rem;

    margin-top: 0px;
`