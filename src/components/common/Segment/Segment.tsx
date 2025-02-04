import { SegmentList } from './Segment.type';
import { SegmentContainer, SegmentButton } from './Segment.style';

interface SegmentProps {
    data: SegmentList;
    setSegment: (value: string) => void;
    selectedSegment: string;
}

const Segment = ({ data, setSegment, selectedSegment }: SegmentProps) => {
    return (
        <SegmentContainer>
            {data.map(segment => (
                <SegmentButton
                    fullWidth
                    key={segment.value}
                    isSelected={segment.value === selectedSegment}
                    onClick={() => setSegment(segment.value)}
                >
                    {segment.name}
                </SegmentButton>
            ))}
        </SegmentContainer>
    );
};

export default Segment;