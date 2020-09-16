var rect = require('./rectangle');

function solvRect(l,b) {
	console.log("Solving for rectangle with l=" + l + " and b=" +b);

	rect(l, b, (err, rectangle) => {
	if (err){
		console.log("Error: "+ err.message);

	} else{
		console.log("The area is: " + rectangle.area());
		console.log("The perimeter is: " + rectangle.perimeter());
	}

	});

console.log("This statment after the callback from rect()")

};

solvRect(2,4);
solvRect(3,5);
solvRect(0,5);
solvRect(-3,5);