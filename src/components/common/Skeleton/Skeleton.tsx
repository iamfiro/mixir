import { SkeletonStyle } from './Skeleton.style'

export interface SkeletonProps {
    width?: string | number
    height?: string | number
    borderRadius?: string | number
    animation?: boolean
    className?: string
}

const Skeleton = ({
    width,
    height,
    borderRadius,
    animation = true,
    className,
}: SkeletonProps) => {
    return (
        <SkeletonStyle.Container
            width={width}
            height={height}
            borderRadius={borderRadius}
            animation={animation}
            className={className}
        />
    )
}

export default Skeleton
