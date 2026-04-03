let interval;

function start() {

    let boxes = document.querySelectorAll(".box");

    interval = setInterval(() => {

        let lastClass = boxes[boxes.length - 1].classList[1];

        for (let i = boxes.length - 1; i > 0; i--) {
            boxes[i].classList.remove(boxes[i].classList[1]);
            boxes[i].classList.add(boxes[i - 1].classList[1]);
        }

        boxes[0].classList.remove(boxes[0].classList[1]);
        boxes[0].classList.add(lastClass);

    }, 1000); 
}

function stop() {
    clearInterval(interval);
}