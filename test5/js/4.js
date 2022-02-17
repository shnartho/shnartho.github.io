function access(){
    let years = prompt("How old are you?");

    console.log(years);
    if(years < 18){ 
        alert("You are NOT ABLE to enter this page");
        document.getElementById("access").innerHTML = "Access DENIED";
    }
    else{
        alert("Welcome");
        document.getElementById("access").innerHTML = "Access GRANTED";
    }
}
access();