const saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
const resetEl = document.getElementById("reset-el")

let count = 0

window.onload = function() {
    // Load count from local storage when the page loads
    const savedCount = localStorage.getItem("count")
    const savedHistory = localStorage.getItem("history")

    if (savedCount !== null) {
        count = JSON.parse(savedCount)
        countEl.textContent = count
    }
    if (savedHistory !== null) {
        saveEl.textContent = "Counter: " + savedHistory
    } else {
        saveEl.textContent = "Counter: "
    }
}

function increment() {
    count += 1
    countEl.textContent = count
    localStorage.setItem("count", JSON.stringify(count)) // Save count to local storage
}

function decrement() {
    if (count > 0) {
        count -= 1
        countEl.textContent = count
        localStorage.setItem("count", JSON.stringify(count))
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    localStorage.setItem("count", JSON.stringify(count))
    const currentHistory = saveEl.textContent.replace("Counter: ", "") //mengubah data lebih baik untuk save
    localStorage.setItem("history", currentHistory) // Save history to local storage
}

function reset() {
    saveEl.textContent = "Counter: "
    countEl.textContent = 0
    count = 0
    localStorage.setItem("count", JSON.stringify(count))
}
