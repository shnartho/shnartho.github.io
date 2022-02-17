
const ctrlElement = "white";
const colors = ["white", "#f6b73c", "green", "magenta", "orange"];

//---------------

var oneTime = true;
function checkConfirm() {
    if (oneTime && confirm("Do you want to play the Game?")) {
       letsPlay();
    }
}

var points;
function letsPlay() {   
        points = 0;
        oneTime = false;
        appendChildDiv();
}

const height = 60;
const width = 50;
function appendChildDiv() {
    randomPosition = [];
    for (var j = 0; j < 5; j++) {
        const childDiv = document.createElement("div");
        childDiv.setAttribute("id", colors[j]);


        
        do {
            var x = Math.round(Math.random() * (700 - width));
            var y = Math.round(Math.random() * (350 - height));
        } while (overlap(x, y, randomPosition));
        randomPosition.push([x, y]);
        
        
        childDiv.setAttribute(
            "style",
            "height: " + height + "px; " +
            " width: " + width + "px; " +
            " border:1px solid red; " +
            " background-color: " + colors[j] + ";" +
            " position: absolute; " +
            " left: " + x + "px; " +
            " top: " + y + "px; "
        );


        (document.getElementById("mainDiv")).append(childDiv);
        childDiv.addEventListener("click", function () { removeChildDiv(childDiv); });

    }
}

//----------
var removeId = null;
var attempt = false;
function removeChildDiv(element) {
    if ((element.getAttribute("id") == ctrlElement && window.event.ctrlKey) || (element.getAttribute("id") != ctrlElement && !window.event.ctrlKey)) {
        removeId = element.getAttribute("id");
        element.remove();
        points += 1;
        document.getElementById("pointsId").innerHTML = "POINTS: " + points;
        attempt = true;
    }
}
function inputAlphabet() {
    if (attempt && (document.getElementById("inputId").value).toUpperCase() ==
        removeId[0].toUpperCase()) {
        points += 1;
        document.getElementById("pointsId").innerHTML = "POINTS: " + points;


        if (points == 9) {
            document.getElementById("pointsId").innerHTML = "POINTS: " + points + "<br/>" +"<span class='notbold'><i>Congratulations, You have reached maximum points!!</i></span>";
        }
    }
    document.getElementById("inputId").value = "";
    attempt = false;
}

//------------

function overlap(x, y, randomPositions) {
    for (var i = 0; i < randomPositions.length; i++) {
        if ((x >= randomPositions[i][0] && x <= randomPositions[i][0] + width 
            && y >= randomPositions[i][1] && y <= randomPositions[i][1] + height)) {
            return true;
        }else if (x + width >= randomPositions[i][0] && x + width <= randomPositions[i][0] +
             width && y >= randomPositions[i][1] && y <= randomPositions[i][1] + height) {
            return true;
        }else if (x >= randomPositions[i][0] && x <= randomPositions[i][0] + width && y 
            + height >= randomPositions[i][1] && y + height <= randomPositions[i][1] + height) {
            return true;
        }else if (x + width >= randomPositions[i][0] && x + width <= randomPositions[i][0]+width &&
             y + height >= randomPositions[i][1] && y + height <= randomPositions[i][1] + height) {
            return true;
        }
    }
    return false;
}