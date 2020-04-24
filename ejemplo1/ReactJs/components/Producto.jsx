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

    var p = null
    if (nombre === "Leche" && cantidad %2 === 1) {
        p = "Lleve otra es Gratis!"
    } else {
        p = null
    }   

    return (
    <div className='quarter' onClick={onClick}>
        <h2>{nombre}</h2>
        <Leyenda cantidad = {cantidad} nombre={nombre}/>    
        <p>{p}</p>
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