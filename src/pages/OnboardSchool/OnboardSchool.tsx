import { useState } from 'react'
import { Input, Viewport } from '../../components/common'
import OnboardTitle from '../../components/onboard/OnboardTitle/OnboardTitle'
import { Container } from './OnboardSchool.style'

const OnboardSchool = () => {
    const [school, setSchool] = useState('')
    const [hasInputEverFocused, setHasInputEverFocused] = useState(false)

    return (
        <Viewport>
            <Container>
                {!hasInputEverFocused && <OnboardTitle title="현재 다니시고 있는 학교를 알려주세요" />}
                <Input.Container>
                    <Input.Label label="학교명" />
                    <Input
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        placeholder='학교명을 입력해주세요'
                        onFocus={() => {
                            setHasInputEverFocused(true)
                        }}
                    />
                </Input.Container>
            </Container>
        </Viewport>
    )
}

export default OnboardSchool
