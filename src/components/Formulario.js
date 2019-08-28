import React , {useState, useEffect} from 'react';
import axios from 'axios';

import Criptomoneda from './Criptomoneda';

function Formulario () {

    const [criptomonedas, guardarCriptomonedas] = useState([]);
    const [monedaCotizar, guardarMonedaCotizar ] = useState('');
    const [criptoCotizar, guardarCriptoCotizar] = useState('');
    const [error, guardarError] = useState(false)

    useEffect(() => {

        const consultarApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD`;

            const resultado = await axios.get(url);

            console.log(resultado.data.Data);
            // guardar el resultado en el state
            guardarCriptomonedas(resultado.data.Data);
        }

        consultarApi();
    }, []);

    // validar que el usuario rellena ambos campos
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar que los dos campos estan rellenos
        if(monedaCotizar === '' || criptoCotizar === ''){
            guardarError(true);
            return;
        }

        // pasar los datos al componente principal 
        guardarError(false);

    }
    return (
        <form onSubmit={cotizarMoneda}>
            <div className="row">
                <label>Elige tu moneda</label>
                <select 
                    className="u-full-width"
                    onChange={e => guardarMonedaCotizar(e.target.value)}
                >
                    <option value="">Elige tu moneda</option>
                    <option value="USD">Dolar</option>
                    <option value="EUR">Euros</option>
                    <option value="GBP">Libras</option>
                    <option value="MXN">Pesos mejicanos</option>
                </select>
            </div>
            <div className="row">
                <label>Elige tu criptomoneda</label>
                <select  className="u-full-width"
                    onChange={e => guardarCriptoCotizar(e.target.value)}>
                    <option value="">Elige tu criptomoneda</option>
                    {criptomonedas.map(criptomoneda => (
                        <Criptomoneda 
                            key={criptomoneda.CoinInfo.Id}
                            criptomoneda={criptomoneda} 
                        />
                    ))}
                </select>
            </div>
            <input type="submit" value="Calcular" className="button-primary u-full-width"/>
        </form>
    )
}

export default Formulario;