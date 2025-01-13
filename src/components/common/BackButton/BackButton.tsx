import { IoIosArrowBack } from "react-icons/io";
import { BackButtonContainerStyle } from './BackButton.style.ts'

const BackButton = () => {
    return (
        <BackButtonContainerStyle>
            <IoIosArrowBack size={26} color={'var(--color-secondary-light)'} />
        </BackButtonContainerStyle>
    )
}

export default BackButton;