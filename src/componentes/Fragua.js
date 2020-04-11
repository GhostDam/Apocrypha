import React from 'react'
import {LeftMenu, RightMenu}  from './menus/AsideMenus'

export default class Fragua extends React.Component{
    render(){
        return( 
        <React.Fragment>
            <LeftMenu header="izq">
                <h3>si</h3>
                <div>
                    <ul>
                        <li>asfd</li>
                        <li>wrtgfds</li>
                        <li>rtwgfsd</li>
                    </ul>
                </div>
            </LeftMenu>
            <RightMenu header="der">
                <div>
                    contenido del menu izquierdo
                </div>
            </RightMenu>
            <div>
                hi este ess el contenudo grejkh
            </div>
        </React.Fragment>
         )
    }
}