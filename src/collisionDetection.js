export function detectCollision(ball, gameObject) {
  let bottomBall = ball.position.y + ball.size;
  let topBall = ball.position.y;
  //   let bottomBall = this.position.y + this.size;
  //   let bottomBall = this.position.y + this.size;

  let topObject = gameObject.position.y;
  let leftObject = gameObject.position.x;
  let rightObject = gameObject.position.x + gameObject.width;
  let bottomObject = gameObject.position.y + gameObject.height;

  if (
    bottomBall >= topObject &&
    topBall <= bottomObject &&
    ball.position.x >= leftObject &&
    ball.position.x + ball.size <= rightObject
  ) {
    return true;
  } else {
    return false;
  }
}
