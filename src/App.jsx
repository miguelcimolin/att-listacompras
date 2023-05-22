import { useState } from 'react'
import './App.css'

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
        }
        else {
          alert('Palavra invalida.')
        }
      }}
    >
      <h1>Lista de Compras</h1>
        <div className="lista">
          <ul>
            {compras.map((compra) =>(
            <li>{compra.itensLista}</li>
            ))}
          </ul>
        </div>
        <div className="container">
          <input 
          type="text" 
          placeholder='Digite aqui!'
          className="txt-input" 
          id="nome" 
          value={item.itensLista} 
          onChange={(event) => setItems({...item, itensLista: event.target.value})}
          />
          <button type="submit" className="botaoAdd">Adicionar</button>
        </div>
    </form>
  );
}
