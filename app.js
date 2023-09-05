// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


let img =document.querySelector('.preloader');
let btn = document.querySelector('.switch-btn');
let vedio = document.querySelector('.video-container');



window.addEventListener('DOMContentLoaded', function(){
img.classList.add('hide-preloader')
});



btn.addEventListener('click', function(){
	if(vedio.paused){
		vedio.play();
		btn.classList.remove('slide');
	}
	else{
		vedio.pause();
		btn.classList.add('slide');
	}
})