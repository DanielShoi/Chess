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
const initMe = () => {

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
        const pieceWhite = document.getElementById(type + 'White' + currentPosition);
        if (position == currentPosition || pieceWhite == null) {
            currentSquare.className = previousSquareClass;
            move = !move;
            return;
        } else {
            movePieceWhite(position, currentPosition, square, currentSquare, pieceWhite, type);
        }
    } else {
        const pieceBlack = document.getElementById(type + 'Black' + currentPosition);
        if (position == currentPosition || pieceBlack == null) {
            currentSquare.className = previousSquareClass;
            move = !move;
            return;
        } else {
            movePieceBlack(position, currentPosition, square, currentSquare, pieceBlack, type);
        }
    }
}

const rockMove = (position, currentPosition, type) => {
    if (type == 'rock') {
        let rockCanMove = true;
        let x = false;
        rockCanMove=true;
        if (whiteTurn) {
            const rockWhite = document.getElementById(type+'White' + currentPosition);
            if(rockWhite!=null){
                for (let index = currentPosition-8; index >= position; index-=8) {
                    types.forEach(typeOf => {
                        const pWhite = document.getElementById(typeOf + 'White' + index);
                        console.log(pWhite);
                        if(pWhite!=null){
                            rockCanMove=false;
                            return;
                        }
                    
                    });
                    if(rockCanMove&&position==index){
                        console.log(' working');
                        x=true;
                }
                }
                if(x){
                    return true;
                }
            }
        } else {


        }

    }

}

const pawnMove = (position, currentPosition, type) => {
    if (type == 'pawn') {
        specialPawnPosition = 0;
        if (whiteTurn) {
            const pawnWhite = document.getElementById('pawnWhite' + currentPosition);
            if (pawnWhite != null) {
                if (position == currentPosition - 8) {
                    const pBlack = document.getElementById(type + 'Black' + position);
                    if (pBlack == null) {
                        return true;
                    }
                } else if (position == currentPosition - 16 && (currentPosition >= 49 && currentPosition <= 56)) {
                    const pBlack = document.getElementById(type + 'Black' + position);
                    if (pBlack == null) {
                        pawnSpecialWhite = true;
                        specialPawnPosition = position;
                        return true;
                    }
                }
            }
        } else {
            const pawnBlack = document.getElementById('pawnBlack' + currentPosition);
            if (pawnBlack != null) {
                if (position - 8 == currentPosition) {
                    const pWhite = document.getElementById(type + 'White' + position);
                    if (pWhite == null) {
                        return true;
                    }
                } else if (position - 16 == currentPosition && (currentPosition >= 9 && currentPosition <= 16)) {
                    const pWhite = document.getElementById(type + 'White' + position);
                    if (pWhite == null) {
                        pawnSpecialBlack = true;
                        specialPawnPosition = position;
                        return true;
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
            console.log(chosenTypeWhite);
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

const movePieceBlack = (position, currentPosition, square, currentSquare, pieceBlack, type) => {
    if (pawnTake(position, currentPosition)) {
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
        const pieceWhite = document.getElementById(type + 'White' + position);
        thisSquareClass = square.className;
        currentSquare.className = previousSquareClass;
        currentSquare.removeChild(pieceBlack);
        square.appendChild(pieceBlack);
        pieceBlack.id = type + 'Black' + position;
        whiteTurn = !whiteTurn;
        move = !move;
        firstTurn = false;
        square.removeChild(pieceWhite);
        pawnSpecialWhite = false;
    } else if (pawnMove(position, currentPosition, type)) {
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
const movePieceWhite = (position, currentPosition, square, currentSquare, pieceWhite, type) => {
    console.log(rockMove(position, currentPosition,type));
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
        const pieceBlack = document.getElementById(type + 'Black' + position);
        thisSquareClass = square.className;
        currentSquare.className = previousSquareClass;
        currentSquare.removeChild(pieceWhite);
        square.appendChild(pieceWhite);
        pieceWhite.id = type + 'White' + position;
        whiteTurn = !whiteTurn;
        move = !move;
        firstTurn = false;
        square.removeChild(pieceBlack);
        pawnSpecialBlack = false;
    } else if (pawnMove(position, currentPosition, type) ||
        rockMove(position, currentPosition,type)) {
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