function Node(position, path) {
  if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7) {
    return null;
  }
  return { position, path}
}

function knightMoves([x, y], [a,b]) {
  let q = [Node([x, y], [[x,y]])];
  let currentNode = q.shift();

  while (currentNode.position[0] !== a || currentNode.position[1] !== b) {
    let moves = [
      [currentNode.position[0] + 2, currentNode.position[1] - 1],
      [currentNode.position[0] + 2, currentNode.position[1] + 1],
      [currentNode.position[0] - 2, currentNode.position[1] - 1],
      [currentNode.position[0] - 2, currentNode.position[1] + 1],
      [currentNode.position[0] + 1, currentNode.position[1] - 2],
      [currentNode.position[0] + 1, currentNode.position[1] - 2],
      [currentNode.position[0] - 1, currentNode.position[1] - 2],
      [currentNode.position[0] - 1, currentNode.position[1] - 2],
    ];
    moves.forEach((move) => {
      let node = Node(move, currentNode.path.concat([move]));
      if (node) {
        q.push(node);
      }
    });
    currentNode = q.shift();
  }
  console.log(`The knight has moved in ${currentNode.path.length - 1} moves! Here is his path:`);
  currentNode.path.forEach((position) => {
    console.log(position);
    let positionElement = document.createElement('p');
    positionElement.textContent = position;
    const bodyElement = document.getElementById('positions');
    bodyElement.appendChild(positionElement);
  });
}

const settingsButton = document.querySelector('.settings-button');
const settingsForm = document.querySelector('.settings-form');

settingsButton.addEventListener('click', () => {
  let startingX = Number(settingsForm[0].value)
  let startingY = Number(settingsForm[1].value)
  let endingX = Number(settingsForm[2].value)
  let endingY = Number(settingsForm[3].value)
  console.log(typeof endingX)
  console.log(endingX);
  console.log(startingX, startingY, endingX, endingY);
  knightMoves([startingX, startingY], [endingX, endingY])
});

// knightMoves([3,3], [4,3]);
// knightMoves([0,0], [7,2]);
// knightMoves([0,0], [5, 1]);