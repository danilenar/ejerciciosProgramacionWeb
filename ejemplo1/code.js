function actualizarCarrito (nombreProducto, cantidad) {
    var carritoContador = document.querySelector('#carritoContador'+nombreProducto)
    if(carritoContador)
        carritoContador.innerHTML = cantidad +' unidades de '+nombreProducto
    else {
        var parrafoProducto = document.createElement('p')
        parrafoProducto.setAttribute('id', 'carritoContador'+nombreProducto)
        var textoProducto = document.createTextNode(cantidad+' Unidades de '+nombreProducto)
        parrafoProducto.appendChild(textoProducto)
        document.querySelector('sidebar').appendChild(parrafoProducto)
    }   
}

function actualizarContador () {
    const contadorAnterior = this.querySelector('.contador')
    if(contadorAnterior) contadorAnterior.remove()
    var parrafoClickeado = document.createElement('p')
    parrafoClickeado.classList.add('contador')
    var historicoVecesClickeado = Number(this.attributes.vecesclickeado.value)
    var actualizadoVecesClickeado = historicoVecesClickeado+1
    if(historicoVecesClickeado)
        var textoClickeado = document.createTextNode(actualizadoVecesClickeado+' Unidades')
    else
        var textoClickeado = document.createTextNode('1 Unidad')
    parrafoClickeado.appendChild(textoClickeado)
    this.appendChild(parrafoClickeado)
    this.attributes.vecesclickeado.value = actualizadoVecesClickeado
    actualizarCarrito(this.attributes.id.value, actualizadoVecesClickeado)
}

document.querySelectorAll('.quarter').forEach(el => el.addEventListener('click', actualizarContador))
