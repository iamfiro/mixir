import { forwardRef } from "react";
import { FloatingButtonProps } from "./FloatingButton.types";
import { SpinnerWrapper } from "../Button/Button.style";
import { StyledFloatingButton } from "./FloatingButton.style";
import Spinner from "../Spinner/Spinner";

const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>((props, ref) => {
    const { 
        isLoading, 
        onClick, 
        children,
        leadingIcon, 
        trailingIcon,
        position = 'bottom-right',
        offset = 24,
        ...rest 
    } = props;

    return (
        <StyledFloatingButton 
            ref={ref} 
            onClick={onClick}
            isLoading={isLoading}
            position={position}
            offset={offset}
            {...rest}
        >
            {isLoading && (
                <SpinnerWrapper>
                    <Spinner />
                </SpinnerWrapper>
            )}

            <div className="button-children">
                {leadingIcon}
                {children}
                {trailingIcon} 
            </div>
        </StyledFloatingButton>
    );
});

export default FloatingButton;