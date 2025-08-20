const popup = document.getElementById("popup");
const icinsBurger = document.getElementById("icinsBurger");
let open = false;


function openBurger(){
    if (open) {
    popup.style.display = "none";
    open=false;
    }
    else {
    popup.style.display = "flex";
    open=true;
    }
     
}

function darckTheme(){ 
    let body = document.getElementById("body") 
    body.classList.toggle("dark") }

const track = document.querySelector('.slidder_track');
const prevBtn = document.querySelector('.main_contei_slidder_arrow.prev');
const nextBtn = document.querySelector('.main_contei_slidder_arrow.next');

let position = 0;   // смещение в px
const cardWidth = 320; // ширина карточки + отступ (подогнать!)
const visibleCards = window.innerWidth < 768 ? 1 : 3; // если мобилка — показываем 1, иначе 3

nextBtn.addEventListener('click', () => {
  const maxPosition = -(track.children.length - visibleCards) * cardWidth;
  if (position > maxPosition) {
    position -= cardWidth;
    track.style.transform = `translateX(${position}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (position < 0) {
    position += cardWidth;
    track.style.transform = `translateX(${position}px)`;
  }
});    