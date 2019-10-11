import React from 'react';
import logo from './assets/img/logo.svg';
/* import './assets/css/App.css'; */
// SE ELIMNÓ LOS ESTILOS QUE VIENE POR DEFECTO, SE AGREGÓ BOOTSTRAP.
import './assets/css/style.scss'


// import component
import MyComponent from './components/MyComponent';


function HolaMundo(nombre){
  var presentacion = <h3>I'm { nombre }</h3>;
  return presentacion;
}

function App() {
  var nombre = `Luis Perez`;
  
  return (
    /* { alert("Hola Mundo") } */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is my first web application in React.</p>
        { HolaMundo(nombre) }
        <p>Visit my website <a className="App-link" href="https://lperezp.com" target="_blank" rel="noopener noreferrer">lperezp</a></p>
      </header>
    </div>
  );
}

export default App;
