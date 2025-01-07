/**
 * LocalStorage에 저장된 accessToken을 확인하여 로그인 여부를 반환합니다
 * @returns 로그인 여부를 반환합니다
 */
function checkAuthenticate() {
    const accessToken = localStorage.getItem('accessToken');

    return !!accessToken;
}

export default checkAuthenticate;