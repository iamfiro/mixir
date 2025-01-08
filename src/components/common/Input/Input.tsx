import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, PropsWithChildren } from "react";
import {
    Input as InputStyleComponent,
    Container
} from "./Input.style";
import { CSSProperties } from "styled-components";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
    const {value, onChange, ...rest} = props;

    return (
        <InputStyleComponent value={value} onChange={onChange} {...rest} />
    )
};

export default Input;

// Container 컴포넌트
interface InputContainerProps extends PropsWithChildren {
    style?: CSSProperties;
}
const InputContainer = ({children, style}: InputContainerProps) => {
    return <Container style={style}>{children}</Container>
}

Input.Container = InputContainer;

// Label 컴포넌트
interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
    label: string;
}

const InputLabel = ({label, ...rest}: InputLabelProps) => {
    return <label {...rest}>{label}</label>
}

Input.Label = InputLabel;