const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle("active");
};

menu.addEventListener('click', mobileMenu);

// Close Mobile Menu
const hidemobileMenu = () => { 
	const menuBars = document.querySelector('.is-active');
	if (window.innerWidth <= 768 && menuBars) {
	  menu.classList.toggle('is-active');
	  menuLinks.classList.remove("active");
	}
  };
  
  menuLinks.addEventListener('click', hidemobileMenu);
  navLogo.addEventListener('click', hidemobileMenu);