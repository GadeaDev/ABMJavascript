
// 1.	Crear un algoritmo que recorra un array unidimensional conteniendo letras y números: [ “a”, 10, “b”, “hola”, 122, 15]
const array=["a", 10, "b", "hola", 122, 15];
let numArray=[];
let strArray=[];

// A / B
for(let i=0; i < array.length; i++){
    if (parseInt(array[i])){
        numArray=[...numArray, array[i]] ;
    }else if (!parseInt(array[i])){ 
        strArray=[...strArray, array[i]] ;
    }
};

//C

let mayor = Math.max(...numArray);
console.log("Dado un Arreglo de numeros y letras, se extraen los diferentes valores segun su tipo")
console.log(array);
console.log("Arreglo Numerico ");
console.log(numArray);
console.log("Arreglo de Palabras ");
console.log(strArray);
console.log("El Numero Mayor del arreglo es: " + mayor);



// 2.	Crear un algoritmo de búsqueda que verifique que: el valor let a = 10 no esté dentro del array: [ 1, 11, “a”, “b”, 123]
function buscar(numero) {
    let a = numero;
    const array = [1, 11, "a", "b", 123];

    for (let i = 0; i < array.length; i++) {
        
         if (a === array[i]) {
            console.log("El valor " + a + " existe en el arreglo");
            return;
        } else {
            console.log("Disculpe, el valor " + a + " No esta en el Arreglo");
        }
    }
    
};

 buscar(10);

// 3.	Cree un algoritmo que genere el siguiente patrón de ID aleatorio: XXXX-AAAA-BBBB-CCCC

function generarId() {

    r1 = Math.random().toString(16).slice(-4);
    r2 = Math.random().toString(16).slice(-4);
    r3 = Math.random().toString(16).slice(-4);
    r4 = Math.random().toString(16).slice(-4);
    return resp = r1 + "-" + r2 + "-" + r3 + "-" + r4;

}
let id = generarId();
console.log("El Codigo Hexadecimal asignado es: " + id.toUpperCase());

