let msg = document.getElementById("msg")
let img = document.getElementById("img")
let titulo = document.getElementById("titulo")
let data = new Date()
let hora = data.getHours()

function carregar() {
  if (hora >= 0 && hora < 12) {
    img.src = "src/imagens/manha.png"
    msg.innerHTML = `Agora são ${hora} horas`
    document.body.style.background = "#95e3ed"
    titulo.innerHTML = "BOM DIA 🏙️"

  } else if (hora >= 12 && hora <= 18) {
    img.src = "src/imagens/tarde.png"
    msg.innerHTML = `Agora são ${hora} horas`
    document.body.style.background = "#d99568"
    titulo.innerHTML = "BOA TARDE 🌇"

  } else {
    img.src = "src/imagens/noite.png"
    msg.innerHTML = `Agora são ${hora} horas`
    document.body.style.background = "#40719c"
    titulo.innerHTML = "BOA NOITE 🌃"
  }
}

function newTime() {
  data = new Date()
  hora = data.getHours()
  let minutos = data.getMinutes()
  let segundos = data.getSeconds()

  let hours = document.getElementById('hours');
  hours.textContent = digitos(hora)
  
  let minutes = document.getElementById('minutes');
  minutes.textContent = digitos(minutos)
  
  let seconds = document.getElementById('seconds');
  seconds.textContent = digitos(segundos)
  
}

function digitos(digit) {
  return digit < 10 ? '0'+digit : digit
}

newTime()
setInterval(newTime, 1000)
