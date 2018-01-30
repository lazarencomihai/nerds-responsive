 var navMain = document.querySelector('.nav-menu');
 var navToggle = document.querySelector('.main-nav__toggle');
 var closeModal = document.querySelector('.btn-close');
 var openModal = document.querySelector('.write-us');


openModal.addEventListener('click',function(e){
	e.preventDefault();
document.querySelector('.message-us').style.display = "block";
});

 closeModal.addEventListener('click',function(){
 	document.querySelector('.message-us').style.display = "none";
 });

  navMain.classList.remove('menu-nojs');
  console.log(1);

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('nav-menu--closed')) {
      navMain.classList.remove('nav-menu--closed');
      navMain.classList.add('nav-menu--opened');
    } else {
      navMain.classList.add('nav-menu--closed');
      navMain.classList.remove('nav-menu--opened');
    }
  });