let s = "hello I'm Kaustubh       Suresh    garud";
let q = s.split(' ');
let newS="";
q.forEach(element => {
    // console.log(element[0])
    if (element[0] != undefined){
        newS = newS + element + " ";
    }
});
console.log(newS);