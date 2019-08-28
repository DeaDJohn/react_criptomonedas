import React , {useEffect} from 'react';
import axios from 'axios';

function Formulario () {

    useEffect(() => {

        const consultarApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD`;

            const resultado = await axios.get(url);

            console.log(resultado);
        }

        consultarApi();
    }, []);
    return (
        <form>
            <div className="row">
                <label>Elige tu moneda</label>
                <select className="u-full-width">
                    <option value="">Elige tu moneda</option>
                    <option value="USD">Dolar</option>
                    <option value="EUR">Euros</option>
                    <option value="GBP">Libras</option>
                    <option value="MXN">Pesos mejicanos</option>
                </select>
            </div>
            <div className="row">
                <label>Elige tu criptomoneda</label>
                <select  className="u-full-width">
                    <option value=""></option>
                </select>
            </div>
        </form>
    )
}

export default Formulario;