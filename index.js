'use strict';


const board = [a, b, c,
               d, e, f,
               g, h, i];

const isNull = function ()

const winner = function (board) {
  if (board[0] === board[1] === board[2] ||
      board[0] === board[3] === board[6]) {
      return board[0];
    }
  else if (board[8] === board[5] === board[2] ||
           board[8] === board[7] === board[6]) {
      return board[8];
    }
  else if (board[3] === board[4] === board[5] ||
           board[1] === board[4] === board[7] ||
           board[0] === board[4] === board[8] ||
           board[2] === board[4] === board[6]) {
      return board[4];
    }
  else if (board.some(elem => elem !== null)){
      return 'Draw';
    }
  else {
    return null;
  };
};
