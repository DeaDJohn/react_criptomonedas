import React from 'react';

import imagen from './cryptomonedas.png';

import Formulario from './components/Formulario.js';


function App() {
  return (
	<div className="container">
		<div className="row">
			<div className="one-half column">
				<img src={imagen} alt="Imagen Criptomoneda" className="logotipo"/>
			</div>
			<div className="one-half column">
				<h1>Cotiza tu criptomoneda al instante</h1>
				<Formulario />
			</div>
		</div>
	</div>
  );
}

export default App;