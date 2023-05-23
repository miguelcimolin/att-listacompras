import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import '../buttonStyles.css'

export default function BotaoReset({item, setCompras, setItem}) {
    function resetaTudo() {
        if (item.itemLista.length === '') {
          alert('A lista ja esta vazia.');
        } else {
          setCompras([])};
          setItem({itemLista: ''})
      }

    return (
      <BsFillTrashFill className="icon-del" 
      onClick={(event) => resetaTudo()} />
    )
}

