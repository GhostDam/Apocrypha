import React from 'react'
import './AsideMenus.css'

export const LeftMenu = (props) => {
    const [opened, setOpened ] = React.useState(false)
    return (
            <div className={ opened  ? "left_menu opened" : "left_menu"} onClick={()=>{setOpened(!opened)}}>
                <div className="menu_header">
                    {props.header}
                </div>
                <div className="menu_content">
                    {props.children}
                </div>
            </div>
    )
}


export const RightMenu = (props) =>{
    const [opened, setOpened ] = React.useState(false)
    return (
            <div className={opened ? "right_menu opened" : "right_menu"} onClick={()=>{setOpened(!opened)}}>
                <div className="menu_header">
                    {props.header}
                </div>
                <div className="menu_content">
                    {props.children}
                </div>
            </div>
    )
}

