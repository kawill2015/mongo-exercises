/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?


 	Movie.find({title: /The Lord of the Rings/}, (err, data) =>{
 		//console.log(data);
 		var movieArr = [];
 		// [8,11,15]
 		for(var i in data) {
 			movieArr.push(data[i]._id);
 		} 
 		


 		Checkout.find(
	 		{
	 			$or:[
				{movieId:{"$in":movieArr}}
				]
	 		}
	 	);

 		Checkout.aggregate([
	    { $group : 
	    	{
		    	_id : "$userId"
	    	}
	    	
		}],
 			(err, data)=> {
 				console.log(data);		
 			
 	});

});

}; 	