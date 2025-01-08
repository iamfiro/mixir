import { Flex } from "@creative-kit/react"
import { Spinner, Viewport } from "../../components/common";

const PageRedirectLogin = () => {
    return (
        <Viewport>
            <Flex direction="column" justify="center" align="center" fullHeight fullWidth>
                <Spinner size={40} color="var(--color-secondary-light)"  />
            </Flex>
        </Viewport>
    );
}

export default PageRedirectLogin;