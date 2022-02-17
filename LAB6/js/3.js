function getName(){
    let n = document.getElementById("fname").value;
    document.getElementById("display").innerHTML = n;
}
document.getElementById("btn").addEventListener("click", getName);