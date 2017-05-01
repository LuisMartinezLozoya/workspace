var app = angular.module('store', []);

(function(){
	var gem	={
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia.',
		canPurchase: false,
		soldOut: true
	}

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia.',
			images:[
				{	
					full: 'aquuamarine.jpg',
					thumb: 'aquuamarine.jpg'
				}
			]
		},
		{
			name: 'Ruby',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia.',
			images:[
				{	
					full: 'aquuamarine.jpg',
					thumb: 'aquuamarine.jpg'
				}
			]
		},
		{
			name: 'Safiro',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia.',
			images:[
				{
					full: 'aquuamarine.jpg',
					thumb: 'aquuamarine.jpg'
				}
			]
	];

	app.controller('StoreController', function(){
		this.products = gems;
	})

})();
