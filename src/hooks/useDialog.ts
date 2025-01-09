import { useState } from "react";

const useDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        setIsOpen(true);
    }

    const close = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 500);
    }

    return {isOpen, open, close};
}

export default useDialog;