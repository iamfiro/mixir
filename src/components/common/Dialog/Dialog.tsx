import { createContext, PropsWithChildren, useContext, MouseEvent, useState } from "react";
import { BackdropContainer, DialogContentContainer, DialogDescriptionStyle, DialogTitleStyle } from "./Dialog.style";

interface DialogProps extends PropsWithChildren {
    isOpen: boolean;
    isClosing?: boolean;
    onClose: () => void;
}

interface DialogContextProps {
    isClosing: boolean;
    handleClose: () => void;
}

const DialogContext = createContext({} as DialogContextProps)

const Dialog = ({isOpen, onClose, children}: DialogProps) => {
    const [isClosing, setIsClosing] = useState(isOpen);

    function handleClose() {
        onClose();
        setIsClosing(true);

        setTimeout(() => {
            setIsClosing(false);
        }, 500);
    }

    return (
        <DialogContext.Provider value={{isClosing, handleClose}}>
            {isOpen && children}
        </DialogContext.Provider>
    )
}

export default Dialog

// Backdrop 컴포넌트
const Backdrop = () => {
    const context = useContext(DialogContext);

    if(!context) {
        throw new Error('Backdrop 컴포넌트는 Dialog 컴포넌트 내부에서 사용되어야 합니다.')
    }

    return <BackdropContainer 
        onClick={context.handleClose} 
        className={context.isClosing ? 'hide' : ''}
    />
}

Dialog.Backdrop = Backdrop

// Content 컴포넌트
const DialogContent = ({children}: PropsWithChildren) => {
    const context = useContext(DialogContext);

    if(!context) {
        throw new Error('DialogContent 컴포넌트는 Dialog 컴포넌트 내부에서 사용되어야 합니다.')
    }

    const handleClick = (e: MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <DialogContentContainer 
            onClick={handleClick}
            className={context.isClosing ? 'hide' : ''}
        >
            {children}
        </DialogContentContainer>
    )
}

Dialog.Content = DialogContent

// Title 컴포넌트
const DialogTitle = ({children}: PropsWithChildren) => (
    <DialogTitleStyle>{children}</DialogTitleStyle>
)

Dialog.Title = DialogTitle

// Description 컴포넌트
const DialogDescription = ({children}: PropsWithChildren) => (
    <DialogDescriptionStyle>{children}</DialogDescriptionStyle>
)

Dialog.Description = DialogDescription