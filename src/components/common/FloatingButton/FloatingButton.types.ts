import { ButtonProps } from '../Button/Button.types';

export interface FloatingButtonProps extends Omit<ButtonProps, 'fullWidth' | 'size'> {
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    offset?: number;
}