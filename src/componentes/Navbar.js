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


function Navbar(){
    const [visible , setVisible] = React.useState(false)

    return (
        <React.Fragment>
    <nav className='menu sticky-top'>
        <div className={visible ? "hamburguer colored": "hamburguer"} onClick={()=>{setVisible(!visible)}}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>




        <div className={visible ? "content visible": "content"}>
            <ul onClick={()=>{setVisible(!visible)}}>
                <li>
                    <Link className='' to='/' onClick={()=>{setVisible(!visible)}}>Home</Link>
                </li>
                <li>
                    <Link className='' to='/muros' onClick={()=>{setVisible(!visible)}}>Muros</Link>                    
                </li>
                <li>
                    <Link className='' to='/artesanias/modelos' onClick={()=>{setVisible(!visible)}}>Modelos</Link>
                </li>

                <li>
                    <div className="dropdown" onClick={(e)=>{e.stopPropagation()}}>
                        <button className="dropbtn">Alfabetos</button>
                        <div className="dropdown-content">
                            <Link className='' to='/alfabeto/dragon' onClick={()=>{setVisible(!visible)}}>Dragon</Link>
                            <Link className='' to='/alfabeto/daedra' onClick={()=>{setVisible(!visible)}}>Daedra</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown" onClick={(e)=>{e.stopPropagation()}}>
                        <button className="dropbtn">Alquimia</button>
                        <div className="dropdown-content">
                            <Link className='' to='/alquimia' onClick={()=>{setVisible(!visible)}}>Información</Link>
                            <Link className='' to='/ingredientes' onClick={()=>{setVisible(!visible)}}>Ingredientes</Link>
                            <Link className='' to='/pociones' onClick={()=>{setVisible(!visible)}}>Pociones</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown" onClick={(e)=>{e.stopPropagation()}}>
                        <button className="dropbtn">Varios</button>
                        <div className="dropdown-content">
                            <Link className='' to='/artesanias/fraduadelatronach' onClick={()=>{setVisible(!visible)}}>Fragua del atronach</Link>
                            <Link className='' to='/artesanias/aranas' onClick={()=>{setVisible(!visible)}}>Arañas "Dragonbron DLC"</Link>
                            <Link className='' to='/artesanias/modelosar' onClick={()=>{setVisible(!visible)}}>modelos Ar</Link>
                            <Link className='' to='/nuevo_muro' onClick={()=>{setVisible(!visible)}}>Agregar muros</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </div> 
        <span className='date' 
              data-toggle="tooltip" data-placement="bottom" 
              title={`${dayn} ${num} ${mntn}`}>{`${day} ${num} ${mnt}`}</span>
        </nav>

    </React.Fragment>
    )


}


export default Navbar