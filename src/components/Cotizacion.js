import React from 'react'


const Cotizacion = ({ resultado }) => {

    if(Object.keys(resultado).length === 0) return null;
    
    return (
        <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">El precio es <span>{resultado.PRICE}</span></p>

            <p>El precio más alto del dia {resultado.HIGHDAY}</p>
            <p>El precio más bajo del dia {resultado.LOWDAY}</p>
            <p>Variación ultimas 24 horas {resultado.CHANGEPCT24HOUR}</p>
            <p>Ultima actualización {resultado.LASTUPDATE}</p>
        </div>
    );
}

export default Cotizacion;