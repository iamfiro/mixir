import { Flex, Skeleton } from "../../common";

const TeamBuildListSkeleton = () => {
    return (
        <Flex direction="column" gap={16}>
            {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} width="100%" height="70px" borderRadius="8px" />
            ))}
        </Flex>
    )
}

export default TeamBuildListSkeleton;