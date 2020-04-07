# Especificaciones de la pagina web del supermercado del señor Chow Ming
cada uno de los rectangulos de colores es un producto, al cliquear en uno de ellos:
- Se crea un contador debajo(si no existe todavia) mostrando la cantidad comprada.
- Se agrega ese producto al carrito(si no esta todavia) mostrando la cantidad comprada


# Para visualizar este ejemplo y hacer cambios en vivo

1) instalar el paquete `serve` con: 

    `npm i -g serve`

2) correr el programa yendo a la carpeta `/ejemplo1` y ejecutandolo con:

`npx serve`

3) veras una salida como la siguiente:

<img src='SalidaServe.png'></img>

Yendo a la url especificada en `Local` podras acceder a una previsualizacion en vivo de los cambios que hagas en el codigo.


# Ejercicio

- El señor Chow Ming está generoso y quiere ofrecer una promo 2x1 en leches. Puedes agregar codigo a la pagina de manera de que si la cantidad de leches compradas es impar agregue un cartel dentro del rectangulo con la leyenda '¡Llevate una más, es gratis!'.
