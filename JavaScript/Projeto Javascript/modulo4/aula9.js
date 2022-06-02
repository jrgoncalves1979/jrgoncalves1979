//datas
//let d = new Date();

//console.log(d);
//Padrão retorna Fri Dec 10 2021 15:46:59 GMT-0300 (Horário Padrão de Brasília)





//console.log(d.toDateString());
//Fri Dec 10 2021
//retorna uma data mais resumida






//console.log(d.toUTCString());
/*
Fri, 10 Dec 2021 18:42:25 GMT
retorna como horário oficial de Greenwich-GMT
*/






//console.log(d.toString());
//o mesmo de colocar só o console.log(d); Fri Dec 10 2021 15:53:32 GMT-0300 (Horário Padrão de Brasília)







//passando a data por parametro
//let d = new Date(2021, 0, 7, 15, 00, 07);
//console.log(d);
/*
Esse formato segue a segunte regra dentro do parenteses:
ano, mês que no JavaScript começa no zero, dia, hora, minuto, segundo 
*/

//Outra forma de fazer:
//let d = new Date('2021-01-07 15:42:17');
//console.log(d);
//formato dateString 






//Prestar atenção quanto ao meses que no JavaScript começa do zero
let d = new Date(2022, 2); //MARÇO(mês 3) aqui é 2 porque começa do zero
console.log(d);



















