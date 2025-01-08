import { useMutation } from "@tanstack/react-query";
import loginService from "../api/loginService";
import { useNavigate } from "react-router";

const useLoginService = (code: string) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => loginService(code),
        onSuccess: (data) => {
            localStorage.setItem("accessToken", data.data.accessToken);

            navigate("/building");
        },
        onError: (error) => {
            alert(error.message);
        }
    })
}

export default useLoginService;