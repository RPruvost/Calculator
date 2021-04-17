let para = document.querySelector("#para");
let calculator = document.querySelector("#calculator")
function addNumber(event) {
    let btn = event.target

    if (btn.nodeName === "BUTTON") {
        if (btn.textContent === "AC"){
        para.textContent = "0"
        }
        else if (btn.textContent === "=") {
        para.textContent = eval(para.textContent)
        }
        else if (btn.textContent === ".") {
        para.append(".")
        }
        else if (para.textContent === "0") {
        para.textContent = btn.textContent
        }
        else {
        para.append(btn.textContent)
        }
    }
}

calculator.addEventListener("click",addNumber)