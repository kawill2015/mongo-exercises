/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?

	Checkout.aggregate([
	    { $group : 
	    	{
		    	_id : "$movieId",
		    	"count": {$sum : 1} 
	    	}
		},
		{
			$sort: {"count": -1} //highest to lowest
		},
		{$limit: 1}], //selects only one index of the array 
  		(err, data) => {
  	console.log(data);
  			 var movieIds = data[0]._id;
	  
			Movie.findOne({_id: movieIds},
		
 			(err, data)=> {
 				console.log(data.title);
			
			});
	});
};


