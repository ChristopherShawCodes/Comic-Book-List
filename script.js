const form = document.getElementById("form")
const input = document.getElementById("input")
const comicsUL = document.getElementById("comics")

const comics = JSON.parse(localStorage.getItem("comics"))

if (comics) {
  comics.forEach((comic) => addcomic(comic))
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  addcomic()
})

function addcomic(comic) {
  let comicText = input.value

  if (comic) {
    comicText = comic.text
  }
  // console.log(comicText)

  if (comicText) {
    const comicEl = document.createElement("li")
    if (comic && comic.completed) {
      comicEl.classList.add("completed")
    }

    comicEl.innerText = comicText

    comicEl.addEventListener("click", () => {
      comicEl.classList.toggle("completed")
      updateLS()
    })

    comicEl.addEventListener("dblclick", (e) => {
      e.preventDefault()
      comicEl.remove()
      updateLS()
    })

    comicsUL.appendChild(comicEl)

    input.value = ""

    updateLS()
  }
}

function updateLS() {
  comicsEl = document.querySelectorAll("li")

  const comics = []

  comicsEl.forEach((comicEl) => {
    comics.push({
      text: comicEl.innerText,
      completed: comicEl.classList.contains("completed"),
    })
  })

  localStorage.setItem("comics", JSON.stringify(comics))
}

// localStorage.setItem('name', JSON.stringify(obj))
// JSON.parts(localStorage.getItem(obj))
