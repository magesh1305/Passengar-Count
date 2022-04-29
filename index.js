// document.getElementById("count-el").innerHTML = 5

// function increment(){
//     alert("Button is Clicked")
// }
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

// function save() {
    
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     // 3. Render the variable in the saveEl using innerText
//     // NB: Make sure to not delete the existing content of the paragraph
//     let countEl = count
//     let dash = "-"
//     let save = countEl + dash
//     saveEl.innerText += save
//     console.log(count)
// }
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 //for making value 0 after clicking save button
    count = 0
}

