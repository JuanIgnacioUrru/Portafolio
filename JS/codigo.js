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

