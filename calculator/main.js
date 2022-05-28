// DISPLAY FUNCTION//

function display(value){

    document.getElementById("result").value+=value;

    return value;
}
//SOLVE FUNCTION//
 function solve(){

    let x= document.getElementById("result").value
    let y = eval(x);
    document.getElementById("result").value = y;
    return y;
 }

 //CLEAR FUNCTION//

 function clearScreen(){

    document.getElementById("result").value = ""
 }