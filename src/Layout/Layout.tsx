import React, { useState } from 'react'
import MainNavigation from "./MainNavigation";
import OpeningMenu from '../Components/OpeningMenu/OpeningMenu';
import Footer from './Footer';

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            {showMenu && <OpeningMenu hamburgerClicked={showMenu} setHamburgerClicked={setShowMenu} />}
            <MainNavigation hamburgerClicked={showMenu} setHamburgerClicked={setShowMenu} />
            {!showMenu && <div>{props.children}</div>}
            <Footer />
        </>
    );
}

export default Layout;