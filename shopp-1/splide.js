

document.addEventListener( 'DOMContentLoaded', function () {

	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 80,
		fixedHeight : 80,
		width       : 220,
		gap         : 10,
		cover       : false,
		isNavigation: true,
		autoWidth   : false,
        rewind      : true,
        pagination  : false,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
	} ).mount();
	

	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : false,
        
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();



document.querySelectorAll('.primary-01').forEach(carousel => new Splide( carousel, {
  		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : false,
}).mount());

document.querySelectorAll('.secondary-01').forEach(carousel => new Splide( carousel, {
  		fixedWidth  : 80,
		fixedHeight : 80,
		width       : 350,
		gap         : 10,
		cover       : false,
		isNavigation: true,
		autoWidth   : false,
        rewind      : true,
        pagination  : false,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
}).mount());


// var secondaryTest = new Splide('.secondary-01' , {

// 	fixedWidth  : 80,
// 		fixedHeight : 80,
// 		width       : 350,
// 		gap         : 10,
// 		cover       : false,
// 		isNavigation: true,
// 		autoWidth   : false,
//         rewind      : true,
//         pagination  : false,
// 		focus       : 'center',
// 		breakpoints : {
// 			'600': {
// 				fixedWidth: 66,
// 				height    : 40,
// 			}
// 		},
// }) .mount();

// var primaryTest = new Splide('.primary-01' , {

// 		type       : 'fade',
// 		heightRatio: 0.5,
// 		pagination : false,
// 		arrows     : false,
// 		cover      : false,
        
// 	} ); // do not call mount() here.
	
// 	primaryTest.sync( secondaryTest ).mount();


// })

// })














} );


