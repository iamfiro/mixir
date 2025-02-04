import { ElementType, forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'

interface BaseLayoutProps {
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

interface LayoutSizeProps {
    fullHeight: boolean
    fullWidth: boolean
    fitContent: boolean
}

interface FlexProps extends BaseLayoutProps, Partial<LayoutSizeProps> {
    as?: ElementType
    direction?: 'row' | 'column'
    justify?: 'start' | 'end' | 'center' | 'between' | 'around'
    align?: 'start' | 'end' | 'center' | 'stretch'
    wrap?: 'wrap' | 'nowrap'
    gap?: number
}

// Styled component with dynamic props
const StyledFlex = styled.div<Omit<FlexProps, 'as' | 'style' | 'className'>>`
    display: flex;

    // Direction
    ${(props) =>
        props.direction === 'column' &&
        css`
            flex-direction: column;
        `}
    ${(props) =>
        props.direction === 'row' &&
        css`
            flex-direction: row;
        `}

  // Justify Content
  ${(props) =>
        props.justify === 'start' &&
        css`
            justify-content: flex-start;
        `}
  ${(props) =>
        props.justify === 'end' &&
        css`
            justify-content: flex-end;
        `}
  ${(props) =>
        props.justify === 'center' &&
        css`
            justify-content: center;
        `}
  ${(props) =>
        props.justify === 'between' &&
        css`
            justify-content: space-between;
        `}
  ${(props) =>
        props.justify === 'around' &&
        css`
            justify-content: space-around;
        `}

  // Align Items
  ${(props) =>
        props.align === 'start' &&
        css`
            align-items: flex-start;
        `}
  ${(props) =>
        props.align === 'end' &&
        css`
            align-items: flex-end;
        `}
  ${(props) =>
        props.align === 'center' &&
        css`
            align-items: center;
        `}
  ${(props) =>
        props.align === 'stretch' &&
        css`
            align-items: stretch;
        `}

  // Wrap
  ${(props) =>
        props.wrap === 'wrap' &&
        css`
            flex-wrap: wrap;
        `}
  ${(props) =>
        props.wrap === 'nowrap' &&
        css`
            flex-wrap: nowrap;
        `}

  // Size
  ${(props) =>
        props.fullWidth &&
        css`
            width: 100%;
        `}
  ${(props) =>
        props.fullHeight &&
        css`
            height: 100%;
        `}
  ${(props) =>
        props.fitContent &&
        css`
            width: fit-content;
        `}

  // Gap
  ${(props) =>
        props.gap !== undefined &&
        css`
            gap: ${props.gap}px;
        `}
`

const Flex = forwardRef(function Flex(props: FlexProps, ref: Ref<unknown>) {
    const { as, children, className, style, ...rest } = props

    return (
        <StyledFlex
            as={as}
            ref={ref}
            className={className}
            style={style}
            {...rest}
        >
            {children}
        </StyledFlex>
    )
})

export default Flex