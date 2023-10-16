let tab1 = [2, 4, 8, -2 ,-9];

let tab2 = [6, -7, 8, -9, 10];

let tab3 = [];
// recopier les nombres positifs vers tab3
tab3 = tab1.filter(num => num > 0);

//

for(let i = 0; i < tab2.length; i++) {
    if(tab2[i] < 0 || tab2[i] > 0){
        tab2[i] = 0;
    }
}


console.log(tab2);
console.log(tab3);