let container = document.createElement('div');
container.classList.add("container");

document.body.append(container);

let divs = [];

for (let i = 1; i < 5; i++) {
    divs[i] = document.createElement('div');
    divs[i].classList.add("grid");
    divs[i].classList.add(`row-${[i]}`);
    divs[i].textContent = `Contents of ${[i]} row`;
    container.appendChild(divs[i]);
}

