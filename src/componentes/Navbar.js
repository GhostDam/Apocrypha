import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (


<nav className='nav'>
    <Link to='/'>Home</Link>
    <Link className="" to="/muros">Muros</Link>
    <a className='dropdown'>
        <a>Alfabetos</a>
        <div className='ddcontent'>
        <Link className='' to='/alfabeto/dragon'>Dragon</Link>
        <Link className='' to='/alfabeto/daedra'>Daedra</Link>
        </div>
    </a>
    <a className='dropdown'>
        <a>updates</a>
        <div className='ddcontent'>
        <Link className='' to='/lenguaje'>Agregar lenguaje</Link>
        <Link className='' to='/nuevo_muro'>Agregar muros</Link>
        </div>
    </a>
    <a className='dropdown'>
        <a>Alquimia</a>
        <div className='ddcontent'>
        <Link className='' to='/alquimia'>Ingredientes</Link>
        <Link className='' to='/pociones'>Pociones</Link>
        </div>
    </a>
    <a className='dropdown'>
        <a>Artesanias</a>
        <div className='ddcontent'>
        <Link className='' to='/artesania/fraduadelatronach'>Fragua del atronach</Link>
        <Link className='' to='/artesania/aranas'>Arañas (Dragonbron DLC)</Link>
        </div>
    </a>

</nav>
)

export default Navbar