import React from 'react'
import {Link} from 'react-router-dom'

var f = new Date();
var messk = ["Estrella del Alba", "Amanecer", "primera semilla", "mano de lluvia", "segunda semilla", "mitad del año", "culminacion solar", "ultima semilla", "fuego del hogar", "helada", "ocaso", "Estrella vespertina "];
var diassk = ["Sundas", "Morndas", "Tirdas", "Middas", "Turdas", "Fredas", "Loredas"]

const day = diassk[f.getDay()]
const mnt = messk[f.getMonth()]

var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var dia = ["Domingo", "Lune", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

const dayn = dia[f.getDay()]
const mntn = mes[f.getMonth()]

const num = f.getDate()


const Navbar = () => (
<nav className='navbar sticky-top navbar-expand-sm navbar-dark bg-dark'>

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

        <li className='nav-item dropdown'> 
        <button className="btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Alfabetos
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className='dropdown-item' to='/alfabeto/dragon'>Dragon</Link>
                <Link className='dropdown-item' to='/alfabeto/daedra'>Daedra</Link>
            </div>        
        </li>

        <li className='nav-item dropdown'> 
        <button className="btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Alquimia
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className='dropdown-item' to='/alquimia'>Ingredientes</Link>
            <Link className='dropdown-item' to='/pociones'>Pociones</Link>
            </div>        
        </li>

        <li className='nav-item dropdown'> 
        <button className="btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Artesanias
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className='dropdown-item' to='/artesanias/fraduadelatronach'>Fragua del atronach</Link>
            <Link className='dropdown-item' to='/artesanias/aranas'>Arañas (Dragonbron DLC)</Link>
            <Link className='dropdown-item' to='/artesanias/modelos'>modelos</Link>

            </div>        
        </li>

        <li className='nav-item dropdown'> 
        <button className="btn btn-secondary dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Updates
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className='dropdown-item' to='/lenguaje'>Agregar lenguaje</Link>
            <Link className='dropdown-item' to='/nuevo_muro'>Agregar muros</Link>
            </div>        
        </li>

    </ul>
    </div>
    
    <div className='form-inline'>
        <span className='navbar-text' data-toggle="tooltip" data-placement="bottom" title={`${dayn} ${num} ${mntn}`}>{`${day} ${num} ${mnt}`}</span>
    </div>
</nav>
)

export default Navbar