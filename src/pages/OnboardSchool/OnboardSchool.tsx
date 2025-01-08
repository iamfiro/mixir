import { Viewport } from '../../components/common'
import OnboardTitle from '../../components/onboard/OnboardTitle/OnboardTitle'
import { Container } from './OnboardSchool.style'

const OnboardSchool = () => {
    return (
        <Viewport>
            <Container>
                <OnboardTitle title="현재 다니시고 있는 학교를 알려주세요" />
            </Container>
        </Viewport>
    )
}

export default OnboardSchool
