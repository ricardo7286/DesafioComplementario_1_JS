//Saludo con un simple alert
alert("Hola muy buen dia.\nMi nombre es Ricardo Hernandez Gomez\nBienvenid@ a mi primer desafio complementario")
//prompt para la variable del nombre del usuario
let nombre = prompt("Vamos conociendo un poco mas de ti; si estas de acuerdo a continuacion ingresa tu nombre")
//prompt para la variable de la edad del usuario
let edad = prompt("Que te parece si tambien ingresas tu edad (años cumplidos)")
//alert concatenando las variables nombre y edad con un texto amigable
alert("Wow " + nombre + " tienes " + edad + " años de pura sabiduria.\nEs por ello que te invito a resolver el siguiente enigma de la humanidad")
//prompt con ciclo para obtener una salida true o false en cada respuesta ingresada
let pregunta  = prompt("Que fue primero, el huevo o la gallina?");
//en while la palabra de salida del bucle es huevo
while (pregunta != "huevo") {
    //cualquier otro string introducido alerta al usuario concatenando su nombre y la respuesta a la pregunta
    alert("Upss " + nombre + ", " + pregunta + " No es la respuesta correcta");
    //bucle continuo al no ingresar la respuesta correcta
    pregunta = prompt("Vamos " + nombre + " no te desanimes e intentalo de nuevo \nQue fue primero, el huevo o la gallina?");
}
//alert con la respuesta correcta
alert("Excelente " + nombre + " " + pregunta + " es la respuesta correcta. \nSi te interesa saber mas haz clic en aceptar");
//alert con mas info sobre la ciencia detras del enigma del huevo o la gallina
