//condicion if else

var score = 10;

if (score ==10){
    console.log("excellent");
}else if(score<10 && score>=7){
    console.log("aprobado");
}else if(score>=0&&score<7){
    console.log("no aprobado");
}else{
    console.log("valor no reconocido");
}

/*Tu programa debe leer una variable llamada "dayNumber" e imprimir (con console.log) el día correspondiente de la semana, donde 0 es domingo y 6 es sábado.
Para cualesquiera otros valores, tu programa debe imprimir "Número de día inválido". no repositorio
0 domingo
1 lunes
2 martes
3 miercoles
4 jueves
5 viernes
6 sabado
*/

var dayNumber = 8;

if (dayNumber == 0) {
console.log("domingo");
}else if (dayNumber==1){
    console.log("lunes");
}else if(dayNumber ==2){
    console.log("martes");
} else if(dayNumber==3){
    console.log("miércoles");
}else if(dayNumber==4){
    console.log("jueves");
}else if(dayNumber==5){
    console.log("viernes");
}else if(dayNumber==6){
    console.log("sábado");
}else{
    console.log("fuera de rango");
}

//instruccion switch

var dayNumber = "1";

switch (dayNumber) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    default:
        console.log("no me se los demas dias");
}

//actv con prompt y alert
//0-6 dia de numero pedir con prompt y enseñar con alert

var dayNumber = 1;
var dayNumber= parseInt(prompt("Escoge un día Lu1 Ma2 Mier3 Juev4 Vier5 Sab6 Dom0"));
switch (dayNumber) {
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
            alert("Jueves");
            break;
    case 5:
            alert("Viernes");
            break;
    case 6:
            alert("Sábado");
            break;
    case 0:
                alert("Domingo");
                break;
    default:
        alert("fuera de rango");
}