function knightMoves(start, target) {
    const knightMoves = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
  
    function isWithinBoard(position) {
      const [x, y] = position;
      return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
  
    function bfs(start, target) {
      const queue = [[start, [start]]];
      const visited = new Set();
  
      while (queue.length > 0) {
        const [currentPos, path] = queue.shift();
        const [currentX, currentY] = currentPos;
  
        if (currentX === target[0] && currentY === target[1]) {
          return path;
        }
  
        visited.add(`${currentX},${currentY}`);
  
        for (let [dx, dy] of knightMoves) {
          const newX = currentX + dx;
          const newY = currentY + dy;
          const newPos = [newX, newY];
  
          if (isWithinBoard(newPos) && !visited.has(`${newX},${newY}`)) {
            queue.push([newPos, [...path, newPos]]);
          }
        }
      }
  
      return null; 
    }
  
    const path = bfs(start, target);
  
    if (path) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      for (let step of path) {
        console.log(step);
      }
    }
  }
  
  knightMoves([0, 0], [1, 2]); 
  knightMoves([0, 0], [3, 3]); 
  knightMoves([3, 3], [0, 0]); 
  knightMoves([0, 0], [7, 7]); 
  