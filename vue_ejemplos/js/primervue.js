const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Hola mundo pero con Vue',
		frutas: ['Manzana','Uva','Peras','Fresas'],
		frutas2: [
<<<<<<< HEAD
			{nombe:'manzana',cantidad: 10},
			{nombe:'peras',cantidad: 0},
			{nombe:'platanos',cantidad: 20},
			{nombe:'mangos',cantidad: 80}
=======
			{nombre:'Manzana',cantidad: 11},
			{nombre:'Uva',cantidad: 0},
			{nombre:'Peras',cantidad: 80},
			{nombre:'Fresas',cantidad: 110}
>>>>>>> 25891ced0a7fc4a5b4f5f8903719472cb7a52c6e
		],
		nuevaFruta: '',
		total: 0
	},
	methods: {
		agregarFruta(){
<<<<<<< HEAD
			//console.log("diste clic");
			this.frutas.push(this.nuevaFruta);
			this.frutas2.push({
				nombre: this.nuevaFruta,
				cantidad: 0
			})
			this.nuevaFruta = '';
		}
	},
	computed: {
		sumarFrutas(){
			this.total = 0;
=======
			//console.log("diste click");
			this.frutas.push(this.nuevaFruta);
			this.frutas2.push({
				nombre: this.nuevaFruta,
				cantidad:0
			})
			this.nuevaFruta='';

		}

	},
	computed: {
		sumarFrutas(){
			this.total= 0;
>>>>>>> 25891ced0a7fc4a5b4f5f8903719472cb7a52c6e
			for(fruta of this.frutas2){
				this.total = this.total+fruta.cantidad;
			}
			return this.total;
		}
	}
});

