const controller = {};

controller.list = (req,res) => {
	req.getConnection((err,conn)=>{
		conn.query('SELECT * FROM Customers',(err,customers)=>{
			if(err){
				res.json(err);
			}
			//console.log(customers);
			res.render('customer',{
				data: customers
			})
		});
	});
}
// controller.
controller.save = (req,res) =>{
	
}
module.exports = controller;