const navMenu = document.querySelector('.nav'),
	openNav = document.querySelector('.open-nav'),
	closeNavByClickOutside = document.querySelector('.menu-overlay'),
	photosSection = document.querySelectorAll('.photo-sec .container img'),
	mediaSize = 767;

openNav.addEventListener('click', toggleNav);
closeNavByClickOutside.addEventListener('click', toggleNav);

function toggleNav() {
	navMenu.classList.toggle('active');
	closeNavByClickOutside.classList.toggle('active');
}

window.onscroll = function () {
	if (navMenu.classList.contains('active')) {
		navMenu.classList.remove('active');
	}
};

window.addEventListener('resize', () => {
	if (window.innerWidth <= mediaSize) {
		photosSection[0].setAttribute('src', './images/mobile/image-gallery-milkbottles.jpg');
		photosSection[1].setAttribute('src', './images/mobile/image-gallery-orange.jpg');
		photosSection[2].setAttribute('src', './images/mobile/image-gallery-cone.jpg');
		photosSection[3].setAttribute('src', './images/mobile/image-gallery-sugar-cubes.jpg');
	}
});
