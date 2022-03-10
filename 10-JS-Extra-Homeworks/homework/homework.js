// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
  var result = Object.keys(objeto).map(function (key) {
          
    // Using Number() to convert key to number type
    // Using obj[key] to retrieve key value
    return [(key), objeto[key]];
});
return result;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var cont=[];                                  //inicializar el contador
  ncad=string.split('');                        //dividir la string en caracteres
  for (var i = 0; i < string.length; i++) {     //recorrer la string
    letra=ncad[i].charCodeAt();                 //pasar cada letra a código ascii
    //antes de sumarlo verificar si ya existe en cont, de no ser así inicializarlo
    cont[letra]==undefined ? cont[letra]=1 : cont[letra]++  
  }; 
  total={};                                     //para guardar el resultado
  for (var i in cont)                           //recorrer el contador
    total[String.fromCharCode(i)]=cont[i];      //pasar el caracter de ascii a string y pasarle la cantidad
  return total;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = [];
  var minusculas = [];
  var caracter = '';
  for(i=0; i<s.split('').length; i++){
    if (s[i] == s[i].toUpperCase()){
      mayusculas.push(s[i]);
    }
    else{
      minusculas.push(s[i])
    }
 }
 var respuesta = mayusculas.join("")+minusculas.join("");
 return respuesta
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var str = "The Henry Challenge is close!";
  let resultado = [];
  var strAV = str.toString().split("").reverse().join("");
  for (let i= strAV.length - 1; i >= 0; i--) {
    return resultado.push(strAV[i])
  }return resultado
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroReverse = numero.toString().split("").reverse().join("");
  if(numero == numeroReverse){
      return "Es capicua";
    }else{
      return "No es capicua"
    }  
  }

function deleteAbc(string){
  //Define una función que elimine las letras "a", "b" y "c" de la string dada 
  //y devuelva la versión modificada o la misma string, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newString = string.toString().replace("a",'').replace("b",'').replace('c','')
  return newString
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de string
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for ( var i = 0; i < arr.length; ++i) {
    for(var j = i + 1; j < arr.length; ++j){

        if(arr[i].length > arr[j].length){
            let auxiliar = arr[i];
            arr[i] = arr[j];
            arr[j] = auxiliar;
        }
    }
  }
  return arr ;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var coinciden = [];
  for ( var i = 0; i < arreglo1.length; i++ ) {
    for ( var e = 0; e < arreglo2.length; e++ ) {
        if ( arreglo1[i] === arreglo2[e] ) coinciden.push( arreglo1[i] );
    }
}
return coinciden;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

