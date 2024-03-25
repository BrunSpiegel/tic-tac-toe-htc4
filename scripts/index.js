const game = {
    start: true,
    currentMove: 'X',
    players: {
        score1: 0,
        score2: 0,
    }
}

function getField(fieldNumber) {
    const $field = document.querySelector(".scenery-field-" + fieldNumber)

    return $field
}


function toggleCurrentMove() {
    if(game.currentMove === 'X') {
        game.currentMove = 'O'
    } else if (game.currentMove === 'O') {
        game.currentMove = 'X'
    }
}

function verifyWinner(firstField, secondField, thirdField) {
    const $fieldList = document.querySelectorAll('.scenery-field-big')

    const hasWinner = $fieldList[firstField].textContent != '' 
    && $fieldList[firstField].textContent === $fieldList[secondField].textContent 
    && $fieldList[secondField].textContent === $fieldList[thirdField].textContent

    return hasWinner
}

function getWinner() {
    if(verifyWinner(0,1,2)) {
        return game.currentMove
    } else if(verifyWinner(3,4,5)) {
        return game.currentMove
    }  else if(verifyWinner(6,7,8)) {
        return game.currentMove
    } else if(verifyWinner(0,3,6)) {
        return game.currentMove
    }  else if(verifyWinner(1,4,7)) {
        return game.currentMove
    }  else if(verifyWinner(2,5,8)) {
        return game.currentMove
    } else if(verifyWinner(0,4,8)) {
        return game.currentMove
    }  else if(verifyWinner(2,4,6)) {
        return game.currentMove
    }

    return ''
}

function addPlayerScore(winner) {
    winner === 'X' ? game.players.score1++ : game.players.score2++
}

function printPlayerScore() {
    const [$score1, $score2] = document.querySelectorAll('.score')

    $score1.textContent = game.players.score1
    $score2.textContent = game.players.score2
}


function changeWinnerName() {
    const $input1 = document.querySelector('.player-field')
    const $input2 = document.querySelector('.player-field-2')

    let winnerName = game.currentMove === 'X' ? $input1.value : $input2.value
    $winnerName.textContent = `O vencedor é ${winnerName}`
}

function resetBoard() {
    const $fieldList = document.querySelectorAll('.scenery-field-big')

    for(const $field of $fieldList) {
        $field.textContent =  ''
    }
}

function getPlayerName(move) {
    if (move === 'X') {
        const $input1 = document.querySelector('.player-field-1')
        return $input1.value
    } else if (move === 'O') {
        const $input2 = document.querySelector('.player-field-2') 
        return $input2.value
    }
}

function printWinnerName(winnerName) {
    const $winnerField = document.querySelector(".winner-field")
    $winnerField.textContent = winnerName + " Venceu!"
} 

for(let i = 0; i < 9; i++) {
    const $field = getField(i)
    $field.addEventListener('click', function() {
        if($field.textContent !== '' || game.start === false) return
        $field.textContent = game.currentMove
        const winner = getWinner()
        if (winner !== '') {
            addPlayerScore(winner)
            printPlayerScore()
            setTimeout(resetBoard, 1000)
            game.start = false
            const winnerName = getPlayerName(winner)
            printWinnerName(winnerName)
            setTimeout(function() {
                game.start = true
            }, 1000)
        }

        toggleCurrentMove()

    })
}