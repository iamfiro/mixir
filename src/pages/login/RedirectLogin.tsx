import { Flex } from '@creative-kit/react'
import useLoginService from '../../hooks/api/useLoginService'
import { useEffect } from 'react'
import { Spinner, Viewport } from '../../components/common'

const PageRedirectLogin = () => {
    const code = new URLSearchParams(location.search).get('code') || ''
    const loginService = useLoginService(code)

    useEffect(() => {
        loginService.mutate()
    })

    return (
        <Viewport>
            <Flex
                direction="column"
                justify="center"
                align="center"
                fullHeight
                fullWidth
            >
                <Spinner size={40} color="var(--color-secondary-light)" />
            </Flex>
        </Viewport>
    )
}

export default PageRedirectLogin
