function convert2(){
    var a = document.getElementById("convert").value;
    document.getElementById("converted").innerHTML = parseInt(a,2);
    
}
document.getElementById("2Btn").addEventListener("click", convert2);

function convert8(){
    var a = document.getElementById("convert").value;
    document.getElementById("converted").innerHTML = parseInt(a,8);
    
}
document.getElementById("8Btn").addEventListener("click", convert8);

function convert16(){
    var a = document.getElementById("convert").value;
    document.getElementById("converted").innerHTML = parseInt(a,16);
    
}
document.getElementById("16Btn").addEventListener("click", convert16);

function int(){
    let b = document.getElementById("int").value;
    document.getElementById("inted").innerHTML = parseInt(b);
}
document.getElementById("toInt").addEventListener("click", int);

function float(){
    let c = document.getElementById("float").value;
    document.getElementById("floated").innerHTML = parseFloat(c);
}
document.getElementById("toFloat").addEventListener("click", float);

function random(){
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;

    document.getElementById("randomized").innerHTML = Math.random() * (last - first) + first;
}
document.getElementById("toRandom").addEventListener("click", random);

function floorUp(){
    var d = document.getElementById("floor").value;
    document.getElementById("floored").innerHTML = Math.abs(Math.floor(-d));
}
document.getElementById("toFloorUp").addEventListener("click", floorUp);

function floorDown(){
    var d = document.getElementById("floor").value;
    document.getElementById("floored").innerHTML = Math.floor(d);
}
document.getElementById("toFloorDown").addEventListener("click", floorDown);


