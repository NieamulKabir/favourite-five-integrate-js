let cart = []
function addToCart(element) {
    if (cart.length === 5) {
        return cart;
    }
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const players = {
        playerName: playerName
    }
    cart.push(players)
    element.parentNode.children[0].disabled = true
    displayPlayers()

}

function displayPlayers() {
    const totalPlayer = document.getElementById("total-player");
    totalPlayer.innerText = cart.length;

    const cartContainer = document.getElementById("player-cart");
    cartContainer.textContent = '';

    for (let i = 0; i < cart.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `
        
        <p class='flex justify-start font-bold text-xl text-purple-700'>${i+1}. ${cart[i].playerName}</p>
       
      
                `;
        cartContainer.appendChild(li);
    }
}

function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId)
    const inputAmount = inputField.value

    return inputAmount
}

function getElementValueById(element) {
    const elementField = document.getElementById(element)
    const elementAmount = elementField.innerText

    return elementAmount
}
function setTextElementById(elementId, newvalue) {
    const textValue = document.getElementById(elementId)
    textValue.innerText = newvalue
}

document.getElementById('calculate-button').addEventListener('click', function () {

    const perPlayerInputAmount = getInputValueById('per-palyer-input')
    if (perPlayerInputAmount == 'number' || perPlayerInputAmount > 0) {
        const playerTotalExp = Number(cart.length * perPlayerInputAmount)
        const playerExpenseTotal = getElementValueById('player-expenses')
        setTextElementById('player-expenses', playerTotalExp)
    }


})

document.getElementById('calculate-total-button').addEventListener('click', function () {

    const manegerInputAmount = getInputValueById('manager-input')
    const coachInputAmount = getInputValueById('coach-input')
    if ((manegerInputAmount > 0 && coachInputAmount > 0) || (manegerInputAmount == 'number' && coachInputAmount == 'number')) {
        const playerExpenseTotal = getElementValueById('player-expenses')
        const totalAmount = getElementValueById('total')
        const total = Number(totalAmount) + Number(playerExpenseTotal) + Number(manegerInputAmount) + Number(coachInputAmount)
        setTextElementById('total', total)
    }


})








// document.getElementById('calculate-button').addEventListener('click', function () {
//     const perPlayerInput = document.getElementById('per-palyer-input')
//     const perPlayerInputAmount = perPlayerInput.value
//     // // console.log(perPlayerInputAmount);
//     const playerTotalExp = Number(cart.length * perPlayerInputAmount)
//     // console.log(playerTotalExp);
//     const playerExpenseField = document.getElementById('player-expenses')
//     const playerExpenseTotal = playerExpenseField.innerText
//     playerExpenseField.innerText = playerTotalExp
//     console.log(playerExpenseTotal);

// })


// document.getElementById('calculate-total-button').addEventListener('click', function () {
//     const manegarInputField = document.getElementById('manager-input')
//     const manegerInputAmount = manegarInputField.value

//     const coachInputField = document.getElementById('coach-input')
//     const coachInputAmount = coachInputField.value

//     const playerExpenseField = document.getElementById('player-expenses')
//     const playerExpenseTotal = playerExpenseField.innerText

//     const totalFiled = document.getElementById('total')
//     const totalAmount = totalFiled.innerText

//     const total = Number(totalAmount) + Number(playerExpenseTotal) + Number(manegerInputAmount) + Number(coachInputAmount)
//     totalFiled.innerText = total

// })