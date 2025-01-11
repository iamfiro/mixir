import { cloneElement, PropsWithChildren, ReactElement } from "react";
import { BottomBarContainer, BottomBarItemStyle } from "./BottomBar.css";

const BottomBar = ({children}: PropsWithChildren) => {
    return <>
        <BottomBarContainer>
            {children}
        </BottomBarContainer>
    </>
}

export default BottomBar;

// Item
interface ItemProps {
    name: string;
    pageName: string;
    icon: ReactElement;
    selected?: boolean;
}

const Item = ({name, pageName, icon, selected}: ItemProps) => {
    const clonedIcon = cloneElement(icon, {size: 20});

    return <>
        <BottomBarItemStyle href={`/${pageName}`} data-selected={selected}>
            {clonedIcon}
            <span>{name}</span>
        </BottomBarItemStyle>
    </>
}

BottomBar.Item = Item;