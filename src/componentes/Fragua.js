import React from 'react'
import {LeftMenu, RightMenu}  from './menus/AsideMenus'

export default class Fragua extends React.Component{
    render(){
        return( 
        <React.Fragment>
            <LeftMenu header="izq">
            </LeftMenu>
            <RightMenu header="der">
            </RightMenu>
        </React.Fragment>
         )
    }
}