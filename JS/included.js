


const includeHead = () => {
    let head = document.head;
    let boot = document.createElement("link");
    boot.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
    boot.setAttribute("rel", "stylesheet");
    boot.setAttribute("integrity", "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH");
    boot.setAttribute("crossorigin", "anonymous");

    head.appendChild(boot);
}

const includeNavBar = () => {
    fetch("snippets/navbar.html")
    .then(response => {
        return response.text();
    })
    .then(text => {
        document.querySelector("header").innerHTML = text;
    });
}



const init = () => {
    includeHead();
    includeNavBar();
}

// window.onload = init;