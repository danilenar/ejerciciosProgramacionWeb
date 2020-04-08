import { Fragment } from "react";

export default ({ listaProductos=[] }) => {
    const Leyenda = ({ cantidad, nombre }) => {
        switch (cantidad) {
            case 0:
                return (<p></p>)
            case 1:
                return (<p>1 unidad de {nombre}</p>)
            default:
                return (<p>{cantidad} unidades de {nombre}</p>)
        }
    }
    return (
    <Fragment>
        <h1>Carrito</h1>
        {listaProductos.map((producto, index) => (
            <Leyenda cantidad={producto.cantidad} nombre={producto.nombre}/>
        ))}
        <style jsx>{`
            h2 {
                color: aliceblue;
            }
      `}</style>
    </Fragment>
)}