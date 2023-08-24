import React from "react";
import { useParams } from "react-router-dom";


const productos=[
    {id:1, nombre:'Porducto 1', descripcion:'descripción producto 1'},
    {id:2, nombre:'Porducto 2', descripcion:'descripción producto 2'},
    {id:3, nombre:'Porducto 3', descripcion:'descripción producto 3'},
]
function MostrarProducto(){
    const {id}=useParams();  
    const producto =productos.find(item=>item.id === parseInt(id));
    /*parseInt convierte el valor del id, q es por defecto una cadena, en entero*/
    return(
        <>
        <h1>Mostrar Producto {id}</h1>
        <h2>{producto.nombre}</h2>
        <h3>{producto.descripcion}</h3>
    
        </>
   )
}

export default MostrarProducto;