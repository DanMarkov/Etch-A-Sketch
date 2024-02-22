let container = document.createElement('div');
container.classList.add("container");

document.body.append(container);

let button = document.createElement("button");
button.textContent = "CLICK ME!";
document.body.insertBefore(button, container);

function randomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return rgb = "rgb(" + r + " " + g + " " + b + ")";
}



button.addEventListener("click", () => {
    textContent = +prompt("Create a new canvas", 64);

    grid = document.createElement("div");
    grid.classList.add("grid");
    grid.classList.add("row");

    if (textContent === 0) {
        exit;
    } else if (!Number(textContent)) {
        alert("Enter number, please...");
    } else if (textContent > 100) {
        alert("Your number is too high");
    } else {
        grid.style.backgroundColor = randomColor();
        grid.textContent = `${textContent}`;
        grid.style.width = `${textContent}px`;
        grid.style.height = `${textContent}px`;
        grid.style.lineHeight = `${textContent}px`;
        container.appendChild(grid);
    }

    
    if (document.querySelectorAll(".grid").length > 1) {
        container.removeChild(container.firstElementChild);
    }


    grid.addEventListener("mouseenter", (e) => {
        
        e.target.style.backgroundColor = randomColor();

    }, false);

    grid.addEventListener("mouseleave", (e) => {

        e.target.style.backgroundColor = randomColor();

    }, false);

    console.log(randomColor())
});



// let divs = [];

// for (let i = 1; i < 5; i++) {
//     divs[i] = document.createElement('div');
//     divs[i].classList.add("grid");
//     divs[i].classList.add(`row-${[i]}`);
//     divs[i].textContent = `Contents of ${[i]} row`;
//     container.appendChild(divs[i]);

    // container.addEventListener("mouseover", (e) => {
        
    //     e.target.style.backgroundColor = "chocolate";

    // }, false);

    // container.addEventListener("mouseout", (e) => {

    //     e.target.style.backgroundColor = "";

    // }, false);
// }

