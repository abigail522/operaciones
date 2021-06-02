let x = 5
let y =2
let resultado = x+y;
document.getElementById("demo").innerHTML = resultado
console.log(resultado);

/*asignacion*/
let a =10;
a +=5;
document.getElementById("demo2").innerHTML = a;
console.log(a);

let txt1="Abigail ";
let txt2="Brufau";
document.getElementById("demo3").innerHTML = txt1 + txt2;

let j = 5+5 ;
let k = "5"+5;
let resultado2 = "Hello"+5;
document.getElementById("demo4").innerHTML = j + "<br>" + k + "<br>" + resultado2;
console.log(j);
console.log( k);
console.log(typeof resultado2);