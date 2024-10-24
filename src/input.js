export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          // alert("move left");
          paddle.moveLeft();
          break;
        case "ArrowRight":
          // alert("move right");
          paddle.moveRight();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          // alert("move left");
          if (paddle.speed < 0) paddle.stop();
          break;
        case "ArrowRight":
          // alert("move right");
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
