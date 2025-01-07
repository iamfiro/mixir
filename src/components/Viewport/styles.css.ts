import styled from "styled-components";

export const ViewportContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-background);
`

export const ViewportContent = styled.main`
    width: min(100%, var(--max-width));
    height: 100%;

    background-color: red;
`