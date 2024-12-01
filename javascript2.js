const minKnightMoves = function (startX, startY, endX, endY) {
    let direction = [
      [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1],
    ];
    let seen = new Set();
    let queue = [[startX, startY]];
    let steps = 0;
  
    while (queue.length) {
      let next = [];
      while (queue.length) {
          let current = queue.shift();
          let currentX = current[0];
          let currentY = current[1];
  
        // if (currentX === endX && currentY === endY) return steps;
        if (currentX === endX && currentY === endY) {
          console.log(steps);
          const minMovesStarting = document.querySelector('.min-move-starting');
          minMovesStarting.textContent = `Starting at [${startX}, ${startY}] and ending at [${endX}, ${endY}].`
          const minMovesSteps = document.querySelector('.min-move-steps');
          minMovesSteps.textContent = `It will take the Knight ${steps} steps.`;
          return
        }
  
        for (let d of direction) {
          let nextX = currentX + d[0];
          let nextY = currentY + d[1];
  
          if (!seen.has([`${nextX},${nextY}`])) {
            seen.add(`${nextX},${nextY}`);
            next.push([nextX, nextY]);
          }
        }
      }
      steps++;
      queue = next;
    }
  };

const minMovesButton = document.querySelector('.min-moves-button');
// const settingsForm = document.querySelector('.settings-form');

minMovesButton.addEventListener('click', () => {
  let startingX = Number(settingsForm[0].value)
  let startingY = Number(settingsForm[1].value)
  let endingX = Number(settingsForm[2].value)
  let endingY = Number(settingsForm[3].value)
  console.log(startingX, startingY, endingX, endingY);
  minKnightMoves(startingX, startingY, endingX, endingY)
  // console.log(minKnightMoves(1, 2, 2, 4));
});
  
  // console.log(minKnightMoves(5, 0));