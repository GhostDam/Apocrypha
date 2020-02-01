import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (


<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav mr-auto">
        <li className='nav-item'> 
            <Link className='nav-link' to='/'>Home</Link>
        </li>

        <li className='nav-item'> 
            <Link className="nav-link" to="/muros">Muros</Link>
        </li>

        <li className='nav-item'> 
        <button className="btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Alfabetos
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className='dropdown-item' to='/alfabeto/dragon'>Dragon</Link>
                <Link className='dropdown-item' to='/alfabeto/daedra'>Daedra</Link>
            <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>        
        </li>

        <li className='nav-item'> 
        <button className="btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Updates
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className='dropdown-item' to='/lenguaje'>Agregar lenguaje</Link>
            <Link className='dropdown-item' to='/nuevo_muro'>Agregar muros</Link>
            <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>        
        </li>


        <li className='nav-item'> 
        <button className="btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Alquimia
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className='dropdown-item' to='/alquimia'>Ingredientes</Link>
            <Link className='dropdown-item' to='/pociones'>Pociones</Link>
            <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>        
        </li>

        <li className='nav-item'> 
        <button className="btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Artesanias
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className='dropdown-item' to='/artesania/fraduadelatronach'>Fragua del atronach</Link>
            <Link className='dropdown-item' to='/artesania/aranas'>Arañas (Dragonbron DLC)</Link>
            <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>        
        </li>


    </ul>
    </div>


</nav>
)

export default Navbar