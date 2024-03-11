const game = {
    currentMove: 'X',
    player1points: 0,
    player2points: 0
}

function getField(fieldNumber) {
    const $field = document.querySelector(".scenery-field-" + fieldNumber)

    return $field
}

const $winnerName = document.querySelector('.winner-name-score')


function toggleCurrentMove() {
    if(game.currentMove == 'X') {
        game.currentMove = 'O'
    } else if (game.currentMove == 'O') {
        game.currentMove = 'X'
    }
}

function verifyWinner(firstField, secondField, thirdField) {
    const $fieldList = document.querySelectorAll('.scenery-field-big')

    const hasWinner = $fieldList[firstField].textContent != '' 
    && $fieldList[firstField].textContent == $fieldList[secondField].textContent 
    && $fieldList[secondField].textContent == $fieldList[thirdField].textContent

    return hasWinner
}

function getWinner() {

    if(verifyWinner(0,1,2)) {
        addPoints()
        changeWinnerName()
        return game.currentMove
    } else if(verifyWinner(3,4,5)) {
        addPoints()
        changeWinnerName()
        return game.currentMove
    }  else if(verifyWinner(6,7,8)) {
        addPoints()
        changeWinnerName()
        return game.currentMove
    } else if(verifyWinner(0,3,6)) {
        addPoints()
        changeWinnerName()
        return game.currentMove
    }  else if(verifyWinner(1,4,7)) {
        addPoints()
        changeWinnerName()
        return game.currentMove
    }  else if(verifyWinner(2,5,8)) {
        addPoints()
        changeWinnerName()
        return game.currentMove
    } else if(verifyWinner(0,4,8)) {
        addPoints()
        changeWinnerName()
        return game.currentMove
    }  else if(verifyWinner(2,4,6)) {
        addPoints()
        changeWinnerName()
        return game.currentMove
    }

    return ''
}

function addPoints() {
    const $points1 = document.querySelector('.score-points-1')
    const $points2 = document.querySelector('.score-points-2')

    if(game.currentMove == 'X') {
        game.player1points++
        $points1.textContent = game.player1points
    } else if(game.currentMove == 'O') {
        game.player2points++
        $points2.textContent = game.player2points
    }
}

function changeWinnerName() {
    const $input1 = document.querySelector('.player-field')
    const $input2 = document.querySelector('.player-field-2')

    let winnerName = game.currentMove === 'X' ? $input1.value : $input2.value
    $winnerName.textContent = `O vencedor é ${winnerName}`
}
const $restart = document.querySelector('.button-white')

$restart.addEventListener('click', function() {
    const $fieldList = document.querySelectorAll('.scenery-field-big')
    $fieldList.forEach(field => {
        field.textContent = ''
    })
})

for(let i = 0; i < 9; i++) {
    const $field = getField(i)

    $field.addEventListener('click', function() {
        $field.textContent = game.currentMove
        console.log(getWinner())
        toggleCurrentMove()
        clearBoard()
    })

}