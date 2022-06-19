let whiteTurn = true;
let move = false;
let firstTurn = true;
let id = 1;
let table = document.getElementById('myTable');
let currentPosition = 0;
let movingSquare = 0;
let previousSquareClass = 0;
let thisSquareClass = 0;
let thisSquare = 0;
let types = ['king', 'knight', 'bishop', 'rock', 'queen', 'pawn'];
let chosenPieceWhite = null;
let chosenPieceBlack = null;
let chosenTypeWhite = 0;
let chosenTypeBlack = 0;
let pawnSpecialWhite = false;
let pawnSpecialBlack = false;
let specialPawnPosition = 0;
let pieceCanMove = false;
let inTheWay = false;



for (let row = 1; row <= 8; row++) {
    let myRow = document.createElement('tr')
    row.id = 'row' + row;
    for (let column = 1; column <= 8; column++) {
        const square = document.createElement('td');
        if (row % 2 != 0 && column % 2 != 0 || row % 2 == 0 && column % 2 == 0) {
            square.className = 'white';
        } else {
            square.className = 'black';
        }
        square.id = id++;
        square.setAttribute('onclick', 'squareClick(id)')
        myRow.id = 'row' + row;
        myRow.appendChild(square);
        table.appendChild(myRow);
    }
}
for (let index = 49; index <= 56; index++) {
    const square = document.getElementById(index);
    const pawnWhite = document.createElement('div');
    pawnWhite.id = 'pawnWhite' + index;
    pawnWhite.className = 'pawn-White';
    square.appendChild(pawnWhite);
}

for (let index = 9; index <= 16; index++) {
    const square = document.getElementById(index);
    const pawnBlack = document.createElement('div');
    pawnBlack.id = 'pawnBlack' + index;
    pawnBlack.className = 'pawn-Black';
    square.appendChild(pawnBlack);
}

const rockSquare1 = document.getElementById(57);
const rockWhite1 = document.createElement('div');
rockWhite1.id = 'rockWhite' + 57;
rockWhite1.className = 'rock-White';
rockSquare1.appendChild(rockWhite1);

const rockSquare2 = document.getElementById(64);
const rockWhite2 = document.createElement('div');
rockWhite2.id = 'rockWhite' + 64;
rockWhite2.className = 'rock-White';
rockSquare2.appendChild(rockWhite2);

const rockSquare3 = document.getElementById(1);
const rockBlack1 = document.createElement('div');
rockBlack1.id = 'rockBlack' + 1;
rockBlack1.className = 'rock-black';
rockSquare3.appendChild(rockBlack1);

const rockSquare4 = document.getElementById(8);
const rockBlack2 = document.createElement('div');
rockBlack2.id = 'rockBlack' + 8;
rockBlack2.className = 'rock-black';
rockSquare4.appendChild(rockBlack2);

const bishopSquare1 = document.getElementById(59);
const bishopWhite1 = document.createElement('div');
bishopWhite1.id = 'bishopWhite' + 59;
bishopWhite1.className = 'bishop-White';
bishopSquare1.appendChild(bishopWhite1);

const bishopSquare2 = document.getElementById(62);
const bishopWhite2 = document.createElement('div');
bishopWhite2.id = 'bishopWhite' + 62;
bishopWhite2.className = 'bishop-White';
bishopSquare2.appendChild(bishopWhite2);

const bishopSquare3 = document.getElementById(3);
const bishopBlack1 = document.createElement('div');
bishopBlack1.id = 'bishopBlack' + 3;
bishopBlack1.className = 'bishop-black';
bishopSquare3.appendChild(bishopBlack1);

const bishopSquare4 = document.getElementById(6);
const bishopBlack2 = document.createElement('div');
bishopBlack2.id = 'bishopBlack' + 6;
bishopBlack2.className = 'bishop-black';
bishopSquare4.appendChild(bishopBlack2);

const knightSquare1 = document.getElementById(58);
const knightWhite1 = document.createElement('div');
knightWhite1.id = 'knightWhite' + 58;
knightWhite1.className = 'knight-White';
knightSquare1.appendChild(knightWhite1);

const knightSquare2 = document.getElementById(63);
const knightWhite2 = document.createElement('div');
knightWhite2.id = 'knightWhite' + 63;
knightWhite2.className = 'knight-White';
knightSquare2.appendChild(knightWhite2);

const knightSquare3 = document.getElementById(2);
const knightBlack1 = document.createElement('div');
knightBlack1.id = 'knightBlack' + 2;
knightBlack1.className = 'knight-black';
knightSquare3.appendChild(knightBlack1);

const knightSquare4 = document.getElementById(7);
const knightBlack2 = document.createElement('div');
knightBlack2.id = 'knightBlack' + 7;
knightBlack2.className = 'knight-black';
knightSquare4.appendChild(knightBlack2);

const queenSquare1 = document.getElementById(60);
const queenWhite = document.createElement('div');
queenWhite.id = 'queenWhite' + 60;
queenWhite.className = 'queen-White';
queenSquare1.appendChild(queenWhite);

const queenSquare2 = document.getElementById(5);
const queenBlack = document.createElement('div');
queenBlack.id = 'queenBlack' + 5;
queenBlack.className = 'queen-black';
queenSquare2.appendChild(queenBlack);

const kingSquare1 = document.getElementById(61);
const kingWhite = document.createElement('div');
kingWhite.id = 'kingWhite' + 61;
kingWhite.className = 'king-White';
kingSquare1.appendChild(kingWhite);

const kingSquare2 = document.getElementById(4);
const kingBlack = document.createElement('div');
kingBlack.id = 'kingBlack' + 4;
kingBlack.className = 'king-black';
kingSquare2.appendChild(kingBlack);


const squareClick = (position) => {
    console.log(position);
    if (!move) {
        currentPosition = position;
        const currentSquare = document.getElementById(currentPosition);
        previousSquareClass = currentSquare.className;
        if (whiteTurn) {
            checkTypeWhite(position);

        } else {
            checkTypeBlack(position);
        }
        if (chosenTypeWhite == 0 && chosenTypeBlack == 0) {
            return;
        } else {
            if (whiteTurn) {
                if (chosenPieceWhite != null) {
                    currentSquare.className = 'moving';
                }
            } else {
                if (chosenPieceBlack != null) {
                    currentSquare.className = 'moving';
                }
            }
        }
        move = !move;
    } else {
        if (whiteTurn) {
            moveMe(position, currentPosition, chosenTypeWhite);
        } else {
            moveMe(position, currentPosition, chosenTypeBlack);
        }
    }
}

const moveMe = (position, currentPosition, type) => {
    const square = document.getElementById(position);
    thisSquare = square;
    const currentSquare = document.getElementById(currentPosition);
    if (whiteTurn) {
        checkTypeBlack(position);
        const otherTypeBlack = document.getElementById(chosenTypeBlack + 'Black' + position);
        const pieceWhite = document.getElementById(type + 'White' + currentPosition);
        if (position == currentPosition || pieceWhite == null) {
            currentSquare.className = previousSquareClass;
            move = !move;
        } else {
            movePieceWhite(position, currentPosition, square, currentSquare, pieceWhite, type, otherTypeBlack);
        }
    } else {
        checkTypeWhite(position);
        const otherTypeWhite = document.getElementById(chosenTypeWhite + 'White' + position);
        const pieceBlack = document.getElementById(type + 'Black' + currentPosition);
        if (position == currentPosition || pieceBlack == null) {
            currentSquare.className = previousSquareClass;
            move = !move;
            return;
        } else {
            movePieceBlack(position, currentPosition, square, currentSquare, pieceBlack, type, otherTypeWhite);
        }
    }
}

const rockMove = (position, currentPosition, type) => {
    if (type == 'rock') {
        let x = false;
        let myColor = 'White'
        if (!whiteTurn) {
            myColor = 'Black';
        }
        if (moveStraight(position, currentPosition, type, myColor, x)) {
            return true;
        }
    }

}

const bishopMove = (position, currentPosition, type) => {
    if (type == 'bishop') {
        let x = false;
        let myColor = 'White'
        if (!whiteTurn) {
            myColor = 'Black';
        }
        if (moveDiagonally(position, currentPosition, type, myColor, x)) {
            return true;
        }
    }

}
const queenMove = (position, currentPosition, type) => {
    if (type == 'queen') {
        let x = false;
        let myColor = 'White'
        if (!whiteTurn) {
            myColor = 'Black';
        }
        if (moveStraight(position, currentPosition, type, myColor, x)) {
            return true;
        }
        if (moveDiagonally(position, currentPosition, type, myColor, x)) {
            return true;
        }
    }

}


const knightMove = (position, currentPosition, type) => {
    if (type == 'knight') {
        let thisColor = 'White';
        if (!whiteTurn) {
            thisColor = 'Black';
        }
        chosenPieceWhite = null;
        chosenPieceBlack = null;
        const knight = document.getElementById(type + thisColor + currentPosition);
        if (knight != null) {
            if (currentPosition - 6 == position || currentPosition - 10 == position ||
                currentPosition - 15 == position || currentPosition - 17 == position ||
                position - 6 == currentPosition || position - 10 == currentPosition ||
                position - 15 == currentPosition || position - 17 == currentPosition) {
                if (thisColor == 'White') {
                    checkTypeWhite(position);
                    if (chosenPieceWhite == null) {
                        return true;
                    }
                } else {

                    checkTypeBlack(position);
                    if (chosenPieceBlack == null) {
                        return true;
                    }
                }
            }
        }
    }
}

const kingMove = (position, currentPosition, type) => {
    if (type == 'king') {
        let thisColor = 'White';
        if (!whiteTurn) {
            thisColor = 'Black';
        }
        chosenPieceWhite = null;
        chosenPieceBlack = null;
        const king = document.getElementById(type + thisColor + currentPosition);
        if (king != null) {
            if (currentPosition - 9 == position || currentPosition - 8 == position ||
                currentPosition - 7 == position || currentPosition - 1 == position ||
                position - 9 == currentPosition || position - 8 == currentPosition ||
                position - 7 == currentPosition || position - 1 == currentPosition) {
                if (thisColor == 'White') {
                    checkTypeWhite(position);
                    if (chosenPieceWhite == null) {
                        return true;
                    }
                } else {
                    checkTypeBlack(position);
                    if (chosenPieceBlack == null) {
                        return true;
                    }
                }
            }
        }
    }
}

const pawnMove = (position, currentPosition, type, otherPiece) => {
    if (type == 'pawn') {
        specialPawnPosition = 0;
        if (whiteTurn) {
            const pawnWhite = document.getElementById('pawnWhite' + currentPosition);
            if (pawnWhite != null) {
                if (position == currentPosition - 8) {
                    if (otherPiece == null) {
                        return true;
                    }
                } else if (position == currentPosition - 16 && (currentPosition >= 49 && currentPosition <= 56)) {
                    chosenPieceBlack = null;
                    chosenPieceWhite = null;
                    checkTypeBlack(currentPosition - 8);
                    checkTypeWhite(currentPosition - 8);
                    const pawnWhite = document.getElementById('pawnWhite' + currentPosition);
                    if (chosenPieceBlack == null && chosenPieceWhite == null) {
                        if (otherPiece == null) {
                            pawnSpecialWhite = true;
                            specialPawnPosition = position;
                            return true;
                        }
                    }
                }
            }
        } else {
            const pawnBlack = document.getElementById('pawnBlack' + currentPosition);
            if (pawnBlack != null) {
                if (position - 8 == currentPosition) {
                    if (otherPiece == null) {
                        return true;
                    }
                } else if (position - 16 == currentPosition && (currentPosition >= 9 && currentPosition <= 16)) {
                    chosenPieceWhite = null;
                    chosenPieceBlack = null;
                    checkTypeWhite((position - 8));
                    checkTypeBlack((position - 8));
                    if (chosenPieceWhite == null && chosenPieceBlack == null) {
                        if (otherPiece == null) {
                            pawnSpecialBlack = true;
                            specialPawnPosition = position;
                            return true;
                        }
                    }
                }
            }
        }
    }

}
const pawnTake = (position, currentPosition) => {
    if (whiteTurn) {
        let a = currentPosition + 1;
        const pawnWhite = document.getElementById('pawnWhite' + currentPosition);
        if (pawnWhite != null) {
            if (position == currentPosition - 7 || position == currentPosition - 9) {
                if (pawnSpecialBlack) {
                    currentPosition++;
                    const pawnBlack1 = document.getElementById('pawnBlack' + currentPosition);
                    currentPosition--;
                    const pawnBlack2 = document.getElementById('pawnBlack' + (currentPosition - 1));
                    if (pawnBlack1 != null || pawnBlack2 != null) {
                        return true;
                    }
                }
                checkTypeBlack(position);
                if (chosenTypeBlack != 0) {
                    return true;
                }
            }
        }
    } else {
        const pawnBlack = document.getElementById('pawnBlack' + currentPosition);
        if (pawnBlack != null) {
            if (position - 7 == currentPosition || position - 9 == currentPosition) {
                if (pawnSpecialWhite) {
                    currentPosition++;
                    const pawnWhite1 = document.getElementById('pawnWhite' + currentPosition);
                    currentPosition--;
                    const pawnWhite2 = document.getElementById('pawnWhite' + (currentPosition - 1));
                    if (pawnWhite1 != null || pawnWhite2 != null) {
                        return true;
                    }
                }
                checkTypeWhite(position);
                if (chosenTypeWhite != 0) {
                    return true;
                }
            }
        }
    }
}
const checkTypeWhite = (position) => {
    chosenTypeWhite = 0;
    chosenTypeBlack = 0;
    types.forEach(typeOf => {
        const pieceWhite = document.getElementById(typeOf + 'White' + position);
        if (pieceWhite != null) {
            chosenTypeWhite = typeOf;
            chosenPieceWhite = pieceWhite;
            return typeOf;
        }
    });
}
const checkTypeBlack = (position) => {
    chosenTypeWhite = 0;
    chosenTypeBlack = 0;
    types.forEach(typeOf => {
        const pieceBlack = document.getElementById(typeOf + 'Black' + position);
        if (pieceBlack != null) {
            chosenTypeBlack = typeOf;
            chosenPieceBlack = pieceBlack;
        }
    });
}

const movePieceBlack = (position, currentPosition, square, currentSquare, pieceBlack, type, otherPiece) => {
    if (pawnTake(position, currentPosition, type)) {
        if (pawnSpecialWhite && type == 'pawn') {
            currentPosition++;
            const pawnWhite1 = document.getElementById('pawnWhite' + currentPosition);
            currentPosition--;
            const pawnWhite2 = document.getElementById('pawnWhite' + (currentPosition - 1));
            if (pawnWhite1 != null || pawnWhite2 != null) {
                const pawnWhite = document.getElementById('pawnWhite' + specialPawnPosition);
                const newSquare = document.getElementById(specialPawnPosition);
                thisSquareClass = square.className;
                currentSquare.className = previousSquareClass;
                currentSquare.removeChild(pieceBlack);
                square.appendChild(pieceBlack);
                pieceBlack.id = type + 'Black' + position;
                whiteTurn = !whiteTurn;
                move = !move;
                firstTurn = false;
                newSquare.removeChild(pawnWhite);
                pawnSpecialWhite = false;
                return;
            }
        }
        thisSquareClass = square.className;
        currentSquare.className = previousSquareClass;
        currentSquare.removeChild(pieceBlack);
        square.appendChild(pieceBlack);
        pieceBlack.id = type + 'Black' + position;
        whiteTurn = !whiteTurn;
        move = !move;
        firstTurn = false;
        square.removeChild(otherPiece);
        pawnSpecialWhite = false;
    } else if (pawnMove(position, currentPosition, type, otherPiece) ||
        rockMove(position, currentPosition, type) ||
        bishopMove(position, currentPosition, type) ||
        queenMove(position, currentPosition, type) ||
        knightMove(position, currentPosition, type)||
        kingMove(position, currentPosition, type)) {
        if (takePiece(position, currentPosition, type) && type != 'pawn') {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceBlack);
            square.appendChild(pieceBlack);
            pieceBlack.id = type + 'Black' + position;
            whiteTurn = !whiteTurn;
            move = !move;
            firstTurn = false;
            square.removeChild(otherPiece);
            pawnSpecialWhite = false;
            return;
        }
        thisSquareClass = square.className;
        currentSquare.className = previousSquareClass;
        currentSquare.removeChild(pieceBlack);
        square.appendChild(pieceBlack);
        pieceBlack.id = type + 'Black' + position;
        whiteTurn = !whiteTurn;
        move = !move;
        pawnSpecialWhite = false;
    }
}

const movePieceWhite = (position, currentPosition, square, currentSquare, pieceWhite, type, otherPiece) => {
    if (pawnTake(position, currentPosition)) {
        if (pawnSpecialBlack && type == 'pawn') {
            currentPosition++;
            const pawnBlack1 = document.getElementById('pawnBlack' + currentPosition);
            currentPosition--;
            const pawnBlack2 = document.getElementById('pawnBlack' + (currentPosition - 1));
            if (pawnBlack1 != null || pawnBlack2 != null) {
                const pawnBlack = document.getElementById('pawnBlack' + specialPawnPosition);
                const newSquare = document.getElementById(specialPawnPosition);
                thisSquareClass = square.className;
                currentSquare.className = previousSquareClass;
                currentSquare.removeChild(pieceWhite);
                square.appendChild(pieceWhite);
                pieceWhite.id = type + 'White' + position;
                whiteTurn = !whiteTurn;
                move = !move;
                firstTurn = false;
                newSquare.removeChild(pawnBlack);
                pawnSpecialBlack = false;
                return;
            }
        }
        thisSquareClass = square.className;
        currentSquare.className = previousSquareClass;
        currentSquare.removeChild(pieceWhite);
        square.appendChild(pieceWhite);
        pieceWhite.id = type + 'White' + position;
        whiteTurn = !whiteTurn;
        move = !move;
        firstTurn = false;
        square.removeChild(otherPiece);
        pawnSpecialBlack = false;

    } else if (pawnMove(position, currentPosition, type, otherPiece) ||
        rockMove(position, currentPosition, type) ||
        bishopMove(position, currentPosition, type) ||
        queenMove(position, currentPosition, type) ||
        knightMove(position, currentPosition, type)||
        kingMove(position, currentPosition, type)) {
        if (takePiece(position, currentPosition, type) && type != 'pawn') {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceWhite);
            square.appendChild(pieceWhite);
            pieceWhite.id = type + 'White' + position;
            whiteTurn = !whiteTurn;
            move = !move;
            firstTurn = false;
            square.removeChild(otherPiece);
            pawnSpecialBlack = false;
            return;
        }
        thisSquareClass = square.className;
        currentSquare.className = previousSquareClass;
        currentSquare.removeChild(pieceWhite);
        square.appendChild(pieceWhite);
        pieceWhite.id = type + 'White' + position;
        whiteTurn = !whiteTurn;
        move = !move;
        firstTurn = false;
        pawnSpecialBlack = false;
    }
}

const moveStraight = (position, currentPosition, type, color, x) => {
    let otherColor = 'White';
    if (color == 'White') {
        otherColor = 'Black';
    }
    pieceCanMove = true;
    if (type == 'rock' || type == 'queen') {
        const straightPiece = document.getElementById(type + color + currentPosition);
        if (straightPiece != null) {
            for (let index = currentPosition - 8; index >= position; index -= 8) {
                types.forEach(typeOf => {
                    const pWhite = document.getElementById(typeOf + color + index);
                    const pBlack = document.getElementById(typeOf + otherColor + index);
                    if (pWhite != null || (pBlack != null && index != position)) {
                        pieceCanMove = false;
                        return;
                    }
                });
                if (pieceCanMove && position == index) {
                    x = true;
                    break;
                }
            }
            if (x) {
                return true;
            }
            pieceCanMove = true;
            for (let index = parseInt(currentPosition) + 8; index <= position; index += 8) {
                types.forEach(typeOf => {
                    const pWhite = document.getElementById(typeOf + color + index);
                    const pBlack = document.getElementById(typeOf + otherColor + index);
                    if (pWhite != null || (pBlack != null && index != position)) {
                        pieceCanMove = false;
                        return;
                    }
                });
                if (pieceCanMove && position == index) {
                    x = true;
                    break;
                }
            }
            if (x) {
                return true;
            }
            pieceCanMove = true;
            let lastSquareLeft = 0;
            for (let index = currentPosition; index >= currentPosition - 7; index--) {
                if (index % 8 == 0) {
                    lastSquareLeft = parseInt(index) + 1;
                }
            }
            if (currentPosition % 8 == 0) {
                lastSquareLeft = currentPosition - 7;
            }
            for (let index = currentPosition - 1; index >= lastSquareLeft; index--) {
                types.forEach(typeOf => {
                    const pWhite = document.getElementById(typeOf + color + index);
                    const pBlack = document.getElementById(typeOf + otherColor + index);
                    if (pWhite != null || (pBlack != null && index != position)) {
                        pieceCanMove = false;
                        return;
                    }
                });
                if (pieceCanMove && position == index) {
                    x = true;
                    break;
                }
            }
            if (x) {
                return true;
            }
            pieceCanMove = true;
            let lastSquareRight = 0;
            for (let index = currentPosition; index <= parseInt(currentPosition) + 7; index++) {
                if (index % 8 == 0) {
                    lastSquareRight = index;
                }
            }
            for (let index = parseInt(currentPosition) + 1; index <= lastSquareRight; index++) {
                types.forEach(typeOf => {
                    const pWhite = document.getElementById(typeOf + color + index);
                    const pBlack = document.getElementById(typeOf + otherColor + index);
                    if (pWhite != null || (pBlack != null && index != position)) {
                        pieceCanMove = false;
                        return;
                    }
                });
                if (pieceCanMove && position == index) {
                    x = true;
                    break;
                }
            }
            if (x) {
                return true;
            }

        }
    }


}

const moveDiagonally = (position, currentPosition, type, color, x) => {
    pieceCanMove = true;
    let otherColor = 'White';
    if (color == 'White') {
        otherColor = 'Black';
    }
    if (type == 'queen' || type == 'bishop') {
        const pieceDiagonally = document.getElementById(type + color + currentPosition);
        if (pieceDiagonally != null) {
            let topRightSquare = 0;
            for (let index = currentPosition; index >= 2; index -= 7) {
                if (index % 8 == 0) {
                    topRightSquare = index;
                } else if (index < 8) {
                    topRightSquare = index;
                }
            }
            for (let index = currentPosition - 7; index >= topRightSquare; index -= 7) {
                types.forEach(typeOf => {
                    const pWhite = document.getElementById(typeOf + color + index);
                    const pBlack = document.getElementById(typeOf + otherColor + index);
                    if (pWhite != null || (pBlack != null && index != position)) {
                        pieceCanMove = false;
                        return;
                    }
                });
                if (pieceCanMove && position == index) {
                    x = true;
                    break;
                }
            }
            if (x) {
                return true;
            }
            pieceCanMove = true;
            let bottomLeftSquare = 0;
            for (let index = parseInt(currentPosition) + 7; index <= 63; index += 7) {
                if ((index - 1) % 8 == 0) {
                    bottomLeftSquare = index;
                } else if (index > 57) {
                    bottomLeftSquare = index;
                }
            }
            for (let index = parseInt(currentPosition) + 7; index <= bottomLeftSquare; index += 7) {
                types.forEach(typeOf => {
                    const pWhite = document.getElementById(typeOf + color + index);
                    const pBlack = document.getElementById(typeOf + otherColor + index);
                    if (pWhite != null || (pBlack != null && index != position)) {
                        pieceCanMove = false;
                        return;
                    }
                });
                if (pieceCanMove && position == index) {
                    x = true;
                    break;
                }
            }
            if (x) {
                return true;
            }
            pieceCanMove = true;
            let topLeftSquare = 0;
            for (let index = currentPosition; index >= 1; index -= 9) {
                if ((index - 1) % 8 == 0 && index != 1) {
                    topLeftSquare = index;
                } else if (index < 8) {
                    topLeftSquare = index;
                }
            }
            for (let index = currentPosition - 9; index >= topLeftSquare; index -= 9) {
                types.forEach(typeOf => {
                    const pWhite = document.getElementById(typeOf + color + index);
                    const pBlack = document.getElementById(typeOf + otherColor + index);
                    if (pWhite != null || (pBlack != null && index != position)) {
                        pieceCanMove = false;
                        return;
                    }
                });
                if (pieceCanMove && position == index) {
                    x = true;
                    break;
                }
            }
            if (x) {
                return true;
            }
            pieceCanMove = true;
            let bottomRightSquare = 0;
            for (let index = parseInt(currentPosition) + 9; index <= 64; index += 9) {
                if (index % 8 == 0) {
                    bottomRightSquare = index;
                } else if (index > 57) {
                    bottomRightSquare = index;
                }
            }
            for (let index = parseInt(currentPosition) + 9; index <= bottomRightSquare; index += 9) {
                types.forEach(typeOf => {
                    const pWhite = document.getElementById(typeOf + color + index);
                    const pBlack = document.getElementById(typeOf + otherColor + index);
                    if (pWhite != null || (pBlack != null && index != position)) {
                        pieceCanMove = false;
                        return;
                    }
                });
                if (pieceCanMove && position == index) {
                    x = true;
                    break;
                }
            }
            if (x) {
                return true;
            }
        }
    }
}

const takePiece = (position, currentPosition, type) => {
    if (whiteTurn) {
        const takingPieceWhite = document.getElementById(type + 'White' + currentPosition);
        if (takingPieceWhite != null) {
            checkTypeBlack(position);
            const pieceToTake = document.getElementById(chosenTypeBlack + 'Black' + position)
            if (pieceToTake != null) {
                return true;
            }
        }
    } else {
        const takingPieceBlack = document.getElementById(type + 'Black' + currentPosition);
        if (takingPieceBlack != null) {
            checkTypeWhite(position);
            const pieceToTake = document.getElementById(chosenTypeWhite + 'White' + position)
            if (pieceToTake != null) {
                return true;
            }
        }
    }

}

// chosenTypeWhite = 0;
//  chosenTypeBlack = 0;