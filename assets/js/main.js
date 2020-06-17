let x = document.getElementById("year")
let y
function howOld() {
    y = 2020 - x.value
    document.getElementById("result").value = y
}