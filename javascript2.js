const minKnightMoves = function (x, y) {
    let direction = [
      [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1],
    ];
    let seen = new Set();
    let queue = [[0, 0]];
    let steps = 0;
  
    while (queue.length) {
      let next = [];
      while (queue.length) {
          let current = queue.shift();
          let currentX = current[0];
          let currentY = current[1];
  
        if (currentX === x && currentY === y) return steps;
  
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
  
  console.log(minKnightMoves(5, 0));