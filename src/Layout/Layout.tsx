import React from 'react'
import MainNavigation from "./MainNavigation";

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = (props) => {

    return (
        <>
            <MainNavigation />
            <div>{props.children}</div>
        </>
    );
}

export default Layout;