import {projects} from '../data/projects.js';

document.addEventListener("DOMContentLoaded", () => {
  const containerElement=document.querySelector('.projects');
  displayProjects(containerElement);
  document.querySelector('.theme-item').addEventListener('click',theme);
  const scrollContainer = document.querySelector('.wrapper');

  // Create a ScrollReveal instance that listens to the .wrapper scroll
  const sr = ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: 800,
    easing: 'ease-out',
    reset: false,
    container: scrollContainer
  });

  // Reveal your project cards in order, staggered 200ms
  sr.reveal('.proj', {
    interval: 200
  });

  sr.reveal('.skills',{
    origin: 'right',
  })
  sr.reveal('.contact input',{
    origin:'left',
  })
});




function theme(){
  const darkBtn=document.querySelector('#darkBtn');
  const lightBtn=document.querySelector('#lightBtn');


  document.body.classList.toggle('light');

  if(document.body.classList.contains('light')){
    darkBtn.style.display="block";
    lightBtn.style.display="none";
  }
  else{
    darkBtn.style.display="none";
    lightBtn.style.display="block";
  }
 
}


const roleName = "Web Developer";
const speed = 100;      // typing speed per letter
const delay = 1500;     // wait after full word before restarting
const roleElement = document.querySelector(".js-role");

let i = 0;
let isDeleting = false;

function typeWriterLoop() {
  if (!isDeleting) {
    roleElement.textContent += roleName.charAt(i);
    i++;
    if (i < roleName.length) {
      setTimeout(typeWriterLoop, speed);
    } else {
      // Finished typing, wait before deleting
      setTimeout(() => {
        isDeleting = true;
        typeWriterLoop();
      }, delay);
    }
  } else {
    roleElement.textContent = roleElement.textContent.slice(0, -1);
    i--;
    if (i > 0) {
      setTimeout(typeWriterLoop, speed);
    } else {
      // Finished deleting, start typing again
      isDeleting = false;
      setTimeout(typeWriterLoop, speed);
    }
  }
}

typeWriterLoop(); // Start the animation



// ScrollReveal animations

const menuItems = document.querySelectorAll('.nav .item');

menuItems.forEach(item=>{
  item.addEventListener('click',()=>{
    menuItems.forEach(item=>item.classList.remove('active'),
    item.classList.add('active')
    )
  });
});



function displayProjects(containerElement){
  let elementHTML='';

    projects.forEach((project)=>{
      elementHTML+=`<div class="project proj">
            <img src="${project.img}" alt="">
            <h3>${project.name}: <span class="colored">${project.descp}</span></h3>
            <div class="link">
              <div class="web-link">
                <a href="${project.weblink}" target="_blank"><ion-icon name="share-outline"></ion-icon></a>
              </div>
              <div class="code-link">
                <a href="${project.codelink}"><ion-icon name="code-slash-outline"></ion-icon></a>
              </div>
            </div>
          </div>`
    });

    containerElement.innerHTML=elementHTML;
}

document.querySelector(
  '.resume').addEventListener('click',(e)=>{
    e.preventDefault(); // prevent navigation if using #
    alert("Resume will be added shortly");
  })