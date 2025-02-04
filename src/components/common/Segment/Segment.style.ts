import styled from 'styled-components';
import Button from '../Button/Button';

export const SegmentContainer = styled.div`
    display: flex;
    gap: 8px;

    width: 100%;
`;

export const SegmentButton = styled(Button)<{ isSelected: boolean }>`
    background-color: ${({ isSelected }) => (isSelected ? '#007bff' : 'var(--color-secondary-background)')};
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};

    &:hover {
        color: #fff;
    }
`;