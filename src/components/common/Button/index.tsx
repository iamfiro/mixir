import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import { Spinner, SpinnerWrapper, StyledButton } from "./styles.css";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { 
        isLoading, onClick, children,
        leadingIcon, trailingIcon,
        ...rest 
    } = props;
    return (
        <StyledButton 
            ref={ref} 
            onClick={onClick}
            isLoading={isLoading}
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
        </StyledButton>
    );
});

export default Button;