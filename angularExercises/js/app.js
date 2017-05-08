
(function(){
	var app = angular.module('store', []);

	var books = [
		{
			id: '1',
			title: 'Testigo de cargo',
			author: 'Agatha Christie',
			price: 100,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia. Amet, consectetur adipisicing elit. Explicabo, harum nostrum placeat! Suscipit nemo, numquam tempora dolorem alias fugit necessitatibus ipsam hic tenetur architecto? Cum temporibus laboriosam aliquid, sequi fugiat.',
			editorial: 'Planeta',
			year: 1972,
			pages: 480,
			images:[
				{	
					full: 'public/testigo.jpg'
				}
			],
			reviews: [
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'},
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'}
			]
		},
		{
			id: '2',
			title: 'La piedra lunar',
			author: 'Wilkie Collins',
			price: 95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia. Amet, consectetur adipisicing elit. Ullam laboriosam eum, magni consectetur sit sapiente. Atque temporibus repellat totam, obcaecati praesentium, fuga aperiam rem. Eaque, accusantium, fuga! Officia quia, inventore!',
			editorial: 'Nueva alanza',
			year: 1979,
			pages: 550,
			images:[
				{	
					full: 'public/lunar.jpg'
				}
			],
			reviews: [
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'},
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'}
			]
		},
		{	
			id: '3',
			title: 'El asesinato de Roger Ackroyd',
			author: 'Agatha Christie',
			price: 90,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia. Amet, consectetur adipisicing elit. Magni natus labore dolores minima unde, ex atque et quas id error, eaque maxime magnam voluptatum assumenda pariatur sed cupiditate quis explicabo.',
			editorial: 'Planeta',
			year: 1984,
			pages: 480,
			images:[
				{
					full: 'public/asesinato.jpg'
				}
			],
			reviews: [
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'},
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'}
			]
		},
		{	
			id: '4',
			title: 'El halcón maltés',
			author: 'Dashiell Hammett',
			price: 85,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia. Amet, consectetur adipisicing elit. Aut autem deserunt iste atque nam velit sed nesciunt unde? Obcaecati incidunt repudiandae ab, eum est doloremque deserunt corporis laborum suscipit ducimus.',
			editorial: 'Astilla',
			year: 1987,
			pages: 450,
			images:[
				{
					full: 'public/halcon.jpg'
				}
			],
			reviews: [
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'},
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'}
			]
		},
		{	
			id: '5',
			title: 'El nombre de la rosa',
			editorial: 'Puerto escondido',
			price: 80,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia. Amet, consectetur adipisicing elit. Corrupti asperiores amet, ipsam! Neque ea, repellendus possimus, quia repellat sit consectetur qui nesciunt. Quod deserunt, explicabo repellendus ab perspiciatis quia corporis.',
			author: 'Umberto Eco',
			year: 1967,
			pages: 600,
			images:[
				{
					full: 'public/rosa.jpg'
				}
			],
			reviews: [
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'},
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'}
			]
		},
		{	
			id: '6',
			title: 'El silencio de los corderos',
			author: 'Thomas Harris',
			price: 85,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia. Amet, consectetur adipisicing elit. Officia omnis amet vitae nobis autem nisi, laudantium numquam laboriosam reiciendis suscipit voluptate vel excepturi, veritatis alias ipsam neque, cum aperiam voluptas!',
			editorial: 'Tusquets',
			year: 1998,
			pages: 700,
			images:[
				{
					full: 'public/corderos.jpg'
				}
			],
			reviews: [
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'},
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'}
			]
		},
		{	
			id: '7',
			title: 'El sueño eterno',
			author: 'Raymond Chandler',
			price: 100,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repellendus inventore mollitia. Amet, consectetur adipisicing elit. Animi molestiae ipsum deserunt eligendi sit aut odio repudiandae quis, a recusandae, provident adipisci numquam molestias officiis amet laboriosam doloribus natus itaque.',
			editorial: 'Horizon',
			year: 1945,
			pages: 543,
			images:[
				{
					full: 'public/sueño.jpg'
				}
			],
			reviews: [
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'},
				{stars: 5, body: 'I love this product', user: 'tom@gmail.com'}
			]
		}
	];

	app.controller('StoreController', function(){
		this.products = books;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		//Funciones para el lado del cliente
		this.selectTab = function(setTab){
			this.tab = setTab;
		}

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});

})();
