import { useState } from 'react'
import './App.css'
import BotaoAdd from './components/BotaoAdd'

export default function App() {
  const [item, setItems] = useState({
    itensLista: ''
  });

  const [compras, setCompras] = useState([]);

  return (
    <form
      action="#"
      method="post"
      onSubmit={(event) => { 
        if (item.itensLista != ''){
          event.preventDefault();
          setCompras([...compras, item]);

          setTimeout(function() {
            let scrollAutomatico = rolagem.value
            scrollAutomatico.scrollTop = scrollAutomatico.scrollHeight;
        })}
        else {
          alert('Palavra invalida.')
        }
      }}
    >
      <div className="container">
        <h1>Lista de Compras</h1>
          <div className="lista">
            <ul>
              {compras.map((compra) =>(
              <li>{compra.itensLista}</li>
              ))}
            </ul>
          </div>
          <div>
            <input 
            type="text" 
            placeholder='Digite aqui!'
            className="txt-input" 
            id="nome" 
            value={item.itensLista} 
            onChange={(event) => setItems({...item, itensLista: event.target.value})}
            />
            <BotaoAdd />
          </div>
        </div>
    </form>
  );
}
