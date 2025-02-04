import {
    BackButton,
    Button,
    Container,
    Flex,
    Input,
    Title,
    Viewport,
} from '../../../components/common'
import { useState } from 'react'
import Segment from '../../../components/common/Segment/Segment.tsx'
import { SegmentData } from '../../../components/common/Segment/Segment.type.ts'

const PageTeamBuildCreate = () => {
    const [teamName, setTeamName] = useState('')
    const [selectedSegment, setSelectedSegment] = useState<string>('segment1')
    const [customSegment, setCustomSegment] = useState<string>('')

    const segmentData: SegmentData[] = [
        { name: '3팀', value: '3team' },
        { name: '4팀', value: '4team' },
        { name: '기타', value: 'etc' },
    ]

    return (
        <Viewport>
            <Container>
                <BackButton />
                <Title>
                    정보를 기입하여
                    <br />팀 빌딩을 완료해주세요
                </Title>
                <div style={{ height: 30 }} />
                <Flex direction={'column'} gap={30}>
                    <Input.Container>
                        <Input.Label label={'그룹 이름'} />
                        <Input
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            placeholder="그룹 이름을 입력해주세요"
                        />
                    </Input.Container>
                    <Segment
                        data={segmentData}
                        setSegment={setSelectedSegment}
                        selectedSegment={selectedSegment}
                    />
                    {selectedSegment === 'etc' && (
                        <Input.Container>
                            <Input.Label label={'팀 인원 직접 입력'} />
                            <Input
                                value={customSegment}
                                onChange={(e) =>
                                    setCustomSegment(e.target.value)
                                }
                                placeholder="직접 입력해주세요"
                            />
                        </Input.Container>
                    )}
                </Flex>
                <div style={{ height: '100%' }} />
                <Button variant={'primary'} fullWidth size={'lg'}>
                    저장하기
                </Button>
            </Container>
        </Viewport>
    )
}

export default PageTeamBuildCreate
