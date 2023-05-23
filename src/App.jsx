import { useState, useRef } from 'react'
import './App.css'
import BotaoAdd from './components/BotaoAdd/BotaoAdd'
import BotaoReset from './components/BotaoReset/BotaoReset'

export default function App() {
  const [item, setItem] = useState({
    itemLista: ''
  });

  const listaRef = useRef()

  const [compras, setCompras] = useState([]);

  return (
    <form
      action="#"
      method="post"
      onSubmit={(event) => { 
        if (item.itemLista != ''){
          event.preventDefault();
          setCompras([...compras, item]);
          setItem({itemLista: ''})

            listaRef.current.scrollTop = listaRef.current.scrollHeight;
        }    
        else {
          alert('Palavra invalida.')
        }
      }}
    >
      <div className="container">
        <h1>Lista de Compras</h1>
          <div className="lista" ref={listaRef}>
            <ul>
              {compras.map((compra) =>(
              <li>{compra.itemLista}</li>
              ))}
            </ul>
          </div>
          <div>
            <input 
            type="text" 
            placeholder='Digite aqui!'
            className="txt-input" 
            id="nome" 
            value={item.itemLista} 
            onChange={(event) => setItem({itemLista: event.target.value})}
            />
            <BotaoAdd /> 
            <BotaoReset  item={item} setCompras={setCompras} setItem={setItem}/>
          </div>
        </div>
    </form>
  );
}
