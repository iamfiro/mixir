import { IoIosArrowBack } from "react-icons/io";
import { BackButtonContainerStyle } from './BackButton.style.ts'
import { useNavigate } from "react-router";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    }

    return (
        <BackButtonContainerStyle>
            <IoIosArrowBack size={26} color={'var(--color-secondary-light)'} onClick={handleBackButtonClick} />
        </BackButtonContainerStyle>
    )
}

export default BackButton;