const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circls = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener("click", () => {
  currentActive++

  if (currentActive > circls.length) {
    currentActive = circls.length
  }

  update()
})
prev.addEventListener("click", () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circls.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active")
    } else {
      circle.classList.remove("active")
    }
  })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circls.length - 1) * 100 + '%'
    
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circls.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
