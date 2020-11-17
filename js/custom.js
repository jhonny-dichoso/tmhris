		//SLIDE MENU IN MOBILE
		function classToggle() {
			var nav = document.querySelector('nav');
			nav.classList.toggle('toggle-open');
		}
		document.querySelector('.menu-toggle').addEventListener('click', classToggle);


		//SHOW BACK TO TOP
		var myScrollFunc = function() {
		var y = window.scrollY;
			if (y >= 20) {
				document.querySelector('.bck-top').style.display = 'block';
			} else {
				document.querySelector('.bck-top').style.display = 'none';
			}
		};

		window.addEventListener("scroll", myScrollFunc);


		//ICON ANIMATION
		function iconAnimate() {
			this.classList.toggle('open');
		}
		document.querySelector('#nav-icon3').addEventListener('click', iconAnimate);

        //UNCHECKING/CHECKING CHECKBOX IN MOBILE FOR ACCORDION
       	var chk = function (){
			if (window.innerWidth <= 992){
				document.getElementById("tab-mytimeoff").checked = false;
				document.getElementById("tab-emptimeoff").checked = false;
				document.getElementById("tab-events").checked = false;
				document.getElementById("tab-announcement").checked = false;
			} else {
				document.getElementById("tab-mytimeoff").checked = true;
				document.getElementById("tab-emptimeoff").checked = true;
				document.getElementById("tab-events").checked = true;
				document.getElementById("tab-announcement").checked = true;
			}
        }
        
        window.onload = chk;
        window.onresize = chk;

        
