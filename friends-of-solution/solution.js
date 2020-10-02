function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
    if (currentDistance >= maxDistance) return;
    visited.add(name);
    for (let value of adjacencyList[name]) {
      friendsOfRecursion(value, adjacencyList, visited, maxDistance, currentDistance + 1);
    }
  }
  function friendsOf(adjacencyList, target, distance) {
    if (target in adjacencyList) {
      let visited = new Set();
      for (let name of adjacencyList[target]) {
        friendsOfRecursion(name, adjacencyList, visited, distance, 0)
      }
      visited.delete(target);
      return Array.from(visited);
    }
  }
