document.addEventListener("DOMContentLoaded", function(){
	var photo = document.getElementsByClassName('mySlides');
	var slider = document.getElementById('slider');
	var burger = document.querySelector('.Trigram');
	var elements = document.querySelectorAll('.elem');
	var hold;
	var count = 0;
	var myOpacity = 1;
	var images = ['./images/image1.png', './images/image2.png', './images/image3.png'];
	var myWidth = document.documentElement.clientWidth;

	for (var i = 0; i < photo.length; i++)
		(function(i){
			photo[i].addEventListener("click", function(){
				if (i == 0 && myOpacity >= 1) {
					hold = photo[i].src;
					let hide = setInterval(function(){
						if(myOpacity <= 0){
							clearInterval(hide);
							photo[i].src = photo[i+1].src;
							slider.src = hold;
							let show = setInterval(function(){
								if(myOpacity >= 1){
									clearInterval(show);
								} else {
									myOpacity = myOpacity + 0.08;
									photo[i].style.opacity = myOpacity;
									photo[i+1].style.opacity = myOpacity;
								}
							}, 75);
						} else {
							myOpacity = myOpacity - 0.08;
							photo[i].style.opacity = myOpacity;
							photo[i+1].style.opacity = myOpacity;
						}
					}, 75);
				} else if (i == photo.length - 1 && myOpacity >= 1){
					hold = photo[i].src;
					myOpacity = 1;
					let hide = setInterval(function(){
						if(myOpacity <= 0){
							clearInterval(hide);
							photo[i].src = photo[i-1].src;
							slider.src = hold;

							let show = setInterval(function(){
								if(myOpacity >= 1){
									clearInterval(show);
								} else {
									myOpacity = myOpacity + 0.08;
									photo[i].style.opacity = myOpacity;
									photo[i-1].style.opacity = myOpacity;
								}
							}, 75);
						} else {
							myOpacity = myOpacity - 0.08;
							photo[i].style.opacity = myOpacity;
							photo[i-1].style.opacity = myOpacity;
						}
					}, 75);
				} else if  (i == 1 && myWidth <= 414 && myOpacity >= 1){
					count++;
					if (count >= images.length) {
						count = 0;
					}
					let hide = setInterval(function(){
						if(myOpacity <= 0){
							clearInterval(hide);
							slider.src = images[count];
							let show = setInterval(function(){
								if(myOpacity >= 1){
									clearInterval(show);
								} else {
									myOpacity = myOpacity + 0.08;
									slider.style.opacity = myOpacity;
								}
							}, 75);
						} else {
							myOpacity = myOpacity - 0.08;
							slider.style.opacity = myOpacity;
						}
					}, 75);
					count++;
					if (count == photo.length) {
						count = 0;
					}
				}
			});
		})(i);

		burger.addEventListener("click", function(){
			if (elements[0].style.display != 'block') {
				for (var i = 0; i < elements.length; i++) {
					elements[i].style.display = 'block';
				}
			} else {
				for (var i = 0; i < elements.length; i++) {
					elements[i].style.display = 'none';
				}
			}
		});
	});
