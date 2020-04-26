import React from 'react'

function Info(){
    return (
        <div>
                <div className='row info'>
                    <div className="col-md-6">
                        <h2>Venenos</h2>
                        <p>Hay 3 tipos de veneno</p>
                        <ul>
                            <li>Daño</li>
                            <li>Daño concentrado</li>
                            <li>Daño duradero</li>
                        </ul>
                        <p>1.- Daño. <br/> 
                        Ejemplo: Veneno 20 puntos de daño y enemigo de 100/100 puntos de salud. El enemigo se quedará con 80/100 de salud. Lo mismo con el de magia y aguante.</p>
                        <p>2.- Daño concentrado. <br/> 
                        No quita la vida en sí, sino que reduce el limite total de vida es decir un veneno con 20 puntos de daño concentrado y enemigo de 100/100 puntos de salud. El enemigo se quedará con 80/80 de salud.</p>
                        <p>3.- Dañar duradero: <br/>
                        Quita un poco de vida cada segundo durante un limite de tiempo. 
                         Ejemplo: Veneno 5 puntos de daño durante 5 segundos y enemigo de 100/100 puntos de salud. Al cabo de 5 segundos la vida del enemigo será 75/100. Lo mismo con el de magia y aguante.</p>
                        <p>- Los venenos de dañar magia y aguante serán de máximo 160 más o menos. Y los de salud de 90 más o menos, pero hay un ingrediente especial llamado "Betty de rio" que te permitirá hacer pociones de dañar salud de un máximo de 160 más o menos.</p>
                        <p>- Los de dañar salud/magia/aguante concentrado tienen el limite en el 60 más o menos.</p>
                        <p>- Los venenos de Dañar salud/magia/aguante duradero quitan 32 puntos durante 10 segundo viniendo a ser 320 puntos de salud/magia/aguante por la cara. Y encima si previamente le habéis envenenado con daño al 100% la regeneración de aguante y magia, no la recuperaran durante un gran periodo de tiempo.
                        </p>
                        <p>- Venenos de Miedo y Furia escalan con perks en la rama de Ilusión para ser más efectivos.(no comprobado)</p>
                    </div>
                    <div className="col-md-6">
                        <h2>ingredientes</h2>
                        <p><strong>Betty de Rio</strong> (2.5×Magnitud): <br/>
                        Pociones de dañar salud que incluyan Betty de Rio tendran una magnitud 2.5 veces mejor que una pocion de dañar salud standard (e.g., 30 magnitude en alquimia 100). el costo en oro de la pocion tambien se ve afectado</p>
                        <p><strong>Raiz de Nirn (12.6×Valor)</strong>: Pociones de dañar salud que incluyan Raiz de Nirn tendran un valor en oro 12.6 mejor que una pocion standard, aunque la magnitud de la pocion sera la misma.</p>
                        <p><strong>Hueva de Salmón</strong>: <br/>
                        Este ingrediente es usado para crear algunas de las pociones mas caras del juego, y puede ser "cosechado" en la mansion de ... en el vivero, para esto se tienen que plantar huevas en el vivero y saldran salmones, los cuales si son matados por medio de hechizos, el salmon se cosechara con la carne y el ingrediente</p>
                    </div>
                </div>

        </div>
    )
}

export default Info