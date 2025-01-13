import styled from 'styled-components'

export const BackButtonContainerStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 0;
    
    &:active {
        transform: scale(0.95);
        opacity: 0.4;
        
        transition: all 0.1s;
    }
`