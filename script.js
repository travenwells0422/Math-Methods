// Max Method with button
let main = document.querySelector("main");

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
    main.append(h2Element);

    h2Element.innerText = `There are ${count} counts of the number ${minMath} in this array.`;
}
