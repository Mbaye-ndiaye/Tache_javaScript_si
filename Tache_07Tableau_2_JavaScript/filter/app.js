// 2-Creer un tableau de chaine et utiliser la methode .filter()


let myTableau = ['abdou', 'Coach', 'dev', 'java']

let tableau = myTableau.filter(fonction)

 function fonction(element) {
    
    return element.length > 3;
}

console.log(tableau);