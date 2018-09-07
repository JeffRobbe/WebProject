var app = new Vue({
	el: '#app',
	data: {
    currentPage: 'home',
    logged: false,
    selectedItem: {},
    currentUser: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNb: '' },
    cart: [],
		categories: [{	
			name: 'Men',
			products: [{
				name: 'Man Jacket',
				img: 'https://cdn.glitch.com/52c9599e-3a3d-4d16-97a9-0d157593a1c8%2Fmen-jacket.png?1535722763128',
				price: '76.50',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat enim nec lorem rhoncus lobortis. Nulla porta nibh mi, ut tristique mi lacinia nec. Aliquam id pellentesque diam. Etiam malesuada leo erat, non ullamcorper lectus feugiat sit amet. Duis quis sem porttitor, euismod sem sit amet, ornare elit. Sed lectus ante, semper eu lorem eu, maximus blandit purus. Nunc eu lacus id lorem porttitor porta. Mauris dapibus condimentum molestie. Donec dignissim lectus metus, pulvinar mollis dui gravida sit amet. Sed in sodales tellus. Ut nisi quam, finibus sed metus et, porta molestie odio. Aenean nec blandit est, ac mattis risus. Sed tortor libero, bibendum sollicitudin orci vel, pulvinar fringilla urna. Aenean rutrum magna sed turpis elementum ornare ut eget nibh. Donec sollicitudin justo a ante venenatis pulvinar. In tincidunt nulla eget lacus molestie, ut accumsan lectus ultricies.'	},
			{	name: 'Man Shirt',
				img: 'https://cdn.glitch.com/52c9599e-3a3d-4d16-97a9-0d157593a1c8%2Fmen-shirt.png?1535722763519',
				price: '49.99',
				description: 'Praesent nibh massa, posuere ut sagittis at, vulputate ut urna. Curabitur luctus aliquet vestibulum. Suspendisse aliquet turpis vel consequat placerat. Nullam bibendum tortor sed enim tempus ullamcorper. Pellentesque sed leo tristique, efficitur magna ac, placerat leo. Ut vitae efficitur ligula, in laoreet justo. Suspendisse sit amet lectus bibendum, accumsan sapien ut, posuere est. Maecenas bibendum malesuada nibh non aliquam. Curabitur ac nibh luctus, semper odio et, hendrerit nibh. Nulla rutrum tempus venenatis. Phasellus malesuada commodo lorem et tempor. Donec consectetur bibendum condimentum. Vestibulum luctus porta dignissim. Cras molestie elit et tortor luctus condimentum. Duis id lectus enim.'	},
			{	name: 'Man T-shirt',
				img: 'https://cdn.glitch.com/52c9599e-3a3d-4d16-97a9-0d157593a1c8%2Fmen-t-shirt.png?1535722764622',
				price: '21.00',
				description: 'Praesent lacinia consequat dolor at facilisis. Etiam fringilla, felis a imperdiet vulputate, metus eros porttitor odio, vitae ultrices urna ex et felis. Vestibulum eleifend, tellus quis vestibulum sagittis, ligula ante varius risus, ut varius sem turpis ut tortor. Praesent eget mi convallis, fermentum ligula sed, condimentum lacus. Sed id erat massa. Praesent sodales rhoncus ipsum sed faucibus. Vivamus tempor suscipit vehicula. Mauris ligula magna, tincidunt vitae malesuada suscipit, pretium sed dolor. Ut ullamcorper est lorem, vel ornare nisl rutrum et. Duis in diam porttitor, maximus enim et, interdum ipsum. Cras viverra sed nisi quis consequat. Sed condimentum bibendum pharetra.'	}]},
		{	name: 'Women',
			products: [{
				name: 'Woman Jacket',
				img: 'https://cdn.glitch.com/52c9599e-3a3d-4d16-97a9-0d157593a1c8%2Fwomen-jacket.png?1535722765265',
				price: '89.00',
				description: 'Aenean pellentesque vitae felis sed ornare. Nunc sollicitudin ex et blandit iaculis. Etiam efficitur vitae sapien sed interdum. Proin nec lobortis metus. Donec faucibus neque turpis. Donec vehicula dictum felis non rutrum. Pellentesque diam felis, condimentum quis ligula vulputate, pulvinar scelerisque nibh. Sed semper eget velit ac luctus. Quisque nulla lectus, mollis nec tempor eget, cursus vitae sem. Suspendisse elementum sit amet lectus in mollis. Cras porta neque quis sem consequat tincidunt. Morbi imperdiet mi eu leo ullamcorper, id pellentesque libero feugiat. Nam sed mi justo. Mauris viverra eros eu nunc mollis, at lacinia lectus congue. Vestibulum sed malesuada arcu, at viverra eros.'	},
			{	name: 'Woman Shirt',
				img: 'https://cdn.glitch.com/52c9599e-3a3d-4d16-97a9-0d157593a1c8%2Fwomen-shirt.png?1535722764911',
				price: '56.50',
				description: 'Sed porttitor varius risus, venenatis tempor erat pulvinar eget. Sed vel gravida ligula, sit amet interdum urna. Sed efficitur risus id lorem pulvinar congue. Nullam volutpat orci at lacinia laoreet. In non semper orci. Donec auctor arcu quis mauris laoreet, nec blandit orci iaculis. Sed sed quam et quam vestibulum maximus vel quis lacus. Pellentesque blandit accumsan lacus eget laoreet. Vestibulum sit amet massa nisl. Suspendisse fermentum, nibh quis pellentesque lobortis, enim augue pharetra ipsum, id tincidunt libero nibh vitae nisl. Vestibulum sed vehicula ante. Quisque finibus in velit at convallis. Sed at est est. Ut et mi lacinia, luctus nisl vitae, tempus ante. Mauris massa nulla, facilisis in tristique nec, placerat et mi. Suspendisse vel ultrices elit, consectetur pharetra risus.'	},
			{	name: 'Woman T-shirt',
				img: 'https://cdn.glitch.com/52c9599e-3a3d-4d16-97a9-0d157593a1c8%2Fwomen-t-shirt.png?1535722764420',
				price: '18.99',
				description: 'Curabitur lectus nibh, aliquam sit amet finibus a, mattis vitae urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet tellus at justo porttitor ultrices vel vitae dolor. Nam placerat ullamcorper lorem, eget euismod sapien faucibus sed. Phasellus condimentum orci non augue pulvinar condimentum. Maecenas scelerisque viverra vehicula. Donec dapibus felis porttitor sollicitudin interdum. Sed placerat massa tempor est tincidunt dignissim ac id neque. Aliquam non velit elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam congue metus at lorem mollis, vitae faucibus turpis convallis. Ut condimentum dapibus metus, eu euismod ex sollicitudin vel.'	}]},
		{	name: 'Children',
			products: [{
				name: 'Child Jacket',
				img: 'https://cdn.glitch.com/52c9599e-3a3d-4d16-97a9-0d157593a1c8%2Fchildren-jacket.png?1535722762002',
				price: '59.99',
				description: 'Aenean bibendum mollis eros quis hendrerit. Maecenas ultricies aliquam commodo. Integer eget nunc id lorem sodales maximus at ut magna. Vivamus tincidunt lacus in metus placerat posuere. Ut varius odio eget augue euismod rutrum. In vitae pretium nibh, quis condimentum neque. Cras rutrum urna ac ligula luctus, ac tristique sem ullamcorper. Nulla dignissim massa sit amet diam viverra, ut euismod leo eleifend. In at laoreet metus. In hac habitasse platea dictumst. Aliquam scelerisque magna id felis eleifend, eu lacinia quam ullamcorper. Nunc orci leo, ultricies et sapien id, molestie porta augue. '	},
			{	name: 'Child Shirt',
				img: 'https://cdn.glitch.com/52c9599e-3a3d-4d16-97a9-0d157593a1c8%2Fchildren-shirt.png?1535722764759',
				price: '38.00',
				description: 'Aliquam fringilla, erat eget vestibulum euismod, massa mauris pretium sem, ac dapibus ex ipsum et felis. Vestibulum dignissim consequat sem ut lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam non nibh viverra, lobortis diam nec, ornare ipsum. Sed ligula nisi, bibendum at cursus varius, efficitur eget quam. Duis finibus vehicula turpis non fermentum. Etiam viverra, ante vitae placerat pellentesque, sapien dui rutrum diam, quis placerat lectus sapien a justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae dui dolor. Morbi justo massa, commodo id libero sed, molestie blandit elit. Praesent a arcu diam. Aliquam pretium, leo nec faucibus faucibus, nisl ipsum tempus dui, quis porttitor nisi arcu nec sem. Aenean aliquet mollis est, vitae facilisis quam porttitor sit amet. Sed at consectetur lectus. Mauris id efficitur tellus.'	},
			{	name: 'Child T-shirt',
				img: 'https://cdn.glitch.com/52c9599e-3a3d-4d16-97a9-0d157593a1c8%2Fchildren-t-shirt.png?1535722762742',
				price: '8.50',
				description: 'Quisque diam lectus, imperdiet et quam sed, cursus tempus felis. Cras velit urna, sagittis vel dui ac, gravida varius nunc. Vestibulum lacus magna, hendrerit id quam id, fringilla fringilla turpis. Phasellus accumsan tellus eget mauris varius pretium. Quisque elementum, velit eu semper scelerisque, lectus lectus placerat mauris, et efficitur magna est id nisi. Fusce venenatis dui vel nisi scelerisque elementum. Nullam nibh felis, porta nec fermentum ut, vestibulum ullamcorper felis. Cras quis ex lorem. Pellentesque efficitur in orci non congue. Curabitur commodo velit quis dolor venenatis vehicula. Sed nec arcu eu sapien imperdiet tempor at nec leo. Cras blandit vel arcu in tincidunt. Mauris consectetur condimentum neque, interdum consequat leo imperdiet vitae. Morbi semper sit amet mi vel mollis.'
			}]
		}],
		authors: [{
			firstname: 'Vanessa',
			lastname: 'Narvaez Ramirez',
			phoneNb: '+33 6 50 91 06 95',
      email: 'narvaezramirez@et.esiea.fr',
			link: '' },
		{	firstname: 'Jean-François',
			lastname: 'Robbe',
			phoneNb: '+33 7 81 06 98 09',
      email: 'robbe@et.esiea.fr',
			link: 'https://www.linkedin.com/in/robbe-jean-françois-3b660776'
		}],
  },
  methods: {
    addToCart: function(product) {
      this.cart.push(product);
    },
    remove: function(product) {
      this.cart.splice(this.cart.indexOf(product),1);
    },
    totalCart: function() {
      var total=0;
      for(var i=0;i<this.cart.length;i++) {
        total=total+parseFloat(this.cart[i].price);
      }
      return total;
    }
  }
});
