import { Viewport } from "../../components/common";
import BottomBar from "../../layout/BottomBar/BottomBar";
import { GoHomeFill } from "react-icons/go";
import { IoMdAddCircle } from "react-icons/io";
import { LuSwords } from "react-icons/lu";
import TemplateBottomBar from "../../template/BottomBar/BottomBar";

const PageHome = () => {
    return <>
        <Viewport>
            <h1>Home</h1>
            <TemplateBottomBar />
        </Viewport>
    </>
}

export default PageHome;