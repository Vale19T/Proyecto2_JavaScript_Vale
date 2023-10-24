/*Formato 24h
//Creación de la función
function tiempo_calculado(){

    //Definir la variable tiempo para que almacene el new DATE o hora local del SI
    let tiempo = new Date();

    //Metodos para horas, minutos y segundos
    //Date.prototype.getHours()=HORAS
    //Date.prototype.getMinutes()=MINUTOS
    //Date.prototype.getSeconds()=SEGUNDOS

    //Definir las variables para los tres tipos de datos(hora,minutos y segundos) por separados segun lo datos locales del sistema
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    //Si el dato es inferior a 10 se le agrega el cero al lado izquierdo 
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    //Definir una variable para concatenar o unir los tres datos que se definieron arriba y unir las variables con los datos ya capturados
    //Se unen según lo que se capture del sistema local 
    let pantallaReloj = hora + ":" + minuto + ":" + segundo;

    //Guardar (el reloj) con el querySelector
    let reloj = document.querySelector(".reloj");

    //El innerHTML se utiliza para devolver la sintaxis e insertar el reloj
    reloj.innerHTML = pantallaReloj;
}

//Se llama la funcion para calcular el tiempo, se llama con el metodo setInterval y que se actualice cada mil milisegundos es decir 1 segundo
setInterval(tiempo_calculado, 1000)*/


//Formato 12h
//Creación de la función
function tiempo_calculado(){

    //Definir la variable tiempo para que almacene el new DATE o hora local del SI
    let tiempo = new Date();

    //Metodos para horas, minutos y segundos
    //Date.prototype.getHours()=HORAS
    //Date.prototype.getMinutes()=MINUTOS
    //Date.prototype.getSeconds()=SEGUNDOS

    //Definir las variables para los tres tipos de datos(hora,minutos y segundos) por separados segun lo datos locales del sistema
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    //Variable para el formato de 12 horas
    let am_pm = hora >= 12 ? 'PM':'AM';

    //Convierte las horas al formato 12h
    hora = hora % 12 || 12;

    //Si el dato es inferior a 10 se le agrega el cero al lado izquierdo 
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    //Crear de tiempo en el formato de 12h
    //Se unen según lo que se capture del sistema local 
    const hora_12 = `${hora}:${minuto}:${segundo}${am_pm}`;

    //Definir una variable para llamar la constante del formato de 12h
    let pantallaReloj = hora_12;

    //Guardar (el reloj) con el querySelector
    let reloj = document.querySelector(".reloj");

    //El innerHTML se utiliza para devolver la sintaxis e insertar el reloj
    reloj.innerHTML = pantallaReloj;
}

//Se llama la funcion para calcular el tiempo, se llama con el metodo setInterval y que se actualice cada mil milisegundos es decir 1 segundo
setInterval(tiempo_calculado, 1000)


