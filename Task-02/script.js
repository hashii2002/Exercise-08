let interval;

function start() {

    let boxes = document.querySelectorAll(".box");

    interval = setInterval(() => {

        // last box color class eka ganna
        let lastClass = boxes[boxes.length - 1].classList[1];

        // backward loop ekak
        for (let i = boxes.length - 1; i > 0; i--) {
            boxes[i].classList.remove(boxes[i].classList[1]);
            boxes[i].classList.add(boxes[i - 1].classList[1]);
        }

        // first box ekata last color eka denna
        boxes[0].classList.remove(boxes[0].classList[1]);
        boxes[0].classList.add(lastClass);

    }, 1000); // speed
}

function stop() {
    clearInterval(interval);
}