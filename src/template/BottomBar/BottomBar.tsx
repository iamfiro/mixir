import { GoHomeFill } from 'react-icons/go'
import BottomBar from '../../layout/BottomBar/BottomBar'
import { IoMdAddCircle } from 'react-icons/io'
import { LuSwords } from 'react-icons/lu'
import { useLocation } from 'react-router'

const TemplateBottomBar = () => {
    const location = useLocation()

    console.log(location.pathname)
    return (
        <BottomBar>
            <BottomBar.Item
                name="팀 빌딩"
                pageName=""
                icon={<GoHomeFill />}
                selected={location.pathname === '/'}
            />
            <BottomBar.Item
                name="학생 관리"
                pageName="calendar"
                icon={<IoMdAddCircle />}
                selected={location.pathname === '/calendar'}
            />
            <BottomBar.Item
                name="대진표"
                pageName="team"
                icon={<LuSwords />}
                selected={location.pathname === '/team'}
            />
        </BottomBar>
    )
}

export default TemplateBottomBar
