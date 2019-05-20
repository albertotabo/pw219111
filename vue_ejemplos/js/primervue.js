const app = new	Vue({
	el: "#app",
	data: {
		titulo: 'Hola Mundo con VUE',
		frutas: ['manzana','peras','platano','mango']
		frutas2: [
			{nombe:'manzana',cantidad: 10},
			{nombe:'peras',cantidad: 0},
			{nombe:'platanos',cantidad: 20},
			{nombe:'mangos',cantidad: 80}
		],
		nuevaFruta: '',
		total: 0
	},
	methods: {
		agregarFruta(){
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
			for(fruta of this.frutas2){
				this.total = this.total+fruta.cantidad;
			}
			return this.total;
		}
	}
}); 