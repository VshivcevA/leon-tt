let wheel = document.querySelector('.wheel')
let button = wheel.querySelector('.inner-circle__button')
let popup = document.querySelector('.popup')
let popupOverlay = popup.querySelector('.popup__overlay')
let popupWin = popup.querySelector('.popup__win')
let popupLose = popup.querySelector('.popup__lose')
let popupButton = popup.querySelector('.popup__button')

let popupOpenWin = ()=> {
  popup.classList.remove('hidden')
  popupWin.classList.remove('hidden')
}
let popupOpenLose = ()=> {
  popupWin.classList.add('hidden')
  popupLose.classList.remove('hidden')
}
let popupClose = ()=> {
  popup.classList.add('hidden')
  popupWin.classList.add('hidden')
  popupLose.classList.add('hidden')
}
button.addEventListener('click', popupOpenWin)
popupOverlay.addEventListener('click', popupClose)
popupButton.addEventListener('click', popupOpenLose)
//нужно добавить слушатели на клавиши
