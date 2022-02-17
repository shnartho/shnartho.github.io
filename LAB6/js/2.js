function nombre(){
    let answer = prompt("What is your mail?");

    console.log(answer); 
    document.getElementById("textName").innerHTML = "We will contact you soon:" + answer;
}

nombre();