// // let data = "OK";
// // // let data2 = 14;
// // function mbaye()
// // {
// //     console.log("Test :" + data );
// // }
// // mbaye();

// // Addition deux number
// // let result = 0;
// // function sum(nb1, nb2)
// // {
// //      result = nb1 + nb2;
// //     return result;
// // }

// //  result = sum(4, 2);
// // console.log(result);


// // function puissance () ;
// //  var nbr = [3, 6, 9]; 
// //  var nbr1 = [5, 10, 20];
// //  var nbr2 = [15, 30]; 
// //  {
// //     if(puissance * 3){
// //         console.log(fizz)
// //         break;
// //         else if(puissance * 5)
// //         console.log(buzz);
// //         break;
// //         else if(puissance * 3 && puissance * 5)
// //         console.log(fizzbuzz);
// //         break;
// //         default;
// //         console.log(nombre);
// //     }
// //  }

//     // let output = "";
//     // let nombre = 0;
//     // if (nombre % 3 === 0){
//     //     output += "fizz";
//     // }
//     // if (nombre % 5 === 0) {
//     //     output += "Buzz";
//     // }
//     // console.log(output || nombre);


// // les tableaux

// // var langagesProg = ['C++', 'C#', 'Ruby', 'Python'];
// // // console.log(langagesProg.indexOf('C#'));

// // var promptText = prompt('Entrez le nom d\'un langage de prog');
// // if(langagesProg.indexOf(promptText) != -1) {
// //     alert('Ton langage existe !');
// // }else {
// //     alert('ton langage n\'existe pas :\(')
// // }

// // utiliser splice
// // var langagesProg = ['C++', 'C#', 'Ruby', 'Python'];
// // console.log(langagesProg);
// // langagesProg.splice(1, 2, 'PHP', 'JS' );
// // console.log(langagesProg);

// // var langagesProg = ['C++', 'C#', 'Ruby', 'Python'];
// // console.log(langagesProg);
// // for(var i = 0; i < langagesProg.length; i++) {
// //     console.log('index =>' +i+' | valeur => '+ langagesProg[i]);
// // }

// //=================operateur==========================

// // let N = 420;
// // // N++ -> N + 1;
// // console.log(N);

// // console.log(10 <= 12);



// //================================les boucles=====================================


// // let i = 0;

// // while(i < 10)
// // {
// //     document.write("A");
// //     i++;
// // }


// // let prenoms = ['Mbaye', 'Moussa'];
// // let ages = [29, 27, 32];
// // /*On ajoutre 2 element au debut de "prenoms" et on recupere la nouvelle 
// // * du tableau renvoyee par push() dans une variable "taille"*/
// // let taille = prenoms.unshift('Modou', 'Ibrahima');
// // //On supprime le premier elment de ages et on recupere l'element supprimer

// // let del = ages.shift();

// // document.getElement = taille + 'element dans prenoms'
// // document.getElement = '"' + del +'" supprimer de ages ';


// //=====================fuisionner les tableaux(concat)===============================================
// // let prenoms = ['Mbaye', 'Moussa', 'Modu', 'Ibrahima', 'Babacar'];
// // let ages = [16, 20, 28, 27];
// // let sports = ['trail', 'Foot', 'hanball']

// // let tglobal = ages.concat(prenoms,sports);
// // document.write(tglobal);
 

// // let x = 1 - 2 - 3;
// // let y = 1- (2 - 3);
// // let z = 2 ** 3 ** 2;
// // let e = 2 % 3;

// // alert('x contient :' + x +
// //     '\ny contient :' + y + 
// //     '\nz contient :' + z +
// //     '\ne contient :' + e);


// // let x = 5;
// // let y = 10;
 
// // alert('x contient '  + x +
// //     '\ny contient ' + y +
// //     '\nLeur valeur vaut ' + (x + y));

// // alert(`x contient  ${x}
// //     y contient ${y}
// //     Leur somme vaut ${x + y}`);

// console.log(3 + 3);
// console.log("3" + "3");
// console.log("3" + 3);
// console.log(3 + + "3");
// console.log(3 + 3 - 3);
// console.log("3" + "3" - "3");

//==============numero 1===================
function calculSomme(num1, num2){
    let somme = 0;
    return somme = num1 + num2
}
let sommeCalcule = calculSomme(4,8);
console.log(sommeCalcule);

//=================numero 2=============================

function bienVenue(nomPersonne) {
    let message = "Soyez la bienvenue" + nomPersonne
    return message
}

let bienVenueMbaye = bienVenue("Mbaye")
console.log(bienVenueMbaye);







































































// function calculSomme(num1, num2) {
//     let somme = 0;
//     return somme = num1 + num2;
// }
// let sommeCalcule = calculSomme(5, 2);
// console.log(sommeCalcule);