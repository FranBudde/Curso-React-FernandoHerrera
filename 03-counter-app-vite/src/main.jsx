//Necesitamos estos dos import para renderizar nuestra aplicacion
// <<------------------------------------------>>
import React from 'react'; // escribiendo imr importando rapidamente REACT
import ReactDom from 'react-dom/client';

import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterAPP } from './CountertApp';

import './styles.css' // estilos globales
// <<------------------------------------------>>
//Esto es un function component:



// el root lo saca del archivo index.hmtl que tiene un div con un id root
// esta parte de abajo es para renderizar
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp name='guille' message='puto' /> */}
        <CounterAPP value={ 100 }/>
    </React.StrictMode>
);


