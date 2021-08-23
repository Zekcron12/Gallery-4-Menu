const NAV = document.querySelector('.container-nav');
const ACTIVE = document.querySelector('.toggle');
const ICON = document.getElementById('IDicon');

ACTIVE.onclick = function() {
	this.classList.toggle('active');
	NAV.classList.toggle('active');
	if (ICON.classList.contains('fa-angle-right') == true) {
		ICON.classList.remove('fa-angle-right');
		ICON.classList.add('fa-angle-left');
	} else {
		ICON.classList.remove('fa-angle-left');
		ICON.classList.add('fa-angle-right');
	}
};