const createBoard = () => {
  return [
    [null, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['A', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['B', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['C', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['D', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['E', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['F', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['G', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['H', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['I', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['J', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
  ];
};

const createOpponentBoard = () => {
  return [
    [null, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['A', [-1, false], [-1, false], [-1, false], [-1, false], [-1, false], [0, false], [0, false], [0, false], [0, false], [-1, false]],
    ['B', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [-1, false]],
    ['C', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [-1, false]],
    ['D', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [-1, false]],
    ['E', [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [-1, false]],
    ['F', [-1, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['G', [-1, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['H', [-1, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['I', [-1, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false], [0, false]],
    ['J', [-1, false], [0, false], [0, false], [0, false], [0, false], [-1, false], [-1, false], [-1, false], [-1, false], [-1, false]],
  ];
}

export {
  createBoard,
  createOpponentBoard,
};
