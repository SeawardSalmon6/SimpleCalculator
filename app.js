const calcScreen = document.getElementById('calc-screen');
const keys = document.querySelectorAll(".key");

for(let el of keys)
    el.addEventListener("click", event => { writeOnScreen(el.textContent) });

function writeOnScreen(val) {
    let valOnScreen = calcScreen.textContent;
    switch(val) {
        case "X":
        case "x":
            calcScreen.textContent += "*";
            break;

        case "C":
            calcScreen.textContent = "";
            break;

        case "<<":
            calcScreen.textContent = valOnScreen.substring(0, valOnScreen.length - 1);
            break;

        case "=":
            if(!valOnScreen == "") calcScreen.textContent = eval(valOnScreen);
            else calcScreen.textContent = "No data to evaluate";
            break;

        default:
            calcScreen.textContent += val;
            break;
    }
}