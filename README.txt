Ingeniería de Software 2022 – Base de Datos

El proyecto consta de una API REST sobre Pokemones. En el cual mediante los diferentes Endpoints vamos a poder ver las diferentes funciones que tiene esta Api.
Se dividió el proyecto en una parte de servicios, donde hacemos las peticiones HTTP y simulamos la creación y obtención de usuario, y otra en las routes donde hacemos las funciones de estos Endpoints.
Utilizamos la pokeapi, que nos brinda gran cantidad de información para poder trabajar.


*Aclaración: Se ejecuta en el puerto 3001, debido que al momento que estábamos realizando la actividad, ese puerto estaba en uso y decidimos cambiarlo. Tener atención al ejecutar esta Api, que por default Node js, corre sus servicios en el puerto 3000.

Endpoints :

localhost:3001/  : consulto todos los Pokemones
localhost:3001/:id : consulto un Pokemon en particular. como también así podemos realizar diferentes acciones sobre este mismo Endpoint, como eliminar y actualizar algún personaje.


localhost:3001/users/login : en este endpoint simulamos un logueo, donde podemos ingresar al sitio. 
Usuario simulado: user: ingenieriasoftware  
Password: 123456
localhost:3001/users/create : en este Endpoint podemos crear un usuario y nos devuelve una respuesta, si fue creado correctamente o no. 

En el código, están comentados como fuimos llevando a cabo algunos procesos, y algunas cuestiones que se nos presentaron a la hora de trabajar con la Pokeapi y con algún otro problema que se presentó. 

Diagrama Entidad Relación.
