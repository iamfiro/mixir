import { FaCheck } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import Badge from '../../common/Badge/Badge'
import { schoolClientKeyAvailable } from '../../../types/school/schoolAvailable'
import { Spinner } from '../../common'
import { BadgeVariant } from '../../common/Badge/Badge.types'

interface SchoolAvailableBadgeProps {
    available: schoolClientKeyAvailable
}

const SchoolAvailableBadge = ({ available }: SchoolAvailableBadgeProps) => {
    if (available === null) {
        return <Spinner size={15} color='var(--color-secondary)' />
    }

    const badgeProps = available
        ? {
              variant: 'primary' as BadgeVariant,
              icon: <FaCheck size={10} color="var(--color-primary)" />,
              text: '사용 가능한 학교',
          }
        : {
              variant: 'secondary' as BadgeVariant,
              icon: <IoClose size={15} color="var(--color-secondary)" />,
              text: '지원되지 않는 학교',
          }

    return (
        <Badge variant={badgeProps.variant} icon={badgeProps.icon}>
            {badgeProps.text}
        </Badge>
    )
}

export default SchoolAvailableBadge
