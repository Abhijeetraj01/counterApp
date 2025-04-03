
// another method
// const increment= () => {
//     let count = parseInt(counterDisplay.innerText)
//     count = count+1
//     counterDisplay.innerText = count 
// }

// const decrement= () => {
//     let count = parseInt(counterDisplay.innerText)
//     count = count-1
//     counterDisplay.innerText = count 
// }

// for increment
const counterDisplay = document.getElementById('counter')
function increment() {
    let count = parseInt(counterDisplay.innerText)
    count = count+1
    counterDisplay.innerText = count 
}

// for decrement
function decrement() {
    let count = parseInt(counterDisplay.innerText)
    count = count-1
    counterDisplay.innerText = count 
}

//for reset
function reset(){
    let count = parseInt(counterDisplay.innerText)
    count = 0
    counterDisplay.innerText = count 
}
