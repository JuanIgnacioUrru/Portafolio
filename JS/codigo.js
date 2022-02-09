/*Menu*/ 

const primaryNav= document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-toggle-nav');



function openCloseMenu() {
  const visibility= primaryNav.getAttribute('data-visible');
  console.log(visibility)

  if(visibility==="false"){
    primaryNav.setAttribute('data-visible',true);
    navToggle.setAttribute('aria-expanded',true);

  }else{
    primaryNav.setAttribute('data-visible',false);
    navToggle.setAttribute('aria-expanded',false);
  }
};

const closeMenu = ()=>{
  primaryNav.setAttribute('data-visible',false);
  navToggle.setAttribute('aria-expanded',false);
}

navToggle.addEventListener('click',openCloseMenu);




//Indicador de menu //
const sections = document.querySelectorAll('.section');
const items = document.querySelectorAll('li');

//Asignacion de observer a las secciones
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      closeMenu(); //para cerrar el menu en la version mobile
      let numSection = entry.target.getAttribute('nav-ref');
      items.forEach(item=>{
        item.classList.remove('active');
        console.log(item);
        if(item.getAttribute('id')===numSection)item.classList.add('active');
      });
    }
  })},
  {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
  })

sections.forEach(section => observer.observe(section));

//animation
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
