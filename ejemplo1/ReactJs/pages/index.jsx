import Carrito from '../components/Carrito'
import Producto from '../components/Producto'
import Encabezado from '../components/Encabezado'
import { useState } from 'react'
const listaProductosInicial = [
  {
    nombre: 'Leche',
    cantidad: 0,
    color: 'darkred'
  }, {
    nombre: 'Fideos',
    cantidad: 0,
    color: 'blueviolet'
  }, {
    nombre: 'Arroz',
    cantidad: 0,
    color: 'brown'
  }, {
    nombre: 'Polenta',
    cantidad: 0,
    color: 'burlywood'
  }, 
]
export default function Index() {
  const [listaProductos, setlistaProductos] = useState(listaProductosInicial)
  const aumentarCantidad = (nombre) => {
    return () => (setlistaProductos(listaProductos.map(producto=> (
      producto.nombre == nombre ?
        {...producto, cantidad: producto.cantidad+1}
        : producto
    ))))
  }
  return (
    <body>
      <sidebar>
        <Carrito listaProductos = {listaProductos} />
      </sidebar>
      <main>
        <Encabezado/>
        {listaProductos.map(producto => ( 
          <Producto 
            onClick={aumentarCantidad(producto.nombre)}
            nombre= {producto.nombre}
            cantidad={producto.cantidad}
            color={producto.color}
        />))}
      </main>
      <style jsx>{`
        body {
            width: 100vw;
            display: flex;
            flex-wrap: wrap;
        }
        sidebar {
            background-color: coral;
            width: 25vw;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        main {
            width: 75vw;
            height: 100vh;
            display: flex;
            flex-wrap: wrap;
        }
      `}</style>
    </body>
  )
}