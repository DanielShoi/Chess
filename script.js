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
let whiteKingMove = false;
let blackKingMove = false;
let whiteRockLeftMove = false;
let whiteRockRightMove = false;
let blackRockLeftMove = false;
let blackRockRightMove = false;
let takenPieceId = 0;
let takenPiecesWhitePawns = document.getElementById('pawn-blacks');
let takenPiecesBlackPawns = document.getElementById('pawn-White');
let takenPiecesWhiteKnights = document.getElementById('knight-blacks');
let takenPiecesBlackKnights = document.getElementById('knight-White');
let takenPiecesWhiteBishops = document.getElementById('bishop-blacks');
let takenPiecesBlackBishops = document.getElementById('bishop-White');
let takenPiecesWhiteRocks = document.getElementById('rock-blacks');
let takenPiecesBlackRocks = document.getElementById('rock-White');
let takenPiecesWhiteQueens = document.getElementById('queen-blacks');
let takenPiecesBlackQueens = document.getElementById('queen-White');
let checkSquare = null;
let checkSquareClass = null;

let knightLeftCheckBlack = null;
let knightRightCheckBlack = null;
let bishopLeftCheckBlack = null;
let bishopRightCheckBlack = null;
let rockRightCheckBlack = null;
let rockLeftCheckBlack = null;
let queenBlackCheck = null;

let knightLeftCheckWhite = null;
let knightRightCheckWhite = null;
let bishopLeftCheckWhite = null;
let bishopRightCheckWhite = null;
let rockRightCheckWhite = null;
let rockLeftCheckWhite = null;
let queenWhiteCheck = null;

let checkKingWhite = false;
let checkKingBlack = false;

let kingWhiteLocation = 61;
let queenWhiteLocation = 60;
let rockWhiteLeftLocation = 57;
let rockWhiteRightLocation = 64;
let bishopLeftWhiteLocation = 59;
let bishopRightWhiteLocation = 62;
let knightLeftWhiteLocation = 58;
let knightRightWhiteLocation = 63;

let kingBlackLocation = 5;
let queenBlackLocation = 4;
let rockBlackLeftLocation = 1;
let rockBlackRightLocation = 8;
let bishopLeftBlackLocation = 3;
let bishopRightBlackLocation = 6;
let knightLeftBlackLocation = 2;
let knightRightBlackLocation = 7;



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

const queenSquare2 = document.getElementById(4);
const queenBlack = document.createElement('div');
queenBlack.id = 'queenBlack' + 4;
queenBlack.className = 'queen-black';
queenSquare2.appendChild(queenBlack);

const kingSquare1 = document.getElementById(61);
const kingWhite = document.createElement('div');
kingWhite.id = 'kingWhite' + 61;
kingWhite.className = 'king-White';
kingSquare1.appendChild(kingWhite);

const kingSquare2 = document.getElementById(5);
const kingBlack = document.createElement('div');
kingBlack.id = 'kingBlack' + 5;
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
            movePieceWhite(position, currentPosition, square, currentSquare, pieceWhite, type, otherTypeBlack, chosenTypeBlack);
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
            movePieceBlack(position, currentPosition, square, currentSquare, pieceBlack, type, otherTypeWhite, chosenTypeWhite);
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
            if (whiteTurn) {
                if (rockWhiteLeftLocation == currentPosition) {
                    rockWhiteLeftLocation = position;
                } else if (rockWhiteRightLocation == currentPosition) {
                    rockWhiteRightLocation = position;
                }
            } else {
                if (rockBlackLeftLocation == currentPosition) {
                    rockBlackLeftLocation = position;
                } else if (rockBlackRightLocation == currentPosition) {
                    rockBlackRightLocation = position;
                }
            }
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
            if (whiteTurn) {
                if (bishopLeftWhiteLocation == currentPosition) {
                    bishopLeftWhiteLocation = position;
                } else if (bishopRightWhiteLocation == currentPosition) {
                    bishopRightWhiteLocation = position;
                }
            } else {
                if (bishopLeftBlackLocation == currentPosition) {
                    bishopLeftBlackLocation = position;
                } else if (bishopRightBlackLocation == currentPosition) {
                    bishopRightBlackLocation = position;
                }
            }
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
            if (whiteTurn) {
                queenWhiteLocation = position;
            } else {
                queenBlackLocation = position;
            }
            return true;
        } else if (moveDiagonally(position, currentPosition, type, myColor, x)) {
            if (whiteTurn) {
                queenWhiteLocation = position;
            } else {
                queenBlackLocation = position;
            }
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
            if ((currentPosition - 1) % 8 == 0) {
                if (currentPosition - 6 == position || currentPosition - 15 == position ||
                    position - 10 == currentPosition || position - 17 == currentPosition) {
                    if (thisColor == 'White') {
                        checkTypeWhite(position);
                        if (chosenPieceWhite == null) {
                            if (knightLeftWhiteLocation == currentPosition) {
                                knightLeftWhiteLocation = position;
                            } else if (knightRightWhiteLocation == currentPosition) {
                                knightRightWhiteLocation = position;
                            }
                            return true;
                        }
                    } else {
                        checkTypeBlack(position);
                        if (chosenPieceBlack == null) {
                            if (knightLeftBlackLocation == currentPosition) {
                                knightLeftBlackLocation = position;
                            } else if (knightRightBlackLocation == currentPosition) {
                                knightRightBlackLocation = position;
                            }
                            return true;
                        }
                    }
                }
            } else if ((currentPosition - 2) % 8 == 0) {
                if (currentPosition - 6 == position || currentPosition - 15 == position ||
                    currentPosition - 17 == position || position - 10 == currentPosition ||
                    position - 15 == currentPosition || position - 17 == currentPosition) {
                    if (thisColor == 'White') {
                        checkTypeWhite(position);
                        if (chosenPieceWhite == null) {
                            if (knightLeftWhiteLocation == currentPosition) {
                                knightLeftWhiteLocation = position;
                            } else if (knightRightWhiteLocation == currentPosition) {
                                knightRightWhiteLocation = position;
                            }
                            return true;
                        }
                    } else {
                        checkTypeBlack(position);
                        if (chosenPieceBlack == null) {
                            if (knightLeftBlackLocation == currentPosition) {
                                knightLeftBlackLocation = position;
                            } else if (knightRightBlackLocation == currentPosition) {
                                knightRightBlackLocation = position;
                            }
                            return true;
                        }
                    }
                }
            } else if (currentPosition % 8 == 0) {
                if (currentPosition - 10 == position || currentPosition - 17 == position ||
                    position - 6 == currentPosition || position - 15 == currentPosition) {
                    if (thisColor == 'White') {
                        checkTypeWhite(position);
                        if (chosenPieceWhite == null) {
                            if (knightLeftWhiteLocation == currentPosition) {
                                knightLeftWhiteLocation = position;
                            } else if (knightRightWhiteLocation == currentPosition) {
                                knightRightWhiteLocation = position;
                            }
                            return true;
                        }
                    } else {
                        checkTypeBlack(position);
                        if (chosenPieceBlack == null) {
                            if (knightLeftBlackLocation == currentPosition) {
                                knightLeftBlackLocation = position;
                            } else if (knightRightBlackLocation == currentPosition) {
                                knightRightBlackLocation = position;
                            }
                            return true;
                        }
                    }
                }
            } else if ((parseInt(currentPosition) + 1) % 8 == 0) {
                if (currentPosition - 10 == position || currentPosition - 15 == position ||
                    currentPosition - 17 == position || position - 6 == currentPosition ||
                    position - 15 == currentPosition || position - 17 == currentPosition) {
                    if (thisColor == 'White') {
                        checkTypeWhite(position);
                        if (chosenPieceWhite == null) {
                            if (knightLeftWhiteLocation == currentPosition) {
                                knightLeftWhiteLocation = position;
                            } else if (knightRightWhiteLocation == currentPosition) {
                                knightRightWhiteLocation = position;
                            }
                            return true;
                        }
                    } else {
                        checkTypeBlack(position);
                        if (chosenPieceBlack == null) {
                            if (knightLeftBlackLocation == currentPosition) {
                                knightLeftBlackLocation = position;
                            } else if (knightRightBlackLocation == currentPosition) {
                                knightRightBlackLocation = position;
                            }
                            return true;
                        }
                    }
                }
            } else if (currentPosition - 6 == position || currentPosition - 10 == position ||
                currentPosition - 15 == position || currentPosition - 17 == position ||
                position - 6 == currentPosition || position - 10 == currentPosition ||
                position - 15 == currentPosition || position - 17 == currentPosition) {
                if (thisColor == 'White') {
                    checkTypeWhite(position);
                    if (chosenPieceWhite == null) {
                        if (knightLeftWhiteLocation == currentPosition) {
                            knightLeftWhiteLocation = position;
                        } else if (knightRightWhiteLocation == currentPosition) {
                            knightRightWhiteLocation = position;
                        }
                        return true;
                    }
                } else {
                    checkTypeBlack(position);
                    if (chosenPieceBlack == null) {
                        if (knightLeftBlackLocation == currentPosition) {
                            knightLeftBlackLocation = position;
                        } else if (knightRightBlackLocation == currentPosition) {
                            knightRightBlackLocation = position;
                        }
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
            if (thisColor == 'White') {
                if (position == 63 && whiteKingMove == false && whiteRockRightMove == false) {
                    let betweenCastleSquareRightWhite = document.getElementById('63');
                    let castleSquareRightWhite = document.getElementById('62');
                    let whiteRockRightCastle = document.getElementById('rockWhite64');
                    if (betweenCastleSquareRightWhite.hasChildNodes() == false && castleSquareRightWhite.hasChildNodes() == false) {
                        castleSquareRightWhite.appendChild(whiteRockRightCastle);
                        whiteRockRightCastle.id = ('rockWhite62')
                        return true;
                    }
                }
                if (position == 59 && whiteKingMove == false && whiteRockLeftMove == false) {
                    let betweenCastleSquareLeftWhite1 = document.getElementById('58');
                    let betweenCastleSquareLeftWhite2 = document.getElementById('59');
                    let castleSquareLeftWhite = document.getElementById('60');
                    let whiteRockLeftCastle = document.getElementById('rockWhite57');
                    if (betweenCastleSquareLeftWhite1.hasChildNodes() == false &&
                        betweenCastleSquareLeftWhite2.hasChildNodes() == false && castleSquareLeftWhite.hasChildNodes() == false) {
                        castleSquareLeftWhite.appendChild(whiteRockLeftCastle);
                        whiteRockLeftCastle.id = ('rockWhite60')
                        return true;
                    }
                }
            } else if (thisColor == 'Black') {
                if (position == 7 && blackKingMove == false && blackRockRightMove == false) {
                    let betweenCastleSquareRightBlack = document.getElementById('7');
                    let castleSquareRightBlack = document.getElementById('6');
                    let blackRockRightCastle = document.getElementById('rockBlack8');
                    if (betweenCastleSquareRightBlack.hasChildNodes() == false && castleSquareRightBlack.hasChildNodes() == false) {
                        castleSquareRightBlack.appendChild(blackRockRightCastle);
                        kingBlackLocation = position;
                        blackRockRightCastle.id = 'rockBlack6';
                        return true;
                    }
                }
                if (position == 3 && blackKingMove == false && blackRockLeftMove == false) {
                    let betweenCastleSquareLeftBlack1 = document.getElementById('2');
                    let betweenCastleSquareLeftBlack2 = document.getElementById('2');
                    let castleSquareLeftBlack = document.getElementById('4');
                    let blackRockLeftCastle = document.getElementById('rockBlack1');
                    if (betweenCastleSquareLeftBlack1.hasChildNodes() == false &&
                        betweenCastleSquareLeftBlack2.hasChildNodes() == false && castleSquareLeftBlack.hasChildNodes() == false) {
                        castleSquareLeftBlack.appendChild(blackRockLeftCastle);
                        kingBlackLocation = position;
                        blackRockLeftCastle.id = ('rockBlack4')
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

const movePieceBlack = (position, currentPosition, square, currentSquare, pieceBlack, type, otherPiece, otherType) => {
    let takeYouBlack = document.getElementById(otherType + '-whites');
    if (pawnTake(position, currentPosition, type) && otherType != 'king') {
        if (pawnSpecialWhite && type == 'pawn') {
            currentPosition++;
            const pawnWhite1 = document.getElementById('pawnWhite' + currentPosition);
            currentPosition--;
            const pawnWhite2 = document.getElementById('pawnWhite' + (currentPosition - 1));
            if (pawnWhite1 != null || pawnWhite2 != null) {
                takeYouBlack = document.getElementById('pawn-whites');
                const pawnWhite = document.getElementById('pawnWhite' + specialPawnPosition);
                const newSquare = document.getElementById(specialPawnPosition);
                thisSquareClass = square.className;
                currentSquare.className = previousSquareClass;
                currentSquare.removeChild(pieceBlack);
                square.appendChild(pieceBlack);
                pieceBlack.id = type + 'Black' + position;
                newSquare.removeChild(pawnWhite);
                if (isCheck('White', kingBlackLocation)) {
                    pieceBlack.id = type + 'Black' + currentPosition;
                    currentSquare.appendChild(pieceBlack);
                    newSquare.appendChild(pawnWhite);
                    move = !move;
                    return;
                }
                whiteTurn = !whiteTurn;
                move = !move;
                firstTurn = false;
                pawnSpecialWhite = false;
                pawnWhite.id = takenPieceId + ' ';
                takenPieceId--;
                pawnWhite.className = ('pawn-white-taken');
                takeYouBlack.appendChild(pawnWhite);
                if (isCheck('Black', kingWhiteLocation)) {
                    checkSquareClass = checkSquare.className;
                    checkSquare.className = 'check';
                }
                return;
            }
        }
        if (position >= 57) {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceBlack);
            pieceBlack.id = 'queenBlack' + position;
            pieceBlack.className = 'queen-black';
            square.appendChild(pieceBlack);
            square.removeChild(otherPiece);
            if (isCheck('White', kingBlackLocation)) {
                square.removeChild(pieceBlack);
                pieceBlack.id = 'pawnBlack' + currentPosition;
                pieceBlack.className = 'pawn-black';
                currentSquare.appendChild(pieceBlack);
                move = !move;
                return;
            }
            whiteTurn = !whiteTurn;
            move = !move;
            firstTurn = false;
            pawnSpecialWhite = false;
            otherPiece.id = takenPieceId + ' ';
            takenPieceId--;
            otherPiece.className = (otherType + '-white-taken');
            takeYouBlack.appendChild(otherPiece);
            if (isCheck('Black', kingWhiteLocation)) {
                checkSquareClass = checkSquare.className;
                checkSquare.className = 'check';
            }
            return;
        }
        thisSquareClass = square.className;
        currentSquare.className = previousSquareClass;
        currentSquare.removeChild(pieceBlack);
        square.appendChild(pieceBlack);
        square.removeChild(otherPiece);
        pieceBlack.id = type + 'Black' + position;
        if (isCheck('White', kingBlackLocation)) {
            square.removeChild(pieceBlack);
            square.appendChild(otherPiece);
            pieceBlack.id = type + 'Black' + currentPosition;
            currentSquare.appendChild(pieceBlack);
            move = !move;
            return;
        }
        whiteTurn = !whiteTurn;
        move = !move;
        firstTurn = false;
        pawnSpecialWhite = false;
        otherPiece.id = takenPieceId + ' ';
        takenPieceId--;
        otherPiece.className = (otherType + '-white-taken');
        takeYouBlack.appendChild(otherPiece);
        if (checkSquare != null && checkSquareClass != null) {
            checkSquare.className = checkSquareClass;
        }
        if (isCheck('Black', kingWhiteLocation)) {
            checkSquareClass = checkSquare.className;
            checkSquare.className = 'check';
        }

    } else if (pawnMove(position, currentPosition, type, otherPiece) ||
        rockMove(position, currentPosition, type) ||
        bishopMove(position, currentPosition, type) ||
        queenMove(position, currentPosition, type) ||
        knightMove(position, currentPosition, type) ||
        kingMove(position, currentPosition, type)) {
        if (takePiece(position, currentPosition, type, otherType) && type != 'pawn') {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceBlack);
            square.appendChild(pieceBlack);
            square.removeChild(otherPiece);
            pieceBlack.id = type + 'Black' + position;
            if (isCheck('White', kingBlackLocation)) {
                square.appendChild(otherPiece);
                pieceBlack.id = type + 'Black' + currentPosition;
                currentSquare.appendChild(pieceBlack);
                move = !move;
                return;
            }
            whiteTurn = !whiteTurn;
            move = !move;
            firstTurn = false;
            pawnSpecialWhite = false;
            otherPiece.id = takenPieceId + ' ';
            takenPieceId--;
            otherPiece.className = (otherType + '-white-taken');
            takeYouBlack.appendChild(otherPiece);
            if (type == 'king') {
                kingBlackLocation = position;
                if (checkSquare != null && checkSquareClass != null) {
                    checkSquare.className = checkSquareClass;
                }
            }
            if (checkSquare != null && checkSquareClass != null) {
                checkSquare.className = checkSquareClass;
            }
            if (isCheck('Black', kingWhiteLocation)) {
                checkSquareClass = checkSquare.className;
                checkSquare.className = 'check';
            }
            return;
        }
        if (blackKingMove == false) {
            castleBlackRight(currentPosition, type);
            castleBlackLeft(currentPosition, type);
        }
        if (pawnMove(position, currentPosition, type, otherPiece) && position >= 57) {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceBlack);
            pieceBlack.id = 'queenBlack' + position;
            pieceBlack.className = 'queen-black';
            square.appendChild(pieceBlack);
            if (isCheck('White', position)) {
                square.removeChild(pieceBlack);
                pieceBlack.id = 'pawnBlack' + currentPosition;
                pieceBlack.className = 'pawn-black';
                currentSquare.appendChild(pieceBlack);
                move = !move;
                return;
            }
            whiteTurn = !whiteTurn;
            move = !move;
            pawnSpecialWhite = false;
            if (checkSquare != null && checkSquareClass != null) {
                checkSquare.className = checkSquareClass;
            }
            if (isCheck('Black', kingWhiteLocation)) {
                checkSquareClass = checkSquare.className;
                checkSquare.className = 'check';
            }
            return;
        }
        if (otherType != 'king') {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceBlack);
            square.appendChild(pieceBlack);
            pieceBlack.id = type + 'Black' + position;
            if (type == 'king') {
                if (isCheck('White', position)) {
                    square.removeChild(pieceBlack);
                    currentSquare.appendChild(pieceBlack);
                    pieceBlack.id = type + 'Black' + currentPosition;
                    move = !move;
                    return;
                }
            } else if (isCheck('White', kingBlackLocation)) {
                square.removeChild(pieceBlack);
                currentSquare.appendChild(pieceBlack);
                pieceBlack.id = type + 'Black' + currentPosition;
                move = !move;
                return;
            }
            whiteTurn = !whiteTurn;
            move = !move;
            if (type == 'king') {
                kingBlackLocation = position;
            }
            if (checkSquare != null && checkSquareClass != null) {
                checkSquare.className = checkSquareClass;
            }
            pawnSpecialWhite = false;
            if (isCheck('Black', kingWhiteLocation)) {
                checkSquareClass = checkSquare.className;
                checkSquare.className = 'check';
            }
        }
    } else {
        currentSquare.className = previousSquareClass;
        move = !move;
    }
}


const movePieceWhite = (position, currentPosition, square, currentSquare, pieceWhite, type, otherPiece, otherType) => {
    let takeYouWhite = document.getElementById(otherType + '-blacks');
    if (pawnTake(position, currentPosition) && otherType != 'king') {
        if (pawnSpecialBlack && type == 'pawn') {
            currentPosition++;
            const pawnBlack1 = document.getElementById('pawnBlack' + currentPosition);
            currentPosition--;
            const pawnBlack2 = document.getElementById('pawnBlack' + (currentPosition - 1));
            if (pawnBlack1 != null || pawnBlack2 != null) {
                takeYouWhite = document.getElementById('pawn-blacks');
                const pawnBlack = document.getElementById('pawnBlack' + specialPawnPosition);
                const newSquare = document.getElementById(specialPawnPosition);
                thisSquareClass = square.className;
                currentSquare.className = previousSquareClass;
                currentSquare.removeChild(pieceWhite);
                square.appendChild(pieceWhite);
                pieceWhite.id = type + 'White' + position;
                newSquare.removeChild(pawnBlack);
                if (isCheck('Black', kingWhiteLocation)) {
                    pieceWhite.id = type + 'White' + currentSquare;
                    currentSquare.appendChild(pieceWhite);
                    newSquare.appendChild(pawnBlack);
                    move = !move;
                    return;
                }
                whiteTurn = !whiteTurn;
                move = !move;
                firstTurn = false;
                pawnSpecialBlack = false;
                pawnBlack.id = takenPieceId + ' ';
                takenPieceId--;
                pawnBlack.className = ('pawn-black-taken');
                takeYouWhite.appendChild(pawnBlack);
                if (isCheck('White', kingBlackLocation)) {
                    checkSquareClass = checkSquare.className;
                    checkSquare.className = 'check';
                }
                return;
            }
        }
        if (position <= 8) {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceWhite);
            pieceWhite.id = 'queenWhite' + position;
            pieceWhite.className = 'queen-White';
            square.appendChild(pieceWhite);
            square.removeChild(otherPiece);
            if (isCheck('Black', kingWhiteLocation)) {
                square.removeChild(pieceWhite);
                pieceWhite.id = 'queenWhite' + currentPosition;
                currentSquare.appendChild(pieceWhite);
                square.appendChild(otherPiece);
                move = !move;
                return;
            }
            whiteTurn = !whiteTurn;
            move = !move;
            firstTurn = false;
            pawnSpecialBlack = false;
            otherPiece.id = takenPieceId + ' ';
            takenPieceId--;
            otherPiece.className = (otherType + '-black-taken');
            takeYouWhite.appendChild(otherPiece);
            if (isCheck('White', kingBlackLocation)) {
                checkSquareClass = checkSquare.className;
                checkSquare.className = 'check';
            }
            return;
        }
        thisSquareClass = square.className;
        currentSquare.className = previousSquareClass;
        currentSquare.removeChild(pieceWhite);
        square.appendChild(pieceWhite);
        square.removeChild(otherPiece);
        pieceWhite.id = type + 'White' + position;
        if (isCheck('Black', kingWhiteLocation)) {
            square.removeChild(pieceWhite);
            pieceWhite.id = type + 'White' + currentPosition;
            currentSquare.appendChild(pieceWhite);
            square.appendChild(otherPiece);
            move = !move;
            return;
        }
        whiteTurn = !whiteTurn;
        move = !move;
        firstTurn = false;
        pawnSpecialBlack = false;
        otherPiece.id = takenPieceId + ' ';
        takenPieceId--;
        otherPiece.className = (otherType + '-black-taken');
        takeYouWhite.appendChild(otherPiece);
        if (checkSquare != null && checkSquareClass != null) {
            checkSquare.className = checkSquareClass;
        }
        if (isCheck('White', kingBlackLocation)) {
            checkSquareClass = checkSquare.className;
            checkSquare.className = 'check';
        }

    } else if (pawnMove(position, currentPosition, type, otherPiece) ||
        rockMove(position, currentPosition, type) ||
        bishopMove(position, currentPosition, type) ||
        queenMove(position, currentPosition, type) ||
        knightMove(position, currentPosition, type) ||
        kingMove(position, currentPosition, type)) {
        if (takePiece(position, currentPosition, type, otherType) && type != 'pawn') {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceWhite);
            square.appendChild(pieceWhite);
            pieceWhite.id = type + 'White' + position;
            square.removeChild(otherPiece);
            if (isCheck('Black', kingWhiteLocation)) {
                currentSquare.appendChild(pieceWhite);
                square.appendChild(otherPiece);
                pieceWhite.id = type + 'White' + currentPosition;
                move = !move;
                return;
            }
            whiteTurn = !whiteTurn;
            move = !move;
            firstTurn = false;
            pawnSpecialBlack = false;
            otherPiece.id = takenPieceId + ' ';
            takenPieceId--;
            otherPiece.className = (otherType + '-black-taken');
            takeYouWhite.appendChild(otherPiece);
            if (type == 'king') {
                kingWhiteLocation = position;
                if (checkSquare != null && checkSquareClass != null) {
                    checkSquare.className = checkSquareClass;
                }
            }
            if (checkSquare != null && checkSquareClass != null) {
                checkSquare.className = checkSquareClass;
            }
            if (isCheck('White', kingBlackLocation)) {
                checkSquareClass = checkSquare.className;
                checkSquare.className = 'check';
            }
            return;
        }
        if (whiteKingMove == false) {
            castleWhiteRight(currentPosition, type);
            castleWhiteLeft(currentPosition, type);
        }
        if (pawnMove(position, currentPosition, type, otherPiece) && position <= 8) {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceWhite);
            pieceWhite.id = 'queenWhite' + position;
            pieceWhite.className = 'queen-White';
            square.appendChild(pieceWhite);
            if (isCheck('Black', position)) {
                square.removeChild(pieceWhite);
                pieceWhite.id = 'pawnWhite' + currentPosition;
                pieceWhite.className = 'pawn-White';
                currentSquare.appendChild(pieceWhite);
                move = !move;
                return;
            }
            whiteTurn = !whiteTurn;
            move = !move;
            firstTurn = false;
            pawnSpecialBlack = false;
            if (checkSquare != null && checkSquareClass != null) {
                checkSquare.className = checkSquareClass;
            }
            if (isCheck('White', kingBlackLocation)) {
                checkSquareClass = checkSquare.className;
                checkSquare.className = 'check';
            }
            return;
        }
        if (otherType != 'king') {
            thisSquareClass = square.className;
            currentSquare.className = previousSquareClass;
            currentSquare.removeChild(pieceWhite);
            square.appendChild(pieceWhite);
            pieceWhite.id = type + 'White' + position;
            if (type == 'king') {
                if (isCheck('Black', position)) {
                    square.removeChild(pieceWhite);
                    currentSquare.appendChild(pieceWhite);
                    pieceWhite.id = type + 'White' + currentPosition;
                    move = !move;
                    return;
                }
            } else if (isCheck('Black', kingWhiteLocation)) {
                square.removeChild(pieceWhite);
                currentSquare.appendChild(pieceWhite);
                pieceWhite.id = type + 'White' + currentPosition;
                move = !move;
                return;
            }
            whiteTurn = !whiteTurn;
            move = !move;
            if (type == 'king') {
                kingWhiteLocation = position;
            }
            if (checkSquare != null && checkSquareClass != null) {
                checkSquare.className = checkSquareClass;
            }
            firstTurn = false;
            pawnSpecialBlack = false;
            if (isCheck('White', kingBlackLocation)) {
                checkSquareClass = checkSquare.className;
                checkSquare.className = 'check';
            }
        }
    } else {
        currentSquare.className = previousSquareClass;
        move = !move;
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

const takePiece = (position, currentPosition, type, otherType) => {
    if (otherType != 'king') {
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

}
castleWhiteRight = (currentPosition, type) => {
    let canRockWhiteRightCastle1 = document.getElementById('rock' + 'White' + currentPosition);
    if (type == 'rock' && currentPosition == 64) {
        if (canRockWhiteRightCastle1 != null) {
            whiteRockRightMove = true;
        }
    }
    let canKingWHiteCastle1 = document.getElementById('king' + 'White' + currentPosition);
    if (canKingWHiteCastle1 != null) {
        whiteKingMove = true;
    }
}


castleWhiteLeft = (currentPosition, type) => {
    let canRockWhiteRightCastle2 = document.getElementById('rock' + 'White' + currentPosition);
    if (type == 'rock' && currentPosition == 57) {
        if (canRockWhiteRightCastle2 != null) {
            whiteRockLeftMove = true;
        }
    }
    let canKingWHiteCastle2 = document.getElementById('king' + 'White' + currentPosition);
    if (canKingWHiteCastle2 != null) {
        whiteKingMove = true;
    }
}
castleBlackRight = (currentPosition, type) => {
    let canRockBlackRightCastle1 = document.getElementById('rock' + 'Black' + currentPosition);
    if (type == 'rock' && currentPosition == 8) {
        if (canRockBlackRightCastle1 != null) {
            blackRockRightMove = true;
        }
    }
    let canKingBlackCastle1 = document.getElementById('king' + 'Black' + currentPosition);
    if (canKingBlackCastle1 != null) {
        blackKingMove = true;
    }
}
castleBlackLeft = (currentPosition, type) => {
    let canRockBlackRightCastle2 = document.getElementById('rock' + 'Black' + currentPosition);
    if (type == 'rock' && currentPosition == 1) {
        if (canRockBlackRightCastle2 != null) {
            blackRockLeftMove = true;
        }
    }
    let canKingBlackCastle2 = document.getElementById('king' + 'White' + currentPosition);
    if (canKingBlackCastle2 != null) {
        blackKingMove = true;
    }
}

let xx1 = true;
let xx2 = true;
let isGettingChecked = false;

const isGettingCheckDiagonally = (forWho, anyKingPosition) => {
    isGettingChecked = false;
    let kingLocation = kingWhiteLocation;
    checkKingWhite = false;
    checkKingBlack = false;
    let colorThis = 'White';
    let colorOther = 'Black';
    if (forWho == 'White') {
        kingLocation = kingBlackLocation
        colorThis = 'Black';
        colorOther = 'White';
    }

    xx1 = true;
    xx2 = true;
    for (let index = anyKingPosition - 9; index >= 1; index -= 9) {
        if ((index) % 8 == 0 || isGettingChecked) {
            break;
        }
        types.forEach(typeOf => {
            const pThis = document.getElementById(typeOf + colorThis + index);
            const pOther = document.getElementById(typeOf + colorOther + index);
            if (pThis != null) {
                xx1 = false;
            }
            if (pOther != null && (typeOf != 'queen' && typeOf != 'bishop') && xx1) {
                xx2 = false;
            }
            if (pOther != null && (typeOf == 'queen' || typeOf == 'bishop') && xx1 && xx2) {
                if (forWho == 'Black') {
                    isGettingChecked = true;
                    checkKingWhite = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                } else {
                    isGettingChecked = true;
                    checkKingBlack = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                }
            }
        });
    }
    if (isGettingChecked) {
        return;
    }
    xx1 = true;
    xx2 = true;
    for (let index = parseInt(anyKingPosition) + 9; index <= 64; index += 9) {
        if ((index - 1) % 8 == 0 || isGettingChecked) {
            break;
        }
        types.forEach(typeOf => {
            const pThis = document.getElementById(typeOf + colorThis + index);
            const pOther = document.getElementById(typeOf + colorOther + index);

            if (pThis != null) {
                xx1 = false;
            }
            if (pOther != null && (typeOf != 'queen' && typeOf != 'bishop') && xx1) {
                xx2 = false;
            }
            if (pOther != null && (typeOf == 'queen' || typeOf == 'bishop') && xx1 && xx2) {
                if (forWho == 'Black') {
                    isGettingChecked = true;
                    checkKingWhite = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                } else {
                    isGettingChecked = true;
                    checkKingBlack = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                }
            }
        });
    }
    if (isGettingChecked) {
        return;
    }
    xx1 = true;
    xx2 = true;
    for (let index = anyKingPosition - 7; index >= 8; index -= 7) {

        if ((index - 1) % 8 == 0 || isGettingChecked) {
            break;
        }
        types.forEach(typeOf => {
            const pThis = document.getElementById(typeOf + colorThis + index);
            const pOther = document.getElementById(typeOf + colorOther + index);
            if (pThis != null) {
                xx1 = false;
            }
            if (pOther != null && (typeOf != 'queen' && typeOf != 'bishop') && xx1) {
                xx2 = false;
            }
            if (pOther != null && (typeOf == 'queen' || typeOf == 'bishop') && xx1 && xx2) {
                if (forWho == 'Black') {
                    isGettingChecked = true;
                    checkKingWhite = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                } else {
                    isGettingChecked = true;
                    checkKingBlack = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                }
            }
        });
    }
    if (isGettingChecked) {
        return;
    }
    xx1 = true;
    xx2 = true;
    for (let index = parseInt(anyKingPosition) + 7; index <= 57; index += 7) {
        if (index % 8 == 0 || isGettingChecked) {
            break;
        }
        types.forEach(typeOf => {
            const pThis = document.getElementById(typeOf + colorThis + index);
            const pOther = document.getElementById(typeOf + colorOther + index);
            if (pThis != null) {
                xx1 = false;
            }
            if (pOther != null && (typeOf != 'queen' && typeOf != 'bishop') && xx1) {
                xx2 = false;
            }
            if (pOther != null && (typeOf == 'queen' || typeOf == 'bishop') && xx1 && xx2) {
                if (forWho == 'Black') {
                    isGettingChecked = true;
                    checkKingWhite = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                } else {
                    isGettingChecked = true;
                    checkKingBlack = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                }
            }
        });
    }
}

const isGettingCheckStraight = (forWho, anyKingPosition) => {
    isGettingChecked = false;
    let kingLocation = kingWhiteLocation;
    checkKingWhite = false;
    checkKingBlack = false;
    let colorThis = 'White';
    let colorOther = 'Black';
    if (forWho == 'White') {
        kingLocation = kingBlackLocation;
        colorThis = 'Black';
        colorOther = 'White';
    }
    xx1 = true;
    xx2 = true;
    for (let index = anyKingPosition - 8; index >= 1; index -= 8) {
        if (isGettingChecked) {
            break;
        }
        types.forEach(typeOf => {
            const pThis = document.getElementById(typeOf + colorThis + index);
            const pOther = document.getElementById(typeOf + colorOther + index);
            if (pThis != null) {
                xx1 = false;
            }
            if (pOther != null && (typeOf != 'queen' && typeOf != 'rock') && xx1) {
                xx2 = false;
            }
            if (pOther != null && (typeOf == 'queen' || typeOf == 'rock') && xx1 && xx2) {
                if (forWho == 'Black') {
                    isGettingChecked = true;
                    checkKingWhite = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                } else {
                    isGettingChecked = true;
                    checkKingBlack = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                }
            }
        });
    }
    if (isGettingChecked) {
        return;
    }
    xx1 = true;
    xx2 = true;
    for (let index = parseInt(anyKingPosition) + 8; index <= 64; index += 8) {
        if (isGettingChecked) {
            break;
        }
        types.forEach(typeOf => {
            const pThis = document.getElementById(typeOf + colorThis + index);
            const pOther = document.getElementById(typeOf + colorOther + index);
            if (pThis != null) {
                xx1 = false;
            }
            if (pOther != null && (typeOf != 'queen' && typeOf != 'rock') && xx1) {
                xx2 = false;
            }
            if (pOther != null && (typeOf == 'queen' || typeOf == 'rock') && xx1 && xx2) {
                if (forWho == 'Black') {
                    isGettingChecked = true;
                    checkKingWhite = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                } else {
                    isGettingChecked = true;
                    checkKingBlack = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                }
            }
        });
    }
    if (isGettingChecked) {
        return;
    }
    xx1 = true;
    xx2 = true;
    for (let index = anyKingPosition - 1; index >= 8; index -= 1) {
        if (index % 8 == 0 || isGettingChecked) {
            break;
        }
        types.forEach(typeOf => {
            const pThis = document.getElementById(typeOf + colorThis + index);
            const pOther = document.getElementById(typeOf + colorOther + index);
            if (pThis != null) {
                xx1 = false;
            }
            if (pOther != null && (typeOf != 'queen' && typeOf != 'rock') && xx1) {
                xx2 = false;
            }
            if (pOther != null && (typeOf == 'queen' || typeOf == 'rock') && xx1 && xx2) {
                if (forWho == 'Black') {
                    isGettingChecked = true;
                    checkKingWhite = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                } else {
                    isGettingChecked = true;
                    checkKingBlack = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                }
            }
        });
    }
    if (isGettingChecked) {
        return;
    }
    xx1 = true;
    xx2 = true;
    for (let index = parseInt(anyKingPosition) + 1; index <= 57; index += 1) {

        if ((index - 1) % 8 == 0 || isGettingChecked) {
            break;
        }
        types.forEach(typeOf => {
            const pThis = document.getElementById(typeOf + colorThis + index);
            const pOther = document.getElementById(typeOf + colorOther + index);
            if (pThis != null) {
                xx1 = false;
            }
            if (pOther != null && (typeOf != 'queen' && typeOf != 'rock') && xx1) {
                xx2 = false;
            }
            if (pOther != null && (typeOf == 'queen' || typeOf == 'rock') && xx1 && xx2) {
                if (forWho == 'Black') {
                    isGettingChecked = true;
                    checkKingWhite = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                } else {
                    isGettingChecked = true;
                    checkKingBlack = true;
                    checkSquare = document.getElementById(kingLocation);
                    console.log('check!');
                    console.log(forWho + ' Makes a check');
                }
            }
        });
    }
}

const isGettingCheckKnight = (forWho, anyKingPosition) => {
    isGettingChecked = false;
    let kingLocation = kingWhiteLocation;
    checkKingWhite = false;
    checkKingBlack = false;
    let colorOther = 'Black';
    if (forWho == 'White') {
        kingLocation = kingBlackLocation
        colorOther = 'White';
    }
    xx1 = false;
    xx2 = false;

    if ((anyKingPosition - 1) % 8 == 0) {
        const pOthers = [
            document.getElementById('knight' + colorOther + (anyKingPosition - 15)),
            document.getElementById('knight' + colorOther + (anyKingPosition - 6)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 17)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 10)),
        ]
        for (let index = 0; index < 4; index++) {
            if (pOthers[index] != null) {
                xx1 = true;
                xx2 = true;
            }
        }
    } else if ((anyKingPosition - 1) % 8 == 0) {
        const pOthers = [document.getElementById('knight' + colorOther + (anyKingPosition - 17)),
            document.getElementById('knight' + colorOther + (anyKingPosition - 15)),
            document.getElementById('knight' + colorOther + (anyKingPosition - 6)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 17)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 15)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 10)),
        ]
        for (let index = 0; index < 6; index++) {
            if (pOthers[index] != null) {
                xx1 = true;
                xx2 = true;
            }
        }
    } else if (anyKingPosition % 8 == 0) {
        const pOthers = [document.getElementById('knight' + colorOther + (anyKingPosition - 17)),
            document.getElementById('knight' + colorOther + (anyKingPosition - 10)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 15)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 6))
        ]
        for (let index = 0; index < 4; index++) {
            if (pOthers[index] != null) {
                xx1 = true;
                xx2 = true;
            }
        }
    } else if ((parseInt(anyKingPosition) + 1) % 8 == 0) {
        const pOthers = [document.getElementById('knight' + colorOther + (anyKingPosition - 17)),
            document.getElementById('knight' + colorOther + (anyKingPosition - 15)),
            document.getElementById('knight' + colorOther + (anyKingPosition - 10)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 17)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 15)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 6))
        ]
        for (let index = 0; index < 6; index++) {
            if (pOthers[index] != null) {
                xx1 = true;
                xx2 = true;
            }
        }
    } else {
        const pOthers = [document.getElementById('knight' + colorOther + (anyKingPosition - 17)),
            document.getElementById('knight' + colorOther + (anyKingPosition - 15)),
            document.getElementById('knight' + colorOther + (anyKingPosition - 10)),
            document.getElementById('knight' + colorOther + (anyKingPosition - 6)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 17)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 15)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 10)),
            document.getElementById('knight' + colorOther + (parseInt(anyKingPosition) + 6))
        ]
        for (let index = 0; index < 8; index++) {
            if (pOthers[index] != null) {
                xx1 = true;
                xx2 = true;
            }
        }
    }
    if (xx1 && xx2) {
        if (forWho == 'Black') {
            isGettingChecked = true;
            checkKingWhite = true;
            checkSquare = document.getElementById(kingLocation);
            console.log('check!');
            console.log(forWho + ' Makes a check');
        } else {
            isGettingChecked = true;
            checkKingBlack = true;
            checkSquare = document.getElementById(kingLocation);
            console.log('check!');
            console.log(forWho + ' Makes a check');
        }
    }
}

const isGettingCheckPawn = (forWho, anyKingPosition) => {
    xx1 = false;
    xx2 = false;
    isGettingChecked = false;
    let kingLocation = kingWhiteLocation;
    checkKingWhite = false;
    checkKingBlack = false;
    let colorOther = 'Black';
    if (forWho == 'White') {
        kingLocation = kingBlackLocation
        colorOther = 'White';
        const pawn1 = document.getElementById('pawn' + colorOther + (parseInt(anyKingPosition) + 9));
        const pawn2 = document.getElementById('pawn' + colorOther + (parseInt(anyKingPosition) + 7));
        if (pawn1 != null || pawn2 != null) {
            isGettingChecked = true;
            checkKingBlack = true;
            checkSquare = document.getElementById(kingLocation);
            console.log('check!');
            console.log(forWho + ' Makes a check');
        }
    }else{
        const pawn1 = document.getElementById('pawn' + colorOther + (anyKingPosition -9));
        const pawn2 = document.getElementById('pawn' + colorOther + (anyKingPosition - 7));
        if (pawn1 != null || pawn2 != null) {
            isGettingChecked = true;
            checkKingBlack = true;
            checkSquare = document.getElementById(kingLocation);
            console.log('check!');
            console.log(forWho + ' Makes a check');
        }
    }



}

const isCheck = (whoIsChecking, currentKingPosition) => {
    isGettingCheckDiagonally(whoIsChecking, currentKingPosition);
    if (isGettingChecked) {
        return true;
    }
    isGettingCheckStraight(whoIsChecking, currentKingPosition);
    if (isGettingChecked) {
        return true;
    }
    isGettingCheckKnight(whoIsChecking, currentKingPosition);
    if (isGettingChecked) {
        return true;
    }
    isGettingCheckPawn(whoIsChecking, currentKingPosition);
    if (isGettingChecked) {
        return true;
    }
    return false;
}