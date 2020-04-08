export default ({cantidad, nombre, color, onClick}) => {
    const Leyenda = ({cantidad, nombre}) => {
        switch (cantidad) {
            case 0:
                return (<p></p>)
            case 1:
                return  (<p>1 unidad</p>) 
            default:
                return (<p>{cantidad} unidades</p>)
        }
    }
    return (
    <div className='quarter' onClick={onClick}>
        <h2>{nombre}</h2>
        <Leyenda cantidad = {cantidad} nombre={nombre}/>    
        <style jsx>{`
            .quarter {
                width: 40%;
                height: 50vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 5%;
                background-color: ${color};
            }
            h2 {
                color: aliceblue;
            }
      `}</style>
    </div>
)}