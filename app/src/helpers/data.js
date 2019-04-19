/* eslint-disable import/prefer-default-export */
export const books = [
	{
		title: 'Practical MongoDB',
		subtitle: 'Architecting, Developing, and Administering MongoDB',
		isbn13: '9781484206485',
		price: '$32.76',
		image: 'https://itbook.store/img/books/9781484206485.png',
		url: 'https://itbook.store/books/9781484206485',
	},
	{
		title: 'The Definitive Guide to MongoDB, 3rd Edition',
		subtitle: 'A complete guide to dealing with Big Data using MongoDB',
		isbn13: '9781484211830',
		price: '$49.99',
		image: 'https://itbook.store/img/books/9781484211830.png',
		url: 'https://itbook.store/books/9781484211830',
	},
	{
		title: 'MongoDB in Action, 2nd Edition',
		subtitle: 'Covers MongoDB version 3.0',
		isbn13: '9781617291609',
		price: '$19.99',
		image: 'https://itbook.store/img/books/9781617291609.png',
		url: 'https://itbook.store/books/9781617291609',
	},
	{
		title: 'Pentaho Analytics for MongoDB',
		subtitle:
			'Combine Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions',
		isbn13: '9781782168355',
		price: '$16.99',
		image: 'https://itbook.store/img/books/9781782168355.png',
		url: 'https://itbook.store/books/9781782168355',
	},
	{
		title: 'Pentaho Analytics for MongoDB Cookbook',
		subtitle:
			'Over 50 recipes to learn how to use Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions',
		isbn13: '9781783553273',
		price: '$28.28',
		image: 'https://itbook.store/img/books/9781783553273.png',
		url: 'https://itbook.store/books/9781783553273',
	},
	{
		title: 'Web Development with MongoDB and NodeJS, 2nd Edition',
		subtitle:
			'Build an interactive and full-featured web application from scratch using Node.js and MongoDB',
		isbn13: '9781785287527',
		price: '$31.99',
		image: 'https://itbook.store/img/books/9781785287527.png',
		url: 'https://itbook.store/books/9781785287527',
	},
	{
		title: 'MongoDB Cookbook, 2nd Edition',
		subtitle:
			'Harness the latest features of MongoDB 3 with this collection of 80 recipes - from managing cloud platforms to app development, this book is a vital resource',
		isbn13: '9781785289989',
		price: '$35.99',
		image: 'https://itbook.store/img/books/9781785289989.png',
		url: 'https://itbook.store/books/9781785289989',
	},
	{
		title: 'Node.js, MongoDB and Angular Web Development, 2nd Edition',
		subtitle: 'The definitive guide to using the MEAN stack to build web applications',
		isbn13: '9780134655536',
		price: '$34.07',
		image: 'https://itbook.store/img/books/9780134655536.png',
		url: 'https://itbook.store/books/9780134655536',
	},
	{
		title: 'The Definitive Guide to MongoDB',
		subtitle: 'The NoSQL Database for Cloud and Desktop Computing',
		isbn13: '9781430230519',
		price: '$8.83',
		image: 'https://itbook.store/img/books/9781430230519.png',
		url: 'https://itbook.store/books/9781430230519',
	},
	{
		title: 'Pro Hibernate and MongoDB',
		subtitle: '',
		isbn13: '9781430257943',
		price: '$49.99',
		image: 'https://itbook.store/img/books/9781430257943.png',
		url: 'https://itbook.store/books/9781430257943',
	},
];

// book,rate,comment is required for reviews

export const reviews = [
	{
		id: 1,
		first_name: 'Berkley',
		last_name: 'Ovington',
		avatar: 'https://robohash.org/maximecumexcepturi.bmp?size=50x50&set=set1',
		comment:
			'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
		rating: 2,
		created: 152474062900,
	},
	{
		id: 2,
		first_name: 'Dougy',
		last_name: 'Salzen',
		avatar: 'https://robohash.org/quiaquidemsunt.bmp?size=50x50&set=set1',
		comment:
			'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
		rating: 4,
		created: 153060852000,
	},
	{
		id: 3,
		first_name: 'Josias',
		last_name: 'Burriss',
		avatar: 'https://robohash.org/corruptietquis.jpg?size=50x50&set=set1',
		comment:
			'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
		rating: 2,
		created: 154026303500,
	},
	{
		id: 4,
		first_name: 'Dyan',
		last_name: 'Pree',
		avatar: 'https://robohash.org/sedadsaepe.bmp?size=50x50&set=set1',
		comment:
			'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
		rating: 4,
		created: 153661508900,
	},
	{
		id: 5,
		first_name: 'Consuelo',
		last_name: 'Basilotta',
		avatar: 'https://robohash.org/dignissimoshicrerum.bmp?size=50x50&set=set1',
		comment:
			'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
		rating: 3,
		created: 152442183800,
	},
	{
		id: 6,
		first_name: 'Yevette',
		last_name: 'Meir',
		avatar: 'https://robohash.org/quibusdamatquevoluptates.png?size=50x50&set=set1',
		comment:
			'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
		rating: 1,
		created: 153846198200,
	},
	{
		id: 7,
		first_name: 'Gayla',
		last_name: 'Van Dale',
		avatar: 'https://robohash.org/errorvelnon.png?size=50x50&set=set1',
		comment: 'Fusce consequat. Nulla nisl. Nunc nisl.',
		rating: 4,
		created: 154566559600,
	},
	{
		id: 8,
		first_name: 'Norina',
		last_name: 'Arnaudot',
		avatar: 'https://robohash.org/enimdebitisest.jpg?size=50x50&set=set1',
		comment: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
		rating: 3,
		created: 154524086500,
	},
	{
		id: 9,
		first_name: 'Curran',
		last_name: 'Albrook',
		avatar: 'https://robohash.org/veldoloremquequam.png?size=50x50&set=set1',
		comment:
			'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
		rating: 4,
		created: 154816481200,
	},
	{
		id: 10,
		first_name: 'Ag',
		last_name: 'Klasen',
		avatar: 'https://robohash.org/eiuseumeos.jpg?size=50x50&set=set1',
		comment: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
		rating: 3,
		created: 152911140200,
	},
	{
		id: 11,
		first_name: 'Sherilyn',
		last_name: 'Dries',
		avatar: 'https://robohash.org/quidoloreum.bmp?size=50x50&set=set1',
		comment:
			'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
		rating: 1,
		created: 154724375300,
	},
	{
		id: 12,
		first_name: 'Janka',
		last_name: 'De Mitri',
		avatar: 'https://robohash.org/repudiandaeeligendisuscipit.jpg?size=50x50&set=set1',
		comment:
			'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
		rating: 5,
		created: 154052200100,
	},
	{
		id: 13,
		first_name: 'Kerri',
		last_name: 'Screen',
		avatar: 'https://robohash.org/assumendaquisveniam.jpg?size=50x50&set=set1',
		comment:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
		rating: 3,
		created: 152638144200,
	},
	{
		id: 14,
		first_name: 'Ibrahim',
		last_name: 'Lisle',
		avatar: 'https://robohash.org/debitisdolorumveritatis.jpg?size=50x50&set=set1',
		comment:
			'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
		rating: 4,
		created: 152753689000,
	},
	{
		id: 15,
		first_name: 'Nataline',
		last_name: 'Logesdale',
		avatar: 'https://robohash.org/ettemporeimpedit.jpg?size=50x50&set=set1',
		comment:
			'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
		rating: 5,
		created: 153499628800,
	},
	{
		id: 16,
		first_name: 'Harriot',
		last_name: 'Doerffer',
		avatar: 'https://robohash.org/totammollitiamagni.bmp?size=50x50&set=set1',
		comment:
			'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
		rating: 5,
		created: 153448732000,
	},
	{
		id: 17,
		first_name: 'Kienan',
		last_name: 'Whayman',
		avatar: 'https://robohash.org/iureautut.png?size=50x50&set=set1',
		comment:
			'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
		rating: 5,
		created: 152615371300,
	},
	{
		id: 18,
		first_name: 'Angelique',
		last_name: 'Lohmeyer',
		avatar: 'https://robohash.org/occaecatidignissimossed.bmp?size=50x50&set=set1',
		comment:
			'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
		rating: 5,
		created: 154443650800,
	},
	{
		id: 19,
		first_name: 'Skylar',
		last_name: 'Woodlands',
		avatar: 'https://robohash.org/eumaspernaturcupiditate.bmp?size=50x50&set=set1',
		comment:
			'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
		rating: 5,
		created: 155237688200,
	},
	{
		id: 20,
		first_name: 'Bartholomeo',
		last_name: 'Grubb',
		avatar: 'https://robohash.org/suntsapienteplaceat.bmp?size=50x50&set=set1',
		comment:
			'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
		rating: 1,
		created: 152597173500,
	},
];
