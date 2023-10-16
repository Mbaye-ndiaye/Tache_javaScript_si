// 

 let tab1 = [9, 2, 34, 6, 27];

 let tab2 = [34, 6, 45, 12, 9];

 
 //Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2

 let tab3 = tab1.filter(number => !tab2.includes(number))

 console.log(tab3);


 //Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
 let tab4 = tab1.filter(num => tab2.includes(num))

 console.log(tab4);















































 