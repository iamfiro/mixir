import { Container, Description, Title } from './styles.css'
import MixirLogo from '../../assets/logo.tsx'
import GoogleLogo from '../../assets/icon/GoogleLoginIcon.tsx'
import getAuthorizationUrl from '../../api/login/getAuthorizationUrl.ts'
import { Button, Viewport } from '../../components/common/index.ts'

const PageLogin = () => {
    async function handleGoogleLogin() {
        const authUrl = await getAuthorizationUrl()

        location.href = authUrl
    }

    return (
        <Viewport>
            <Container>
                <MixirLogo size={60} color="#fff" />
                <Title>팀 관리를 Mixir앱 하나로</Title>
                <Description>설명을 적어주세요</Description>
                <Button
                    variant="background"
                    size="lg"
                    fullWidth
                    style={{ marginTop: 20 }}
                    leadingIcon={<GoogleLogo size={24} />}
                    onClick={() => handleGoogleLogin()}
                >
                    눌러서 Google로 시작하기
                </Button>
            </Container>
        </Viewport>
    )
}

export default PageLogin
