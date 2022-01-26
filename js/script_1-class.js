window.onload = function () {
	var btn_prev = document.getElementById('prev');
	var btn_next = document.querySelector('.next');
	var numb = document.querySelector('.number');
	var text = document.querySelector('.txt');


	/*var imTest = document.querySelectorAll('.photos>*');
	console.log(imTest);*/
	var images = document.querySelectorAll('.im');
	var imgN = 0;

	var dotsContainer = document.querySelector('.dots');
	for (var i = images.length - 1; i >= 0; i--) {
		dotsContainer.innerHTML += '<div class="dot"></div>';
	}
	var dots = document.querySelectorAll('.dot');
	dots[0].className += ' red';

	function sliderMove(n) {
		images[imgN].classList.toggle('shown');
		dots[imgN].classList.toggle('red');

		switch (n) {
			case 'n':
				imgN += 1;
				if (imgN > images.length - 1) {
					imgN = 0;
				}
				break;
			case 'p':
				imgN -= 1;
				if (imgN < 0) {
					imgN = images.length - 1;
				}
				break;
			default:
				if (typeof (n) == 'number') {
					imgN = n;
				}
		}

		images[imgN].classList.toggle('shown');
		dots[imgN].classList.toggle('red');
		numb.innerHTML = (imgN + 1) + ' / ' + images.length;
		text.innerHTML = images[imgN].getAttribute('text');
	}

	btn_prev.onclick = function () {
		sliderMove('p');
	}

	btn_next.onclick = function () {
		sliderMove('n');
	}

	for (dot of dots) {
		dot.onclick = function (e) {
			var i = 0;
			element = e.target;
			while (element = element.previousElementSibling) {
				i++;
			}
			sliderMove(i);
		}
	}
}