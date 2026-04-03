const men = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
    document.getElementById("d"),
    document.getElementById("e"),
    document.getElementById("f")
];

let queue = ["F", "A", "B", "C", "D", "E"];
let isStarted = false;
let interval = null;


function renderQueue() {
        for (let i = 0; i < men.length; i++) {
            men[i].textContent = queue[i];
        }
}

function rotateQueue() {
    if (!isStarted) return;
    queue.unshift(queue.pop());
    renderQueue();
}

function startQueue() {
    if (isStarted) {
        return;
    }
    isStarted = true;
    interval = setInterval(rotateQueue, 2000);
    document.getElementById("btn-start").style.display = "none";
    document.getElementById("btn-stop").style.display = "inline-block";
}

function stopQueue() {
    isStarted = false;

    if (interval) {
        clearInterval(interval);
        interval = null;
    }

    document.getElementById("btn-start").style.display = "inline-block";
    document.getElementById("btn-stop").style.display = "none";
}
renderQueue();

