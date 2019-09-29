// $(document).ready(function(){

// 	$('.tab-pane:not(:first)').hide();


// 	$('.nav-item').click(function(event) {
// 		event.preventDefault();

// 		$('.tab-pane').hide();
// 		$('.nav-item').removeClass('active');

// 		$(this).addClass('active');

// 		var target = $(this).attr('href');
// 		// console.log(target);

// 		// $(target).fadeIn();
// 		$(target).show();
// 	});
// });

(function() {
	'use strict';

	var tabPane = document.querySelectorAll('.tab-pane');
		// console.log(tabPane);
		for (var i = 1; i < tabPane.length; i++) {
			tabPane[i].style.display = 'none';
		}


		var navItem = document.querySelectorAll('.nav-item');

		for (var i = 0; i < navItem.length; i++) {
			navItem[i].addEventListener('click', function(event) {
				// alert('ok');
				event.preventDefault();

				var tabPane = document.querySelectorAll('.tab-pane');
					
					for (var i = 0; i < tabPane.length; i++) {
						tabPane[i].style.display = 'none';
					}

				var navItem1 = document.querySelectorAll('.nav-item');
					
					for (var i = 0; i < navItem1.length; i++) {
						navItem1[i].classList.remove('active');
					}

				this.className += ' active';

				// var target = this.hasAttribute('href');
				// console.log(target);

				// // target.style.display = 'block'

				// for (var i = 0; i < target.length; i++) {
				// 	target[i].style.display = 'block';	
				// }


				// var tabPane1 = document.querySelectorAll('.tab-pane');
				// 	// console.log(tabPane);
				// 	for (var i = 1; i < tabPane1.length; i++) {
				// 		tabPane1[i].style.display = 'block';
				// 	}

				// target.style.display = 'block';	

				// if (target) {
				// 	this
				// }

				// var tabPane1 = document.querySelectorAll('.tab-pane');
				// // console.log(tabPane);
				// for (var i = 0; i < tabPane.length; i++) {
				// 	tabPane[i].style.display = 'block';
				// }
				
				// var id = event.currentTarget.getAttribute('href');
				// console.log(id);
				// for (var i = 0; i < tabPane1.length; i++) {


				// 	tabPane1[i].style.display = 'block';
				// 

				var tabPane1 = document.querySelectorAll('.tab-pane');
				for (var i = 0; i < tabPane1.length; i++) {


					var id = event.currentTarget.getAttribute('href');

					if (tabPane1[i].hasAttribute('href') == id) {
						alert('ok');
					}

					console.log(id);
				}

				// var tabPane1 = document.querySelectorAll('.tab-pane');

				// var id = event.currentTarget.getAttribute('href');

				// if (tabPane1.attr('href') == id) {
				// 	alert('ok');
				// }




			});
		}

		// .addEventListener('click', function(event) {
		// 	for (var i = 0; i)

		// 	alert('ok');
		// });
		// console.log(document.querySelectorAll('.nav-item'));

		// console.log(navItem);
					// if (navItem.length > 0) {
					// 	navItem[i].classList.remove('active');
					// }

					// if (navItem.length > 0) {
					// 	if (navItem.classList.contains('active')) {
					// 		this.classList.remove('active');
					// 	}
					// }

// console.log(navItem[i].classList.contains('active'));
					// navItem.forEach(console.log('1'));

					// if (navItem[i].classList.contains('active')) {
					// 		this.classList.remove('active');
					// 	}


	// function firstPaneShow(item) {

	// 	var tabPane = document.querySelectorAll('.tab-pane');
	// 	console.log(tabPane);

	// 	for (var i = 1; i < tabPane.length; i++) {
	// 		tabPane[i].style.display = 'none';
	// 	}
	// 	item.style.display = '';
	// };

	// firstPaneShow();












			// function firstPaneShow(item) {

	// 	var tabPane = document.querySelectorAll('.tab-pane');
	// 	console.log(tabPane);

	// 	for (var i = 1; i < tabPane.length; i++) {
	// 		tabPane[i].style.display = 'none';
	// 	}
	// 	item.style.display = '';
	// };

	// firstPaneShow();


})();