  //Navbar
  let bar_icon = document.querySelector('.bar-icon');
  let navbar = document.querySelector('.navbar');
  let enlaces = document.querySelector('.menu-lista');
  let contador = true;

  bar_icon.addEventListener('click', function(){
  this.classList.toggle('active');

  if (contador == true) {
      enlaces.style.width = '100%';
      enlaces.style.overflow = 'hidden';
      enlaces.style.transition = '0.5s';

          navbar.classList.toggle('active');
          document.getElementsByTagName("html")[0].style.overflow = 'hidden';

      contador = false;

  }else{
      contador = true;
      enlaces.style.width = '0%';
      enlaces.style.overflow = 'hidden';
      enlaces.style.transition = '0.5s';

          navbar.classList.toggle('active');    
          document.getElementsByTagName("html")[0].style.overflow = 'auto';
          
      
  }
});

