var memo = 0;
var lastOper;

function opera(op) {
    if (lastOper == "=") resultado.innerHTML="";
    
    resultado.innerHTML += "(" + op + nr.value + "),";
    
    if (op == "+") memo += parseFloat(nr.value);
    if (op == "-") memo -= parseFloat(nr.value);
    if (op == "x") memo *= parseFloat(nr.value);
    if (op == "/") memo /= parseFloat(nr.value);
    if (op == "=") {
        resultado.innerHTML=memo;
        memo=0;
        nr.value="";
    }
    lastOper=op;
}