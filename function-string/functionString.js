/* 
Lesson menu
Functions
Function Expression and Function Constructor
Arrow Functions 
*/



/* ------Functions------------ */


/* JavaScript özelliği, belirli bir görevi gerçekleştirmek üzere 
programlanmış bir kod bloğudur.


function name(parameters){
  statements
*/
  /*
   function square(number) {
  return number * number;
}
 ➤ Kare işlevi, sayı adı verilen bir parametre alır. İşlev, işlevin parametresinin (yani sayının) kendisiyle çarpılarak döndürülmesini söyleyen bir ifadeden oluşur.RETURN ifadesi, function tarafından döndürülen değeri belirtir.

*/

/* 
➤ İlkel parametreler (sayı gibi) değerlere göre işlevlere aktarılır; değer fonksiyona iletilir, ancak fonksiyon parametrenin değerini değiştirirse bu ayarlama global olarak veya çağıran fonksiyonda ifade edilmez
*/

/* ------Calling a Function------ */

/* 
➤ İşlev içindeki kod, işlev yalnızca bir kod satırı ile çağrıldığında yürütülür.
*/

/* 
Example

function square(number) {
  return number * number;
}

var res = square(5);   //calling a function

console.log (res);  
Output:

25
*/
/* --------Function Expression and Function Constructor-------- */
/* ------Function Expression---- */

/* 
➤ Bir JavaScript fonksiyonunu bir fonksiyon ifadesi kullanarak da tanımlayabiliriz.
➤ Bir işlev ifadesi, bir işlev ifadesine çok benzer ve hemen hemen aynı sözdizimine sahiptir.
➤ Bir işlev ifadesi ile bir işlev ifadesi arasındaki temel fark, işlev ifadelerinde anonim işlevler oluşturmak için atlanabilen işlev adıdır.

Example

var square = function (number) {return number * number};
var res = square(6);   //calling a function

console.log (res); 
Output:

36
----------------------------------------------------------------
Example

var area = function (num1, num2) {return num1 * num2};
var res = area(5, 6);   //calling a function

console.log (res); 
Output:

30
*/




/* -----Function Constructor------ */
/* 
➤ Bir JavaScript fonksiyonunu bir fonksiyon kurucusu kullanarak da tanımlayabiliriz.

Example

const square = new Function("number", "return number * number");

console.log(square(3));
Output:

9

*/

/* 
❗ Uyarı : Aslında işlev yapıcısını kullanmak zorunda değilsiniz. Çoğu zaman, kod hızınız ve beklenmedik hatalar için JavaScript'te new anahtar kelimeyi kullanmaktan kaçınmalısınız.

*/

/* -------Arrow Functions--------- */

/* 
➤ JavaScript'e ES6 ile eklenen ok işlevi, işlev ifadelerini yazmak için kısa bir sözdizimidir.
*/

/* 
// ES5  Regular Function
var x = function(x, y) {
  return x * y;
}

// ES6  Arrow Function
const x = (x, y) => x * y;
Example

const multi = (x, y) => x * y; 
console.log(multi(3, 5));
Output:

15
*/




/* let stu = "mustafa";

function sayHi(studentsName) {
  console.log(`welcome ${studentsName}`);
    
}
sayHi(stu);
console.log(stu); */


/* sayHi("eyup") */

/* let student = ["eyup","talha","guzide","murat","deniz","fadime"] */

/* function sayHi1(stuName) {
  for (let i = 0; i < stuName.length; i++) {
    console.log(`Welcome ${stuName[i]}`);
    
  }
  
}
sayHi1(student) */


/* function sayHi1(stuName) {
  let s = 
  for (let i = 0; i < stuName.length; i++) {
    console.log(`Welcome ${stuName[i]}`);
    
  }
  
}
sayHi1(student)
 */
/* function sum() {
  let sum =0;
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    sum  += arguments[i]
    
    
  }
  return sum;
  
}
console.log(sum1(10,5));
console.log(sum(1,2,3,4,5,6)); */
// argument default tanımlı yazmassak argument tanımlı olur
/* function sum(a,b ,...others) {
  let sum =0;
  console.log(others);
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    sum  += arguments[i]
    
    
  }
  return sum;
  
}
/* console.log(sum1(10,5)); */
/* console.log(sum1(1,2,3));  */
//ilk ikisini ayrı bir işlem yaparken kullanılırısıız

/* function sum1(tax,...list) {
  let sum =0;
 
  for (let i = 0; i < list.length; i++) {
    sum  += list[i] +list[i] * tax;
    
    
  }
  return sum;
  
}

let s =sum1(0.18,10,10,10)
console.log(sum1(0.18,10,10,10).toFixed(2)); */// toFixed() . dan sonra 2 basmak

 //function bolme
/* function bolme(num1,num2) {
  if (num2==0) {
    return "zero division error"

  }
  else{
    return  num1 / num2
  }
  
}
console.log(bolme(12,2)); */



/* function bolme(num1,num2) {
  if (num2==0)
   return "zero division error"
   return  num1 / num2
  } */
  
//turnarry gösterimi

/* function bolme(num1,num2) {
    return num2 ? num1 / num2 :"zero division error"
}
console.log(bolme(12,2)); */


//num2 ? num1/num2 ifadesi true ise bir değilse 2 dönderir


//kendi kendini çağıran fonksiyonlar pascal number gibi recursev fonksiyonlar


/* function pascalNumber1(n) {
  let sum = 0;
  for (let i = 0; i < n+1; i++) {
    sum += i
    
  }
  return sum
}
console.log(pascalNumber1(6));

function pascalNumber2(n) {
  return (n*(n+1)/2)
}
console.log(pascalNumber2(6));
//recursevi yazımı
// çıkış yolunu belrtmek şart. 
function pascalNumber3(n) {
if (n===1) return 1;
return n + pascalNumber3(n-1)
  
}
console.log(pascalNumber3(1));
 */


// arrow fonksiyon tanımlama yönttemi

/* const multi = (x, y) => x * y; 
console.log(multi(3, 5));
 
let ali =(a) => a + 100;

let ne = (a,b) => a * b 
console.log(ne(100,100));  */ 

 
