var rect = {
	perimeter: (x, y) => (2*(x+y)),
	area: (x,y) => (x*y)
};

function solvRect(l,b) {
	console.log("Solving for rectangle with l=" + l + " and b=" +b);

	if (l <= 0 || b <= 0){
		console.log("numbers must be over 0");

	} else{
		console.log("The area is: " + rect.area(l,b));
		console.log("The perimeter is: " + rect.perimeter(l,b));
	}

}

solvRect(2,4);
solvRect(3,5);
solvRect(0,5);
solvRect(-3,5);