/* jshint esversion:6 */

module.exports = function(mongoose, Checkout, Movie) {
	// What user(s) had the most checkouts?

	Checkout.aggregate([
    { $group : 
    	{
	    	_id : "$userId",
	    	"count": {$sum : 1} 
    	},
	},
	{
		$sort: {"count": -1} //highest to lowest
	},
	{$limit: 1}], //selects only one index of the array
  	(err, data) => {
  		console.log("User " + data[0]._id + " had the most checkouts");


  	});


};





