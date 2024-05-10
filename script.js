function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Um homem tmb louco, so que de oculos")
  } else {
    // se não tiver, cntinua normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Um homem louco")
  }
}
