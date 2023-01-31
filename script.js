// Max Method with button
let main = document.querySelector("main");
main.style.marginTop = "20px";
main.style.textAlign = "center";

const maxButton = document.createElement("button");
maxButton.id = "maxButton";
maxButton.innerText = "Max Method";
main.append(maxButton);

document.querySelector("#maxButton").addEventListener("click", maxOnClick);

function maxOnClick() {
    const array = [1, 2, 3, 1, 4, 4, 5, 1, 1, 5, 5, 5];
    const maxMath = Math.max(...array);

    let count = 0;

    for (maxNumber of array) {
        if (maxNumber == maxMath) {
            count++;
        }
    }

    const h2Element = document.createElement("h2");
    h2Element.style.padding = "5px";
    h2Element.style.textAlign = "center";
    h2Element.style.background = "green";
    h2Element.style.borderStyle = "solid";
    h2Element.style.borderWidth = "thick";
    h2Element.style.borderRadius = "4rem";
    main.append(h2Element);

    h2Element.innerText = `There are ${count} counts of the number ${maxMath} in this array.`;
}

// Min Method with button
const minButton = document.createElement("button");
minButton.innerText = "Min Button";
minButton.id = "minButton";
main.append(minButton);

document.querySelector("#minButton").addEventListener("click", minOnClick);

function minOnClick() {
    const array = [-10, -10, -10, 0, 0, 1, 2, 3, 4, 5];
    const minMath = Math.min(...array);

    let count = 0;

    for (minNumber of array) {
        if (minNumber == minMath) {
            count++;
        }
    }

    const h2Element = document.createElement("h2");
    h2Element.style.textAlign = "center";
    h2Element.style.padding = "5px";
    h2Element.style.background = "yellow";
    h2Element.style.borderStyle = "solid";
    h2Element.style.borderWidth = "thick";
    h2Element.style.borderRadius = "4rem";
    main.append(h2Element);

    h2Element.innerText = `There are ${count} counts of the number ${minMath} in this array.`;
}

// Inline - Styling
const body = document.querySelector("body");
body.style.padding = "20px";
body.style.backgroundColor = "gray";

const header = document.querySelector("header");
header.style.height = "80px";
header.style.background = "aqua";
header.style.borderStyle = "solid";
header.style.borderWidth = "thick";
header.style.borderRadius = "1rem";
header.style.textAlign = "center";
