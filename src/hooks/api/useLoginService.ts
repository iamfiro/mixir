import { useMutation } from '@tanstack/react-query'
import loginService from '../../api/login/loginService'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'

const useLoginService = (code: string) => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: () => loginService(code),
        onSuccess: (data) => {
            Cookies.set('accessToken', data.data.accessToken)

            navigate('/onboard/school')
        },
        onError: (error) => {
            alert(error.message)
        },
    })
}

export default useLoginService
