'use strict';

let turn = false;  //toggles between false (player X's turn) and true (player O's turn)
let moves = 0;
let xWin = false;
let oWin = false;
let draw = false;
let xToken = 'X';
let oToken = 'O';

const board = ['', '', '', '', '', '', '', '', '']

const boardMap = ['a1', 'a2', 'a3',
                  'b1', 'b2', 'b3',
                  'c1', 'c2', 'c3'];

const resetGame = function() {
  turn = false;
  xWin = false;
  oWin = false;
  draw = false;
  for (let i = 0; i < board.length; i++) {
    board[i] = ''
  };
};

const newGame = function() {
  $('.mark').one('click', function() {
    if ($(this).children().text() === '') {
      turn ? $(this).text(xToken) : $(this).text(oToken);
      checkBoard();
      checkWin();
      turn = !turn;
      ++moves;
    };
  });
};

const checkBoard = function () {
  board[0] = $('#a1').html();
  board[1] = $('#a2').html();
  board[2] = $('#a3').html();
  board[3] = $('#b1').html();
  board[4] = $('#b2').html();
  board[5] = $('#b3').html();
  board[6] = $('#c1').html();
  board[7] = $('#c2').html();
  board[8] = $('#c3').html();
};

const checkWin = function () {
  const winner = function(cell) {
    if(cell === xToken) {
      console.log('Player X has won!')
      return xWin = true;
    }
    else if (cell === oToken) {
      console.log('Player X has won!')
      return oWin = true;
    }
  };
  //row and column win from top left cell
  if (board[0] === board[1] && board[0] === board[2] ||
      board[0] === board[3] && board[0] === board[6]) {
      return winner(board[0]);
    }
  //row and column win from bottom right cell
  else if (board[8] === board[5] && board[8] === board[2] ||
           board[8] === board[7] && board[8] === board[6]) {
      return winner(board[8]);
    }
  //row, column, and diagonal wins going through center cell
  else if (board[3] === board[4] && board[4] === board[5] ||
           board[1] === board[4] && board[4] === board[7] ||
           board[0] === board[4] && board[4] === board[8] ||
           board[2] === board[4] && board[4] === board[6]) {
      return winner(board[4]);
    }
  else if (board.some(cell => cell !== '' || moves === 9)){
      console.log('The game has ended in a draw!')
      return draw = true;
    }
  else {
    return null;
  };
};
