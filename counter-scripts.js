
const counterEl = document.getElementById('counter')
const totalCount = document.getElementById('total')
let count = 0

function increase (){
    console.log('incrase here')
    // count = count + 1
    count += 1
    counterEl.innerHTML = count
}

function decrease (){
    console.log('decrease here')
    // count = count - 1
    count -= 1
    counterEl.innerHTML = count
}

function reset(){
    console.log('reset here')
    count =0
    counterEl.innerHTML = count

}

function printTotal(){
    let countStr = count + ' - '
    totalCount.innerHTML += countStr
}