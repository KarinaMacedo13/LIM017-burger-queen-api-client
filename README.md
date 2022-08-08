# 🍔 Burger Queen 🍔
![burguer](https://user-images.githubusercontent.com/98657256/183513556-4c732aa1-e56c-4c26-baae-d3d88f6d397e.png)

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Desarrollo del proyecto](#3-desarrollo-del-proyecto)
* [4. Resultado final](#4-resultado-final)
* [5. Tecnologías del proyecto](#5-tecnologías-del-proyecto)
* [6. Creadoras](#6-creadoras)

***

## 1. Preámbulo

Este proyecto consiste en la creación de una interfaz web para un restaurante, el cual hemos llamado: "Burger Queen". El objetivo de este proyecto es el uso del framework Angular que permita mantener la interfaz y consumir una API, es decir cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un producto a un pedido, la interfaz debe actualizar la lista del pedido y el total).

🍔 **Plataforma Web:**
[BurqerQueen](https://burgerqueen22.netlify.app/)

Para probar más del proyecto:
- **Administrador:**
*Correo:* admin@burguerqueen.com
*Contraseña:* 123456
- **Cocinero:**
*Correo:* cocinero@burguerqueen.com
*Contraseña:* 123456
- **Mesero:**
*Correo:* mesero@burguerqueen.com
*Contraseña:* 123456

## 2. Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita un
sistema a través del cual puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

Este proyecto tiene dos áreas: interfaz (cliente) y API (servidor). Nuestra
clienta nos ha solicitado desarrollar la interfaz que se integre con la API
que otro equipo de desarrolladoras está trabajando simultáneamente

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Esta es la información que tenemos dxl clientx:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestrxs clientxs.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural    |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> Nuestrxs clientxs son bastante indecisos, por lo que es muy común que cambien
> el pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. La usuaria debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

Además la clienta nos ha dado un [link a la documentación](https://laboratoria.github.io/burger-queen-api/)
que especifica el comportamiento esperado de la API HTTP que deberás consumir.
Ahí puedes encontrar todos los detalles de los _endpoints_, como por ejemplo
qué parámetros esperan, qué deben responder, etc.
## 3. Desarrollo del proyecto
### 3.1 📝Historias de usuario
#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

***
#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

***
#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.

***
#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

***

## 4. Resultado final
**Vista del Administrador:**
<img src="src/assets/administrador.gif" alt="" />

**Vista del Cocinero:**
<img src="src/assets/cocinero.gif" alt="" />

**Vista del Mesero:**
<img src="src/assets/mesero.gif" alt="" />

## 5. Tecnologías del proyecto
- Angular
- TypeScript
- JavaScript
- HTML
- CSS / SCSS
- Bootstrap
- Jasmine
- Karma
- Firebase
- Git and GitHub

## 6. Creadoras
📍[Karina Macedo ](https://github.com/KarinaMacedo13 "Karina Macedo ")
📍[Jammie Hurtado](https://github.com/Emmigumi "Jammie Hurtado")