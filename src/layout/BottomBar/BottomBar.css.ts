import styled from "styled-components";

export const BottomBarContainer = styled.div`
    width: min(100%, var(--max-width));
    height: 66px;

    background-color: white;
    
    border-top: 1px solid var(--color-border);

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 16px;

    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    padding: 0 16px;
`

export const BottomBarItemStyle = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    font-size: 14px;

    text-decoration: none;

    svg {
        width: 24px;
        height: 24px;
    }

    span, svg {
        color: var(--color-secondary);
    }

    &[data-selected="true"] {
        span, svg {
            color: var(--color-primary);
        }
    }
`