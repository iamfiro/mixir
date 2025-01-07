import { Viewport } from "../../components/common"
import { Container, Description, Title } from "./styles.css"
import MixirLogo from '../../assets/logo.tsx'
import { Flex } from "@creative-kit/react"

const PageLogin = () => {
    return (
        <Viewport>
            <Container>
                <>Sample Image</>
                <Flex>
                    <MixirLogo size={60} color="#fff" />
                    <Title>팀 관리를 Mixir앱 하나로</Title>
                    <Description>
                        설명을 적어주세요
                    </Description>
                </Flex>
            </Container>
        </Viewport>
    )
}

export default PageLogin;